
import { useEffect, useState } from "react";
import { supabase } from "../../supabase";

export const ViewProducts = ({ onClose }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      setProducts(data || []);
    }

    setLoading(false);
  };
  useEffect(() => {
    handleViewProducts();
  }, []);

  









  
  const onDelete = async (id) => {
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      return;
    }

    alert("Product deleted successfully!");
    handleViewProducts();
  };

  const onEdit = async (id) => {
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      return;
    }

    alert("Product deleted successfully!");
    handleViewProducts();
  };






  return (
    <div className="products-overlay">
      <section
        className="products-page"
        role="dialog"
        aria-modal="true"
        aria-labelledby="view-products-heading"
      >

      <div className="flex justify-between items-center mb-4">
        <h2 id="view-products-heading" className="products-heading">
          Products ({products.length})
        </h2>

        <button
          type="button"
          onClick={onClose}
          className="text-xl"
        >
          ✕ Close
        </button>
      </div>

      {loading && <p>Loading products...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && products.length === 0 && (
        <p>No products found.</p>
      )}

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
              <p className="product-description">
                {product.description}
              </p>
              <p className="product-price">
                ₹{product.price}
              </p>
            </div>

            <button
              onClick={() => onEdit(product)}
              className="rounded-lg bg-[#722f37] px-4 py-2 text-white"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(product.id)}
              className="rounded-lg bg-[#722f37] px-4 py-2 text-white"
            >
              Delete
            </button>

          </article>
        ))}
      </div>
      </section>
    </div>
  );
};

export default ViewProducts;
