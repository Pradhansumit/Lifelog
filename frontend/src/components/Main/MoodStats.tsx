import api from "@/config/axios";
import getUserEmailFromToken from "@/utils/userInfoToken";
import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  LineChart,
  Line,
} from "recharts";

const COLORS = {
  happy: "#34d399",
  good: "#fbbf24",
  neutral: "#a1a1aa",
  sad: "#60a5fa",
  angry: "#f87171",
};

const MoodStats = () => {
  const [chartData, setChartData] = useState({ pie: [], bar: [] });
  const [lineChartData, setLineChartData] = useState([]);

  const apiEntries = async () => {
    try {
      const userEmail = getUserEmailFromToken();
      const res = await api.post("/entry/getuserentries/", { user: userEmail });
      const moodEntries = res.data.data;

      const moodCountMonth = {};
      const moodCountWeek = {};
      const lineMap = {};

      const now = new Date();
      const oneMonthAgo = new Date(now);
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

      const oneWeekAgo = new Date(now);
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 6);

      moodEntries.forEach((entry) => {
        const mood = entry.mood;
        const createdAt = new Date(entry.createdAt);
        const date = entry.createdAt.split("T")[0];

        // Line chart data
        if (!lineMap[date]) {
          lineMap[date] = {
            date,
            happy: 0,
            sad: 0,
            good: 0,
            angry: 0,
            neutral: 0,
          };
        }
        lineMap[date][mood] += 1;

        // Pie chart: 1 month
        if (createdAt >= oneMonthAgo) {
          moodCountMonth[mood] = (moodCountMonth[mood] || 0) + 1;
        }

        // Bar chart: 1 week
        if (createdAt >= oneWeekAgo) {
          moodCountWeek[mood] = (moodCountWeek[mood] || 0) + 1;
        }
      });

      // Prepare data for charts
      const pieData = Object.entries(moodCountMonth).map(([mood, count]) => ({
        name: mood,
        value: count,
      }));

      const barData = Object.entries(moodCountWeek).map(([mood, count]) => ({
        name: mood,
        value: count,
      }));

      const lineData = Object.values(lineMap).sort(
        (a, b) => new Date(a.date) - new Date(b.date),
      );

      setChartData({ pie: pieData, bar: barData });
      setLineChartData(lineData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiEntries();
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl mb-4">Mood Summary</h2>
      <div className="flex flex-1/2 mb-5">
        {/* Pie Chart */}
        {chartData.pie.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData.pie}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                dataKey="value"
              >
                {chartData.pie.map((entry) => (
                  <Cell key={entry.name} fill={COLORS[entry.name]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500">No mood entries found.</p>
        )}
        {/* Bar Chart */}
        {chartData.bar.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData.bar}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8">
                {chartData.bar.map((entry) => (
                  <Cell key={entry.name} fill={COLORS[entry.name]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500">No mood entries found.</p>
        )}
      </div>
      <div className="flex flex-1/2">
        {lineChartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              {Object.keys(COLORS).map((mood) => (
                <Line
                  key={mood}
                  type="monotone"
                  dataKey={mood}
                  stroke={COLORS[mood]}
                  dot={false}
                  strokeWidth={2}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500">No mood entries found.</p>
        )}
      </div>
    </div>
  );
};

export default MoodStats;
