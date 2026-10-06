import { useEffect, useState } from "react";

function App() {
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function handleCategoryChange(newCategory) {
    if (newCategory === category) {
      return;
    }

    setLoading(true);
    setProducts([]);
    setError("");
    setCategory(newCategory);
  }

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        const url =
          category === "all"
            ? "https://dummyjson.com/products?limit=0"
            : `https://dummyjson.com/products/category/${category}`;

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const data = await response.json();

        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }

        setError(error.message);
        setLoading(false);
      }
    }

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, [category]);

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900">Product Explorer</h1>

        <p className="mt-2 text-slate-600">
          Category:
          <span className="ml-1 font-semibold text-indigo-600">{category}</span>
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => handleCategoryChange("all")}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-700"
          >
            All
          </button>

          <button
            type="button"
            onClick={() => handleCategoryChange("smartphones")}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-white"
          >
            Smartphones
          </button>

          <button
            type="button"
            onClick={() => handleCategoryChange("laptops")}
            className="rounded-lg bg-slate-800 px-4 py-2 text-white"
          >
            Laptops
          </button>

          <button
            type="button"
            onClick={() => handleCategoryChange("beauty")}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-700"
          >
            Beauty
          </button>
        </div>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow">
          {loading && <p className="text-slate-500">Loading...</p>}

          {!loading && error && <p className="text-red-600">{error}</p>}

          {!loading && !error && products.length > 0 && (
            <div className="space-y-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="rounded-lg border border-slate-200 p-4"
                >
                  {product.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
