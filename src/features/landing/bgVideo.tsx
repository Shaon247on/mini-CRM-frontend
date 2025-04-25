import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export default function BGVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="size-full absolute z-[2] bg-white/60 dark:bg-black/85" />
      <video
        src="/video-2.mp4"
        className="absolute rotate-180 top-0 left-0 w-full h-full object-cover z-[1]"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-popins font-extrabold text-gray-800 dark:text-white animate-fadeInUp">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl animate-fadeInUp delay-200">
          Discover the platform built to deliver the services you deserve —
          fast, reliable, and secure.
        </p>
        <div className="flex space-x-4 mt-8 animate-fadeInUp delay-500">
          <Link to={"/login"}>
            <Button
              size={"lg"}
              variant="heroLogin"
              className="!bg-primary !text-white !hover:bg-[#2563EB] dark:!bg-gray-800 dark:!text-white dark:!hover:bg-[#37474f]"
            >
              Login
            </Button>
          </Link>
          <Link to={"/login"}>
            <Button
              size={"lg"}
              variant="heroLogin"
              className="!bg-[#ff6e40] hover:!bg-[#ff5722] dark:!bg-[#ff8a65] dark:hover:!bg-[#ff7043]"
            >
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
