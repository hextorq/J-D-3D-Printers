
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import ProductFilters from "../Components/ProductFilters";
import Searchbar from "../Components/Searchbar";
import { supabase } from "../supabase";

export const Product = ({ limit, showFilters = true }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
   const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
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

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const value = search.toLowerCase().trim();

    return (
      (product.name?.toLowerCase().includes(value) ||
        product.description?.toLowerCase().includes(value) ||
        String(product.price).includes(value)) &&
      (category === "all" || product.category === category) &&
      (minPrice === "" || Number(product.price) >= Number(minPrice)) &&
      (maxPrice === "" || Number(product.price) <= Number(maxPrice))
    );
  });

  const categories = [...new Set(products.map((product) => product.category).filter(Boolean))].sort();
  const maxPriceLimit = Math.max(
    500,
    Math.ceil(Math.max(...products.map((product) => Number(product.price) || 0), 0) / 100) * 100,
  );

  const displayedProducts =
    limit !== undefined
      ? filteredProducts.slice(0, limit)
      : filteredProducts;

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
      {showFilters ? (
        <div className="products-content-layout">
          <aside className="products-filter-sidebar" aria-label="Product filters">
            <Searchbar
              className="products-page-search"
              value={search}
              onChange={setSearch}
              placeholder="Search name, description, or price..."
            />
            <ProductFilters
              categories={categories}
              category={category}
              minPrice={minPrice}
              maxPrice={maxPrice}
              maxPriceLimit={maxPriceLimit}
              onCategoryChange={setCategory}
              onMinPriceChange={setMinPrice}
              onMaxPriceChange={setMaxPrice}
              onReset={() => {
                setCategory("all");
                setMinPrice("");
                setMaxPrice("");
              }}
            />
          </aside>

          <div className="products-results">
            <div className="products-grid">
              {displayedProducts.length > 0 ? (
                displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="products-grid">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Product;
