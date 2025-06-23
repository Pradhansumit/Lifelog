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
  const [events, setEvents] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const apiEntries = async () => {
    try {
      const userEmail = getUserEmailFromToken();
      const res = await api.post("/entry/getuserentries/", { user: userEmail });
      const moodEntries = res.data.data;

      const formattedEvents = moodEntries.map((entry) => ({
        title: entry.mood,
        date: entry.createdAt.split("T")[0],
        backgroundColor: moodColors[entry.mood],
        borderColor: moodColors[entry.mood],
        textColor: "#fff",
        extendedProps: {
          note: entry.note,
          createdAt: entry.createdAt,
        },
      }));

      setEvents(formattedEvents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiEntries();
  }, []);

  return (
    <div>
      <FullCalendar
        key={events.length}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={(info) => {
          const { title, startStr, extendedProps } = info.event;
          setSelectedEntry({
            mood: title,
            note: extendedProps.note,
            date: startStr,
          });
        }}
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
