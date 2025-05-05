import { useCustomToast } from "../app/hooks/useToast";
import axios from "axios";

export function setupApiErrorHandling() {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const toast = useCustomToast();
      toast.showErrorToast(error);
      return Promise.reject(error);
    }
  );

  async function safeFetch(input: RequestInfo, init?: RequestInit) {
    try {
      const response = await fetch(input, init);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error) {
      const toast = useCustomToast();
      toast.showErrorToast(error);
      throw error;
    }
  }

  return { safeFetch };
}