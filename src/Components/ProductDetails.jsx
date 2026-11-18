import { useEffect } from "react";

const ProductDetails = ({ product, onClose }) => {
  useEffect(() => {
    if (!product) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="product-details-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="product-details-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-details-title"
      >
        <button
          type="button"
          className="product-details-close"
          onClick={onClose}
          aria-label="Close product details"
        >
          ×
        </button>

        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details-content">
          <p className="product-category">{product.category}</p>
          <h2 id="product-details-title">{product.name}</h2>
          <p className="product-details-description">
            {product.description || "A carefully crafted 3D printed product made for your space."}
          </p>
          <p className="product-details-price">₹{product.price}</p>
          <button type="button" className="product-details-action" onClick={onClose}>
            Continue browsing
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
