import { useQuery } from "@tanstack/react-query";
import { useDashboard } from "@/provider/DashboardContext";
import { DataTable } from "./components/data-table";
import { ClientType, columns } from "./components/columns";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useClientServices } from "./services/clientService";
import { useAuth } from "@/provider/AuthContext";
import ClientPopUp from "./form/ClientPopUp";



export default function Client() {
  const { isSideBar } = useDashboard();
  const {user} = useAuth()
  const {GetClient} = useClientServices()



  // Using React Query to fetch the data
  const { data = [], isPending, error } = useQuery({
    queryKey: ["client"],
    queryFn: async () => {
      const response = await GetClient(user?.id);
      return response; // Not response.data again
    },
  });

  console.log("Getting data:",data)

  if (isPending) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-red-500">Failed to load clients. The error is {error.message}</div>;
  }


  return (
    <div className="flex justify-end">
      <ClientPopUp/>
      <h1
        className={`h-full transition-all duration-700 ease-in-out
          ${isSideBar ? "w-full md:w-[70%] lg:w-[82.5%]" : "w-full"}
        `}
      >
        <Suspense fallback={<LoadingSpinner />}>
            <div className="m-5">
              <DataTable<ClientType, unknown> data={data} columns={columns} />
            </div>        
        </Suspense>
      </h1>
    </div>
  );
}
