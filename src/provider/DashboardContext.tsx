import { createContext, useContext, useState, ReactNode } from "react";

interface DashboardState {
  totalClients: number;
  totalProjects: number;
  remindersDueSoon: number;
  projectsByStatus: Record<string, number>;
  isLoading: boolean;
  navHeader: string;
  isSideBar: boolean;
  clientId: number | undefined;
  clientPopUp: boolean;
}

interface DashboardContextType extends DashboardState {
  setTotalClients: (count: number) => void;
  setTotalProjects: (count: number) => void;
  setRemindersDueSoon: (count: number) => void;
  setProjectsByStatus: (statusCounts: Record<string, number>) => void;
  setIsLoading: (loading: boolean) => void;
  setNavHeader: (navHeader: string) => void;
  setIsSideBar: (isSideBar: boolean) => void;
  setClientId: (clientId: number | undefined) => void;
  setClientPopUp: (isSideBar: boolean) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  // All stored states start ---------------
  
  const [totalClients, setTotalClients] = useState<number>(0);
  const [totalProjects, setTotalProjects] = useState<number>(0);
  const [remindersDueSoon, setRemindersDueSoon] = useState<number>(0);
  const [projectsByStatus, setProjectsByStatus] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSideBar, setIsSideBar] = useState<boolean>(false);
  const [navHeader, setNavHeader] = useState<string>("Home");
  const [clientId, setClientId] = useState<number | undefined>(0);
  const [clientPopUp, setClientPopUp] = useState<boolean>(false);

// All stored states end---------------


// seting states to the provider value

  const values = {
    totalClients,
    totalProjects,
    remindersDueSoon,
    projectsByStatus,
    isLoading,
    navHeader,
    isSideBar,
    clientId, 
    clientPopUp, 
    setTotalClients,
    setTotalProjects,
    setRemindersDueSoon,
    setProjectsByStatus,
    setIsLoading,
    setNavHeader,
    setIsSideBar,
    setClientId,
    setClientPopUp
  };

  return (
    <DashboardContext.Provider value={values}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
