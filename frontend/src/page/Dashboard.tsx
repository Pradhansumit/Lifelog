import Sidebar from "@/components/Sidebar";
import BlogEntry from "@/components/main/BlogEntry";
import CalendarView from "@/components/main/CalendarView";

import { useState } from "react";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Home"); // default active

  return (
    <>
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu}>
        <main className="p-4 bg-slate-100 rounded-2xl ">
          {activeMenu === "Home" ? (
            <BlogEntry></BlogEntry>
          ) : (
            <CalendarView></CalendarView>
          )}
        </main>
      </Sidebar>
    </>
  );
};

export default Dashboard;
