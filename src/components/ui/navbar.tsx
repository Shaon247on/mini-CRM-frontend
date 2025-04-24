import { Link } from "react-router-dom";
import { Button } from "./button";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";

export default function Navbar() {
  const [tag, setTag] = useState<string>("Home");
  return (
    <header className="w-full relative px-4 py-2 border-b border-border bg-[#37474f]">
      <nav className="w-full mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <div className="absolute font-playfair text-2xl italic font-bold h-[61px] text-white bg-[#ff6e40] flex justify-center items-center -ml-12 px-20">
          <Link to="/">FreelanceHub</Link>
        </div>

        <div className="w-48 h-[61px] flex flex-col lg:pl-8 justify-end absolute left-60 bg-[#f6f8ff] transform skew-x-[30deg]">
          <div className="h-[3px] bg-orange-500 w-16 mb-1 ml-3.5" />
          <h1 className="-skew-x-[30deg] text-3xl font-source-sans font-semibold text-[#455a64]">
            {tag}
          </h1>
        </div>

        <div />

        {/* Middle - Menu Links */}
        <div className="space-x-4 hidden md:flex ml-12">
          <Link
            onClick={() => setTag("Home")}
            to="/"
            className="header_link text-[#b0bec5] font-medium"
          >
            Home
          </Link>
          <Link
            onClick={() => setTag("About")}
            to="/about"
            className="header_link text-[#b0bec5] font-medium"
          >
            About
          </Link>
          <Link
            onClick={() => setTag("FAQ")}
            to="/faq"
            className="header_link text-[#b0bec5] font-medium"
          >
            FAQ
          </Link>
          <Link
            onClick={() => setTag("Contact")}
            to="/contact"
            className="header_link text-[#b0bec5] font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Right - Auth & Theme Toggle */}
        <div className="flex items-center space-x-2">
          <Link to="/login">
            <Button variant="heroLogin" className="!bg-primary !text-white !hover:bg-[#2563EB] dark:!bg-gray-800 dark:!text-white dark:!hover:bg-[#37474f]">Login</Button>
          </Link>
          <Link to="/register">
            <Button variant="heroLogin" className="!bg-[#b0bec5] !text-white dark:!text-white">Register</Button>
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
