import {
  Bell,
  Contact,
  LogOut,
  MailIcon,
  MessageSquareIcon,
  Search,
  Settings,
} from "lucide-react";
import { ModeToggle } from "../../mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/provider/AuthContext";
import { Link } from "react-router-dom";
import { useDashboard } from "@/provider/DashboardContext";

export default function DashboardNavigation() {
  const { user, logout } = useAuth();
  const { setNavHeader, navHeader, setIsSideBar } = useDashboard();
  return (
    <>
      <div className="hidden md:flex justify-center gap-x-8 mt-2">
        <div className="relative ">
          <MailIcon size={20} color="#b0bec5" />
          <span className="absolute -top-3 -right-3 size-[15px] flex justify-center items-center rounded-full p-[2px] text-xs bg-[#ff6e40]">
            2
          </span>
        </div>
        <div className="relative">
          <Bell size={20} color="#b0bec5" />
          <span className="absolute -top-3 -right-3 size-[15px] flex justify-center items-center rounded-full p-[2px] text-xs bg-[#ff6e40]">
            2
          </span>
        </div>
        <div className="relative">
          <Contact size={20} color="#b0bec5" />
        </div>
        <div className="relative">
          <Search size={20} color="#b0bec5" />
        </div>
      </div>

      {/* Right - Auth & Theme Toggle */}
      <div className="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src={user?.photo || "https://github.com/shadcn.png"}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-1 p-0">
              <DropdownMenuItem>
                <Link
                  onClick={() => setNavHeader("Settings")}
                  to={"/settings"}
                  className={`gap-2 py-2 px-6 ${
                    navHeader === "settings" ? "bg-white/40" : "bg-none"
                  } text-sm hover:bg-white/40 w-full flex flex-col items-start justify-center`}
                >
                  <div className="flex items-centen justify-start gap-2">
                    <Settings/>
                    <span className="">Settings</span>
                  </div>
                </Link>
              </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                logout();
                setIsSideBar(false)
                
              }}
            >
              <div
                className={`gap-2 py-2 px-6 text-sm hover:bg-white/40 w-full flex flex-col items-start justify-center`}
              >
                <div className="flex items-centen justify-start gap-2">
                  <LogOut />
                  <span className="">Logout</span>
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <ModeToggle />
        <MessageSquareIcon size={30} color="#b0bec5" />
      </div>
    </>
  );
}
