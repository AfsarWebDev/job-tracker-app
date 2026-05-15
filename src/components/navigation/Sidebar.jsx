import { Link, useLocation } from "react-router-dom";
import { BarChart3, Briefcase, LayoutDashboard, Settings } from "lucide-react";

function Sidebar() {
  const location = useLocation();
  const navItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t dark:border-gray-700 p-2 md:static md:w-64 md:min-h-screen md:border-r md:border-t-0 md:p-4">
      <Link
        to="/dashboard"
        className="hidden md:block text-xl font-bold mb-6 text-gray-900 dark:text-white"
      >
        Trackr
      </Link>

      <nav className="flex justify-around gap-1 md:mt-6 md:flex-col md:justify-start md:gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-2 p-2 rounded-lg text-xs md:text-sm transition ${
                isActive
                  ? "bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
