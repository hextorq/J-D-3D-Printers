
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import Searchbar from "../Components/Searchbar";
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
      <Searchbar
        value={search}
        onChange={setSearch}
        placeholder="Search name, description, or price..."
      />

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
