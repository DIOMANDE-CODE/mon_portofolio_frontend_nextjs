import api from "@/utils/axios";
import { useState, useEffect } from "react";

export default function useFetch(url:string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    api
      .get(url)
      .then((res) => {
        if (isMounted) {
          setData(res.data);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.response?.data || err.message);
          setData(null);
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

      return () => {
        isMounted = false
      }
  }, [url]);

  return {data, loading, error}
}
