/* This hook is not unit tested because of react-hooks-testing-library not yet finalizing their React 18 changes */
import { useState, useEffect } from "react";
import { BagOfCatsResponse } from "@/consts/interfaces";

interface FetchResult {
  bagOfCats: BagOfCatsResponse | null;
  error: string | null;
  loading: boolean;
}

const useFetchBagOfCats = (): FetchResult => {
  const [bagOfCats, setBagOfCats] = useState<BagOfCatsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBagOfCats = async () => {
      try {
        const response = await fetch(
          `https://quantcats-bfc2a3b9cfdf.herokuapp.com/bag`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Bag fetch failed!");
        }

        const bagJson: BagOfCatsResponse = await response.json();
        setBagOfCats(bagJson);
      } catch (error) {
        setError(`${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchBagOfCats();
  }, []);

  return { bagOfCats, error, loading };
};

export default useFetchBagOfCats;
