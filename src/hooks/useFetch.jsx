// react
import { useEffect, useState } from "react";

// axios
import axios from "axios";

// context
import { useAuth } from "../context/AuthContext";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        setData(res.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, user]);

  return { data, loading, error };
}

export default useFetch;
