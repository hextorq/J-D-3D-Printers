
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { supabase } from "../supabase";

export const Product = ({ limit }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
   const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const value = search.toLowerCase().trim();

    return (
      product.name?.toLowerCase().includes(value) ||
      product.description?.toLowerCase().includes(value) ||
      String(product.price).includes(value)
    );
  });

  const displayedProducts =
    limit !== undefined
      ? filteredProducts.slice(0, limit)
      : filteredProducts;

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error loading products: {error}</p>;
  }

  return (
    <section className="products-section">
      <div className="products-heading">
        <p>OUR COLLECTION</p>
        <h2>Explore Our Products</h2>
      </div>
      <div className="relative">
        <input
          type="search"
          placeholder="Search name, description, or price..."
          aria-label="Search products"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-80 rounded-full border border-[#c8ad9b] bg-white/80 py-3 pl-11 pr-5 text-[#722f37] shadow-sm outline-none transition-all duration-300 placeholder:text-[#a17b78] focus:border-[#722f37] focus:ring-2 focus:ring-[#722f37]/20"
  />

  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#722f37]">
    <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            ><circle cx="10.5" cy="10.5" r="6.5" />
              <path d="M16 16l5 5" strokeLinecap="round" />
            </svg>
  </span>
      </div>

      <div className="products-grid">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  );
};

export default Product;
