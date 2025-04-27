import axios from "axios";
import { ClientType } from "../components/columns";
import { useAuth } from "@/provider/AuthContext";
import { useDashboard } from "@/provider/DashboardContext";

const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/clients`;

export const useClientServices = () => {
  const { token } = useAuth();
  const { clientId } = useDashboard();

  if(token === null) return
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const SaveClient = async (data: ClientType) => {
    if (!data) return null;

    const payload = { ...data, clientId };

    if (data.id === 0) {
      const response = await axios.post(apiUrl, payload, { headers });
      return response.data;
    } else {
      const response = await axios.put(`${apiUrl}/${data.id}`, payload, { headers });
      return response.data;
    }
  };

  const DeleteClient = async (id: number | undefined, creatorId: number | undefined) => {
    if (!id) throw new Error("Client ID is required for deletion.");

    const response = await axios.delete(`${apiUrl}/${id}`, {
      headers,
      data: { creatorId },
    });
    return response.data;
  };

  const GetClient = async (creatorId: number | undefined) => {
    if (!creatorId) throw new Error("Client ID is required.");

    const response = await axios.get(apiUrl, {
      headers,
      params: { creatorId },
    });
    return response.data;
  };

  const GetClientById = async (id: number, creatorId: number) => {
    if (!id || !creatorId) throw new Error("Both ID and Client ID are required.");

    const response = await axios.get(`${apiUrl}/${id}`, {
      headers,
      params: { creatorId },
    });
    return response.data;
  };

  return { SaveClient, DeleteClient, GetClient, GetClientById };
};
