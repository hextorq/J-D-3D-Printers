import { useState } from "react";
import { supabase } from "../supabase";

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
    <section>
      <button onClick={handleViewProducts} disabled={loading}>
        {loading ? "Loading..." : "View Products"}
      </button>

      {error && <p>Error: {error}</p>}

      {showProducts && (
        <div>
          <h2>Products ({products.length})</h2>

          {products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            products.map((product) => (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>₹{product.price}</p>

                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    width="150"
                  />
                )}
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default ViewProducts;