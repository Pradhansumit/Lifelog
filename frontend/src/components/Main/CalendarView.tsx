import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect } from "react";
import api from "@/config/axios";
import getUserEmailFromToken from "@/utils/userInfoToken";

const CalendarView = () => {
  const apiEntries = async () => {
    try {
      const userEmail = getUserEmailFromToken();
      const res = api.post("/entry/getuserentries/", { user: userEmail });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    apiEntries();
  }, []);
  return (
    <div>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
  );
};

export default CalendarView;
