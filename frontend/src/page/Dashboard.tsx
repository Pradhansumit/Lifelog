import Sidebar from "../components/Sidebar";
import BlogEntry from "../components/main/BlogEntry";
import CalendarView from "../components/main/CalendarView";
import Export from "../components/main/Export";
import MoodStats from "../components/main/MoodStats";

import { useState } from "react";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <>
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu}>
        <main className="p-4 bg-slate-100 rounded-2xl ">
          {activeMenu === "Home" ? (
            <BlogEntry />
          ) : activeMenu === "Calendar" ? (
            <CalendarView />
          ) : activeMenu === "Export" ? (
            <Export />
          ) : (
            <MoodStats />
          )}
        </main>
      </Sidebar>
    </>
  );
};

export default Dashboard;
