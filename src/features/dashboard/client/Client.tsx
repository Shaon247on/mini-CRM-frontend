import { useQuery } from "@tanstack/react-query";
import { useDashboard } from "@/provider/DashboardContext";
import { DataTable } from "./components/data-table";
import { ClientType, columns } from "./components/columns";
import { Suspense, useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useClientServices } from "./services/clientService";
import { useAuth } from "@/provider/AuthContext";



export default function Client() {
  const { isSideBar } = useDashboard();
  const { GetClient } = useClientServices(); // Using the service
  const {user} = useAuth()
const [data, setData] = useState<ClientType[]>([])

  useEffect(()=>{
    const getAllClients = async()=>{
      try {
        const response = await GetClient(user?.id)
      if(response){
        setData(response)
      }
      } catch (error) {
       console.log(error) 
      }
    }
    getAllClients()
  },[user])


  console.log("getting all clients:",data)

  // if(user === null) return null

  // // Using React Query to fetch the data
  // const { data: response = { data: [], status: "", message: "" }, isPending, error } = useQuery({
  //   queryKey:['clients'],
  //   queryFn: async()=>{
  //     const response = await GetClient(user?.id)
  //     return response.data
  //   }
  // });

  // console.log("Getting data:",response)

  // if (isPending) {
  //   return <LoadingSpinner />;
  // }

  // if (error) {
  //   return <div className="text-red-500">Failed to load clients. The error is {error.message}</div>;
  // }


  return (
    <div className="flex justify-end">
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
