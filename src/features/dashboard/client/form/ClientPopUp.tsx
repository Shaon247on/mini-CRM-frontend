import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useDashboard } from "@/provider/DashboardContext";
import { useForm } from "react-hook-form";
import { ClientSchema } from "../components/clientSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useClientServices } from "../services/clientService";
import { useAuth } from "@/provider/AuthContext";
import { Form } from "@/components/ui/form";

export default function ClientPopUp() {
  const { user } = useAuth();
  const { clientPopUp, setClientPopUp, clientId } = useDashboard();
  const { GetClientById } = useClientServices();

  useEffect(() => {
    if (clientId !== 0) {
      const getTheClient = async () => {
        const response = await GetClientById(clientId, user?.id);
        form.setValue("id", response.id);
        form.setValue("name", response.name);
        form.setValue("company", response.company);
        form.setValue("creatorId", response.creatorId);
        form.setValue("notes", response.notes);
        form.setValue("phone", response.phone);
        form.setValue("email", response.email);
      };
    }
  }, []);

  const form = useForm<z.infer<typeof ClientSchema>>({
    resolver: zodResolver(ClientSchema),
    defaultValues: {
      id: 0,
      company: "",
      email: "",
      name: "",
      creatorId: 0,
      phone: "",
      notes: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof ClientSchema>) => {
    console.log(data);
  };

  return (
    <Dialog open={clientPopUp} onOpenChange={(value) => setClientPopUp(value)}>
      <DialogContent>
        <DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              
              
            </form>
          </Form>
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
}
