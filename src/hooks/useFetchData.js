import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (apiUrl) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl);
        setResult(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      setResult(null);
      setLoading(true);
      setError(null);
    };
  }, [apiUrl]);

  return { result, loading, error };
};

export default useFetchData;