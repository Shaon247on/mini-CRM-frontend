import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/provider/AuthContext";
import { useDashboard } from "@/provider/DashboardContext";
import {
  AlarmClock,
  ClipboardList,
  Folder,
  Home,
  Settings,
  Users,
} from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface SidebarLink {
  name: string;
  path: string;
  icon: ReactNode;
}

const sidebarLinks: SidebarLink[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <Home className="w-5 h-5" color="#FFFFFF" />,
  },
  {
    name: "Clients",
    path: "/clients",
    icon: <Users className="w-5 h-5" color="#FFFFFF" />,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: <Folder className="w-5 h-5" color="#FFFFFF" />,
  },
  {
    name: "Logs",
    path: "/logs",
    icon: <ClipboardList className="w-5 h-5" color="#FFFFFF" />,
  },
  {
    name: "Reminders",
    path: "/reminders",
    icon: <AlarmClock className="w-5 h-5" color="#FFFFFF" />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Settings className="w-5 h-5" color="#FFFFFF" />,
  },
];

export default function SlideBarNavigation() {
  const { user } = useAuth();
  const { setNavHeader, navHeader } = useDashboard();
  return (
    <div className="flex flex-col items-center">
      <div className="mt-5 flex flex-col items-center justify-center gap-2 mb-5">
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-[#f5f5f5ED] font-roboto">
            {user?.username}
          </h2>
          <h2 className="text-xs text-[#b0bec5e6] font-roboto uppercase">
            {user?.role}
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center font-roboto w-full">
        {sidebarLinks.map((item) => (
          <Link
            onClick={() => setNavHeader(item.name)}
            key={item.name}
            to={item.path}
            className={`gap-2 p-2 ${
              navHeader === item.name ? "bg-white/40" : "bg-none"
            } text-sm hover:bg-white/40 py-4 w-full flex flex-col items-start justify-center`}
          >
            <div className="flex items-centen justify-start gap-2 lg:ml-7">
              {item.icon}
              <span className="text-white">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
