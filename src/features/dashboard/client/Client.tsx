import { useDashboard } from "@/provider/DashboardContext";

export default function Client() {
  const { isSideBar } = useDashboard();
  return (
    <div className="flex justify-end">
      <h1
        className={`
    border-2 h-full border-red-800
    transition-all duration-700 ease-in-out
    ${isSideBar ? "w-[82.5%]" : "w-full"}
  `}
      >
        Client
      </h1>
    </div>
  );
}