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
import { clientSchema } from "./clientSchema";

export type ClientType = z.infer<typeof clientSchema>;

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
    //   const customer = row.original;

      //   const handleDelete = async () => {
      //     if (!window.confirm("Are you sure you want to delete this customer?"))
      //       return;
      //     try {
      //       const isDeleted = await deleteCustomer(customer.id);
      //       if (isDeleted) {
      //         toast.success("Reservation Deleted successfully!");
      //       } else {
      //         toast.error("Reservation Delete Failed!");
      //       }
      //     } catch (error) {
      //       toast.error("An error occurred while deleting the reservation.");
      //     }
      //   };

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
              <DropdownMenuItem onClick={() => {}}>
                <Pencil size={18} className="mr-2" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Trash size={18} className="mr-2" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Toaster />
        </>
      );
    },
  },
];
