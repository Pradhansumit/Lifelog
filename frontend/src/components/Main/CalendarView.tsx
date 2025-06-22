import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";
import api from "@/config/axios";
import getUserEmailFromToken from "@/utils/userInfoToken";
import CalendarColors from "../ui/CalendarColors";

const moodColors = {
  happy: "#34d399", // green
  sad: "#60a5fa", // blue
  angry: "#f87171", // red
  neutral: "#a1a1aa", // gray
  good: "#fbbf24", // yellow
};

const CalendarView = () => {
  const [moodMap, setMoodMap] = useState({});

  const apiEntries = async () => {
    try {
      const userEmail = getUserEmailFromToken();
      const res = await api.post("/entry/getuserentries/", { user: userEmail });
      const moodEntries = res.data.data;

      const map = {};
      moodEntries.forEach((entry) => {
        const date = entry.createdAt.split("T")[0];
        map[date] = entry.mood;
      });

      setMoodMap(map);
    } catch (error) {
      console.log(error);
    }
  };

  // calling the api on mount
  useEffect(() => {
    apiEntries();
  }, []);

  // for displaying the entries in day cell view
  const dayCellDidMount = (arg) => {
    const dateStr = arg.date.toISOString().split("T")[0];
    const mood = moodMap[dateStr];

    if (mood && moodColors[mood]) {
      arg.el.style.backgroundColor = moodColors[mood];
      arg.el.style.color = "white";
    }
  };

  return (
    <div>
      <FullCalendar
        key={Object.keys(moodMap).join(",")}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        dayCellDidMount={dayCellDidMount}
      />
      <CalendarColors />
    </div>
  );
};

export default CalendarView;
