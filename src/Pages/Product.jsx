import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { supabase } from "../supabase";

export const Product = ({ limit }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setProducts(data);
      }

      setLoading(false);
    };

    fetchProducts();
  }, []);

  const displayedProducts =
    limit !== undefined ? products.slice(0, limit) : products;

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

      <div className="products-grid">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Product;