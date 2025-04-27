import { Dialog } from "@/components/ui/dialog";
import { useDashboard } from "@/provider/DashboardContext";
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog";

export default function ClientPopUp() {
  const {clientPopUp, setClientPopUp, clientId} = useDashboard()

  return (
    <Dialog open={clientPopUp} onOpenChange={(value)=> setClientPopUp(value)}>
      <DialogContent>
        <DialogTitle>
            Hello POP up {clientId}
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
}
