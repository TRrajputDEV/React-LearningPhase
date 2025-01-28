import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      setError(false);
      try {
        const res = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch currency data");
        }
        const json = await res.json();
        setData(json.rates || {}); // Use rates from the API response
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setError(true);
        setData({});
      }
    };

    fetchCurrencyInfo();
  }, [baseCurrency]);

  return error ? {} : data;
}

export default useCurrencyInfo;
