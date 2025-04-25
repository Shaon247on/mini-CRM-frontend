import { Link } from "react-router-dom";
import { useAuth } from "@/provider/AuthContext";
import LandingNavigation from "./components/landingNavigation";
import { useDashboard } from "@/provider/DashboardContext";
import DashboardNavigation from "./components/dashboardNavigation";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import 'animate.css';
import SlideBarNavigation from "./components/slideBarNavigation";


export default function Navbar() {
  const { user } = useAuth();
  const { navHeader, setIsSideBar, isSideBar } = useDashboard();
  
  console.log("login user: ", user);
  return (
    <header className="w-full relative px-4 py-2 bg-[#37474f]">
      <nav className="w-full mx-auto flex items-center justify-between">
        <div className={`absolute z-20 top-[56px] left-0 min-h-[calc(100vh-57px)] w-60 bg-[#37474f] animate__animated animate__fast
          ${isSideBar ? "animate__slideInLeft" : "animate__slideOutLeft"}
          `}>
            <SlideBarNavigation/>
        </div>
        {/* Left - Logo */}
        <div className={`absolute space-x-4 font-playfair text-2xl italic font-bold h-[60px] text-white bg-[#ff6e40] flex justify-center items-center ${user === null ? "-ml-16":"-ml-20"} px-20`}>
          {user !== null && (
            <Button onClick={()=> setIsSideBar(!isSideBar)} variant="ghost" size={"icon"} className="relative ">
              <Menu className="absolute cursor-pointer" />
            </Button>
          )}
          <Link to="/">FreelanceHub</Link>
        </div>

        <div className="w-52 h-[60px] flex flex-col lg:pl-8 justify-end absolute left-60 bg-[#f6f8ff] transform skew-x-[30deg]">
          <div className="h-[3px] bg-orange-500 w-16 mb-1 ml-3.5" />
          <h1 className="-skew-x-[30deg] text-3xl font-source-sans font-semibold text-[#455a64]">
            {navHeader}
          </h1>
        </div>

        <div />

        {/* Middle - Menu Links */}
        {user === null ? <LandingNavigation /> : <DashboardNavigation />}
      </nav>
    </header>
  );
}
