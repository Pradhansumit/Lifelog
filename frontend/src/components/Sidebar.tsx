import api from "@/config/axios";
import { jwtDecode } from "jwt-decode";
import {
  Home,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  ChartBar,
  Download,
  LogOut,
  Settings,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Sidebar = ({ activeMenu, setActiveMenu, children }) => {
  const [expanded, setExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const menuItems = [
    { name: "Home", icon: <Home size={23} /> },
    { name: "Calendar", icon: <CalendarDays size={23} /> },
    { name: "Mood Stats", icon: <ChartBar size={23} /> },
    { name: "Export", icon: <Download size={23} /> },
  ];

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await api.get("users/logout/");
      if (res.status === 200) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const listOfCookie = document.cookie.split(";");
    let token = "";

    listOfCookie.forEach((element) => {
      if (element.trim().startsWith("jwt_token")) {
        token = element.trim().split("=")[1];
      }
    });

    setUserInfo(jwtDecode(token));
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`h-full border-r transition-all duration-300 bg-muted text-muted-foreground flex flex-col justify-between ${
          expanded ? "w-64" : "w-16"
        }`}
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between p-4">
            {expanded && (
              <span className="text-4xl font-semibold text-foreground lifelog-header">
                Lifelog
              </span>
            )}
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="text-muted-foreground hover:text-foreground cursor-pointer p-1 rounded-lg bg-slate-200"
            >
              {expanded ? (
                <ChevronLeft size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>
          </div>

          {/* Menu */}
          <nav className="mt-4 flex flex-col gap-1">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveMenu(item.name)}
                className={`flex items-center px-4 py-2 text-sm cursor-pointer rounded-md mx-2 transition-colors
                ${expanded ? "justify-start gap-3" : "justify-center"}
                ${
                  activeMenu === item.name
                    ? "rounded-lg bg-slate-200 text-accent-foreground"
                    : "hover:bg-slate-200 hover:text-accent-foreground"
                }`}
              >
                <div className="min-w-[20px]">{item.icon}</div>
                {expanded && <span>{item.name}</span>}
              </div>
            ))}
          </nav>
        </div>

        {/* Footer with Profile Dropdown */}
        <div className="p-2">
          <div
            className={`relative ${
              expanded ? "p-3 bg-slate-300" : "p-1"
            } rounded-lg `}
          >
            <div
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={`flex items-center gap-3  rounded-md  cursor-pointer transition-colors ${
                expanded ? "justify-start" : "justify-center"
              }`}
            >
              <img
                src="https://i.pravatar.cc/40"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              {expanded && (
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-medium text-foreground">
                    {console.log(userInfo)}
                    {userInfo.name}
                  </span>
                  <span className="text-sm font-medium">{userInfo.email}</span>
                </div>
              )}
            </div>
          </div>

          {/* Dropdown */}
          {dropdownOpen && (
            <div
              className={`absolute bottom-14 left-3 bg-popover border border-border rounded-md shadow-md text-sm w-48 z-10 ${
                !expanded ? "left-5 w-40" : "bottom-18"
              }`}
            >
              {/* <div className="flex items-center px-4 py-2 hover:bg-muted cursor-pointer gap-2">
                <Settings size={18} /> <span>Settings</span>
              </div> */}
              <div
                className="flex items-center px-4 py-2 hover:bg-muted cursor-pointer gap-2 text-destructive"
                onClick={handleLogout}
              >
                <LogOut size={18} /> <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 bg-slate-300 text-foreground">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
