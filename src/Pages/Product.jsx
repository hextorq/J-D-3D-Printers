import ProductCard from "../Components/ProductCard";
import products from "../data/products.json";

export const Product = ({ limit }) => {
  const displayedProducts =
    limit !== undefined
      ? products.slice(0, limit)
      : products;

  return (
    <section className="products-section">
      <div className="products-heading">
        <p>OUR COLLECTION</p>
        <h2>Explore Our Products</h2>
      </div>

      <div className="products-grid">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};