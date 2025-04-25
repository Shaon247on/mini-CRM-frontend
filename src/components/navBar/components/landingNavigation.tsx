import { useDashboard } from "@/provider/DashboardContext";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { ModeToggle } from "../../mode-toggle";
import { NavLink } from "react-router-dom";

export default function LandingNavigation() {
    const {setNavHeader} = useDashboard()
  return (
    <>
      <div className="space-x-4 hidden md:flex ml-12">
        <NavLink
          onClick={() => setNavHeader("Home")}
          to="/"
          className="header_link text-[#b0bec5] font-medium"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setNavHeader("About")}
          to="/about"
          className="header_NavLink text-[#b0bec5] font-medium"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => setNavHeader("FAQ")}
          to="/faq"
          className="header_NavLink text-[#b0bec5] font-medium"
        >
          FAQ
        </NavLink>
        <NavLink
          onClick={() => setNavHeader("Contact")}
          to="/contact"
          className="header_NavLink text-[#b0bec5] font-medium"
        >
          Contact
        </NavLink>
      </div>

      {/* Right - Auth & Theme Toggle */}
      <div className="flex items-center space-x-2">
        <Link to="/login">
          <Button
            variant="heroLogin"
            className="!bg-primary !text-white !hover:bg-[#2563EB] dark:!bg-gray-800 dark:!text-white dark:!hover:bg-[#37474f]"
          >
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button
            variant="heroLogin"
            className="!bg-[#ff6e40] hover:!bg-[#ff5722] dark:!bg-[#ff8a65] dark:hover:!bg-[#ff7043]"
          >
            Register
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </>
  );
}
