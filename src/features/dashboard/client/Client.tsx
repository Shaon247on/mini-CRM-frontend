import { useDashboard } from "@/provider/DashboardContext";
import { DataTable } from "./components/data-table";
import { ClientType, columns } from "./components/columns";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export const mockClients: ClientType[] = [
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "01712345678",
    company: "Creative Co.",
    notes: "Interested in a long-term partnership.",
    creatorId: 1234,
  },
  {
    name: "Michael Smith",
    email: "michael.smith@example.com",
    phone: "01898765432",
    company: "Smith & Sons",
    notes: "Needs follow-up after Q2.",
    creatorId: 1234,
  },
  {
    name: "Sarah Lee",
    email: "sarah.lee@example.com",
    phone: "01987654321",
    company: "TechWave Ltd.",
    notes: "",
    creatorId: 1234,
  },
  {
    name: "David Kim",
    email: "david.kim@example.com",
    phone: "01611223344",
    company: "Edge Innovations",
    notes: "Requested a quote for mobile app redesign.",
    creatorId: 1234,
  },
  {
    name: "Emma Watson",
    email: "emma.watson@example.com",
    phone: "01599887766",
    company: "Watson Ventures",
    notes: "Prefers email communication.",
    creatorId: 1234,
  },
];

export default function Client() {
  const { isSideBar } = useDashboard();

  return (
    <div className="flex justify-end">
      <h1
        className={`h-full transition-all duration-700 ease-in-out
          ${isSideBar ? "w-full md:w-[70%] lg:w-[82.5%]" : "w-full"}
        `}
      >
        <Suspense fallback={<LoadingSpinner />}>
            <div className="m-5">
              <DataTable<ClientType, unknown> data={mockClients} columns={columns} />
            </div>        
        </Suspense>
      </h1>
    </div>
  );
}
