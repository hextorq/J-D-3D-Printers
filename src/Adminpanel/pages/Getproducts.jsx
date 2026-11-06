import { useState } from "react";
import { supabase } from "../../supabase";

export const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showProducts, setShowProducts] = useState(false);

  const handleViewProducts = async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      setError(error.message);
    } else {
      setProducts(data);
      setShowProducts(true);
    }

    setLoading(false);
  };

  return (
    <section className="products-page">
      <button
        className="view-products-button"
        onClick={handleViewProducts}
        disabled={loading}
      >
        {loading ? "Loading..." : "View Products"}
      </button>

      {error && <p className="products-error">Error: {error}</p>}

      {showProducts && (
        <div>
          <h2 className="products-heading">Products ({products.length})</h2>

          {products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <div className="products-grid">
              {products.map((product) => (
                <article className="product-card" key={product.id}>
                  {product.image && (
                    <img
                      className="product-image"
                      src={product.image}
                      alt={product.name}
                    />
                  )}
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">₹{product.price}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};



export default ViewProducts;