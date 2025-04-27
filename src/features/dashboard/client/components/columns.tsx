import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toaster } from "@/components/ui/sonner";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import { z } from "zod";
import { ClientSchema } from "./clientSchema";
import Swal from 'sweetalert2'
import { useDashboard } from "@/provider/DashboardContext";
import { useClientServices } from "../services/clientService";
import { useAuth } from "@/provider/AuthContext";

export type ClientType = z.infer<typeof ClientSchema>;

export const columns: ColumnDef<ClientType>[] = [
  {
    accessorKey: "",
    header: "No",
    cell: ({ row }: { row: any }) => {
      return row.index + 1;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const client: ClientType = row.original;
      const {user} = useAuth()
      const {setClientId} = useDashboard()
      const {DeleteClient} = useClientServices()

        const handleDelete = async () => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
              const response = await DeleteClient(client?.id, user?.id)
              if(response){
                Swal.fire({
                  title: "Deleted!",
                  text: "Client has been deleted.",
                  icon: "success"
                });
              }else{
                Swal.fire({
                  title: "Deleted Failed!",
                  text: "Client deletation has been Failed.",
                  icon: "error"
                });
              }
            }
          });
        };

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setClientId(client?.id)}>
                <Pencil size={18} className="mr-2" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete}>
                <Trash size={18}  className="mr-2" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Toaster />
        </>
      );
    },
  },
];
