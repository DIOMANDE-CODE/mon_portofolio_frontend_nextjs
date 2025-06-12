"use client";

import { useState } from "react";
import api from "@/utils/axios"; // axios instance personnalisée
import axios from "axios";

export default function useMutation() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const mutate = async (
    url: string,
    method = "POST",
    data = {},
    config = {}
  ) => {
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await api.request({ url, method, data, ...config });
      setSuccess("Opération réussie");
      return res.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.detail || err.message || "Erreur inconnue"
        );
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erreur inconnue");
      }
      throw err;
    }
  };

  return { mutate, loading, success, error };
}
