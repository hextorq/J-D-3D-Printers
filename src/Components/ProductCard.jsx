
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        <span className="product-badge">3D Printed</span>
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-footer">
          <span className="product-price">
            ₹{product.price}
          </span>

          <button className="product-btn">
            View Product <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;