import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import STLViewer from "../../Components/STLViewer";
import ProductForm from "./Addproduct";

const TABLES = {
  product: { table: "products", label: "Products", bucket: "product-images" },
  custom3d: { table: "custom3d_stl", label: "Custom 3D", bucket: "custom3d-models" },
};

const storagePathFromUrl = (url, bucket) => {
  if (!url) return null;
  const marker = `/storage/v1/object/public/${bucket}/`;
  const markerIndex = url.indexOf(marker);
  return markerIndex === -1 ? null : decodeURIComponent(url.slice(markerIndex + marker.length));
};

export const ViewProducts = ({ onClose }) => {
  const [contentType, setContentType] = useState("product");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);

  const loadProducts = async () => {
    const config = TABLES[contentType];
    setLoading(true);
    setError("");

    const { data, error: fetchError } = await supabase
      .from(config.table)
      .select("*")
      .order("id", { ascending: true });

    if (fetchError) {
      setError(fetchError.message);
      setProducts([]);
    } else {
      setProducts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, [contentType]);

  const handleDelete = async (product) => {
    const config = TABLES[contentType];
    const confirmed = window.confirm(`Delete “${product.name}”? This cannot be undone.`);
    if (!confirmed) return;

    setError("");
    const { error: deleteError } = await supabase
      .from(config.table)
      .delete()
      .eq("id", product.id);

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    const fileUrl = contentType === "custom3d" ? product.model : product.image;
    const filePath = storagePathFromUrl(fileUrl, config.bucket);
    let storageWarning = "";

    if (filePath) {
      const { error: storageError } = await supabase.storage
        .from(config.bucket)
        .remove([filePath]);
      if (storageError) storageWarning = ` The database item was deleted, but its file could not be removed: ${storageError.message}`;
    }

    alert(`${config.label} item deleted successfully.${storageWarning}`);
    loadProducts();
  };

  const config = TABLES[contentType];

  return (
    <div className="products-overlay">
      <section className="products-page admin-products-modal" role="dialog" aria-modal="true" aria-labelledby="edit-products-heading">
        <div className="admin-products-header flex justify-between items-center mb-4">
          <h2 id="edit-products-heading" className="products-heading">
            Edit {config.label} ({products.length})
          </h2>
          <button type="button" onClick={onClose} className="text-xl" aria-label="Close edit products">
            ✕ Close
          </button>
        </div>

        <div className="admin-form-toggle admin-products-toggle mb-5" role="group" aria-label="Choose content type">
          {Object.entries(TABLES).map(([value, item]) => (
            <label key={value}>
              <input type="radio" name="editContentType" value={value} checked={contentType === value} onChange={() => setContentType(value)} />
              <span>{item.label}</span>
            </label>
          ))}
        </div>

        {loading && <p>Loading {config.label.toLowerCase()}...</p>}
        {error && <p className="text-red-500" role="alert">{error}</p>}
        {!loading && !error && products.length === 0 && <p>No {config.label.toLowerCase()} available.</p>}

        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card admin-product-card" key={product.id}>
              {contentType === "custom3d" && product.model ? (
                <div className="product-image"><STLViewer src={product.model} alt={`${product.name} 3D model`} /></div>
              ) : product.image ? (
                <img className="product-image" src={product.image} alt={product.name} />
              ) : null}

              <div className="product-details">
                <p className="product-category">{product.category || "Uncategorized"}</p>
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">₹{product.price}</p>
              </div>

              <div className="admin-product-actions">
                <button type="button" onClick={() => setEditingProduct(product)} className="rounded-lg bg-[#722f37] px-4 py-2 text-white">Edit</button>
                <button type="button" onClick={() => handleDelete(product)} className="rounded-lg bg-[#722f37] px-4 py-2 text-white">Delete</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {editingProduct && (
        <ProductForm
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSaved={loadProducts}
        />
      )}
    </div>
  );
};

export default ViewProducts;
