
import { useState } from "react";
import ProductDetails from "../Components/ProductDetails";
import STLViewer from "../Components/STLViewer";

const ProductCard = ({ product, showSTL = false }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="product-card">
        <div className="product-image">
          {showSTL && product.model ? (
            <STLViewer src={product.model} alt={`${product.name} STL model`} />
          ) : (
            <img src={product.image} alt={product.name} />
          )}

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
        showSTL={showSTL}
        onClose={() => setShowDetails(false)}
      />
    </>
  );
};


export default ProductCard;
