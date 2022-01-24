import { useEffect, useState } from "react";

function useJsonFetch(url, opts) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetch(url, opts);
        if (result.ok) {
          const json = await result.json();
          setData(json);
        } else {
          setError(`${result.status} ${result.statusText}`);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, opts]);

  return [data, loading, error];
}

export default useJsonFetch;
