import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Briefcase,
  LayoutDashboard,
  Settings,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();
  const navItems = [
    {
      label: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      label: "Applications",
      path: "/applications",
      icon: Briefcase,
    },
    {
      label: "Analytics",
      path: "/analytics",
      icon: BarChart3,
    },
    {
      label: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];
  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 min-h-screen p-4">
      <Link
      to="/" 
      className="text-xl font-bold mb-6">Trackr</Link>
      
      <nav className="mt-6 flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 p-2 rounded-lg transition ${
                isActive 
                ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white" 
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"}`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
