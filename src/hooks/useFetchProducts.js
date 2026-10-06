import { useEffect, useState, useCallback } from "react";

/**
 * Custom hook to fetch products from an API.
 * Handles loading, error states, and unmount cleanup.
 *
 * @param {string} url - API endpoint URL (optional, defaults to dummyjson products)
 * @returns {{ products: Array, loading: boolean, error: string, refetch: Function }}
 */
export function useFetchProducts(
  url = "https://dummyjson.com/products?limit=10"
) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = useCallback(
    (signal) => {
      async function fetchProducts() {
        try {
          setLoading(true);
          setError("");

          const response = await fetch(url, { signal });

          if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
          }

          const data = await response.json();
          setProducts(data.products || []);
        } catch (err) {
          // Ignore AbortError when component unmounts
          if (err.name !== "AbortError") {
            setError(err.message || "An unexpected error occurred");
          }
        } finally {
          setLoading(false);
        }
      }

      fetchProducts();
    },
    [url]
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);

    // Cleanup: cancel in-flight request if component unmounts or URL changes
    return () => {
      controller.abort();
    };
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { products, loading, error, refetch };
}

export default useFetchProducts;
