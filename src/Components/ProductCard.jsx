
import { useState } from "react";
import ProductDetails from "../Components/ProductDetails";

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />

          <span className="product-badge">3D Printed</span>
        </div>

        <div className="product-info">
          <p className="product-category">{product.category}</p>

          <h3>{product.name}</h3>

          <p className="product-description">{product.description}</p>

          <div className="product-footer">
            <span className="product-price">₹{product.price}</span>

            <button
              type="button"
              className="product-btn"
              onClick={() => setShowDetails(true)}
            >
              View Product <span>→</span>
            </button>
          </div>
        </div>
      </div>

      <ProductDetails
        product={showDetails ? product : null}
        onClose={() => setShowDetails(false)}
      />
    </>
  );
};


export default ProductCard;
