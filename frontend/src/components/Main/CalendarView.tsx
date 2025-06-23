import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";
import api from "@/config/axios";
import getUserEmailFromToken from "@/utils/userInfoToken";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarColors from "../ui/calendarColors";

const moodColors = {
  happy: "#34d399",
  sad: "#60a5fa",
  angry: "#f87171",
  neutral: "#a1a1aa",
  good: "#fbbf24",
};

const CalendarView = () => {
  const [moodMap, setMoodMap] = useState({});
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleDateClick = (arg) => {
    const dateStr = arg.dateStr;
    const entry = moodMap[dateStr];
    if (entry) {
      setSelectedEntry({ ...entry, date: dateStr });
    } else {
      setSelectedEntry(null);
    }
  };

  const apiEntries = async () => {
    try {
      const userEmail = getUserEmailFromToken();
      const res = await api.post("/entry/getuserentries/", { user: userEmail });
      const moodEntries = res.data.data;
      console.log(moodEntries);

      const map = {};
      moodEntries.forEach((entry) => {
        const date = entry.createdAt.split("T")[0];
        map[date] = {
          mood: entry.mood,
          note: entry.note,
          createdAt: entry.createdAt,
        };
      });

      setMoodMap(map);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiEntries();
  }, []);

  const dayCellDidMount = (arg) => {
    const dateStr = arg.date.toISOString().split("T")[0];
    const entry = moodMap[dateStr];

    if (entry && entry.mood && moodColors[entry.mood]) {
      arg.el.style.backgroundColor = moodColors[entry.mood];
      arg.el.style.color = "white";
    } else {
      // ❗ Optional: reset cell style if no mood exists
      arg.el.style.backgroundColor = "";
      arg.el.style.color = "";
    }
  };

  return (
    <div>
      <FullCalendar
        key={Object.keys(moodMap).join(",")}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dayCellDidMount={dayCellDidMount}
        dateClick={handleDateClick}
      />

      <CalendarColors />

      {selectedEntry && (
        <div className="mt-4 p-4 rounded bg-gray-100 border border-gray-300">
          <p className="text-lg font-semibold">📅 {selectedEntry.date}</p>
          <p className="mt-2">
            <span className="font-medium">Mood:</span>{" "}
            <span className="capitalize">{selectedEntry.mood}</span>
          </p>
          <p className="mt-1 whitespace-pre-line">
            <span className="font-medium">Note:</span>{" "}
            {selectedEntry.note || "No note"}
          </p>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
