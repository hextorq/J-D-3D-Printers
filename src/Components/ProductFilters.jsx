const ProductFilters = ({
  categories,
  category,
  minPrice,
  maxPrice,
  maxPriceLimit,
  onCategoryChange,
  onMinPriceChange,
  onMaxPriceChange,
  onReset,
}) => {
  const hasFilters = category !== "all" || minPrice !== "" || maxPrice !== "";
  const minimumValue = Number(minPrice || 0);
  const maximumValue = Number(maxPrice || maxPriceLimit);
  const range = Math.max(maxPriceLimit, 1);
  const minimumPercent = (minimumValue / range) * 100;
  const maximumPercent = (maximumValue / range) * 100;

  return (
    <form className="product-filters" onSubmit={(event) => event.preventDefault()}>
      <div className="product-filter-field">
        <label htmlFor="product-category-filter">Category</label>
        <select
          id="product-category-filter"
          name="category"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="all">All categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="product-filter-field price-range-field">
        <label htmlFor="product-min-price">
          Price range <span>₹{minimumValue} – ₹{maximumValue}</span>
        </label>
        <div className="price-range-slider">
          <div className="price-range-track" />
          <div
            className="price-range-progress"
            style={{ left: `${minimumPercent}%`, right: `${100 - maximumPercent}%` }}
          />
          <input
            id="product-min-price"
            name="minPrice"
            className="price-range-thumb"
            type="range"
            min="0"
            max={maxPriceLimit}
            step="50"
            value={minimumValue}
            aria-label="Minimum price"
            onChange={(event) => {
              const value = Math.min(Number(event.target.value), maximumValue);
              onMinPriceChange(value === 0 ? "" : String(value));
            }}
          />
          <input
            id="product-max-price"
            name="maxPrice"
            className="price-range-thumb"
            type="range"
            min="0"
            max={maxPriceLimit}
            step="50"
            value={maximumValue}
            aria-label="Maximum price"
            onChange={(event) => {
              const value = Math.max(Number(event.target.value), minimumValue);
              onMaxPriceChange(value === maxPriceLimit ? "" : String(value));
            }}
          />
        </div>
        <div className="price-range-limits" aria-hidden="true">
          <span>₹0</span>
          <span>₹{maxPriceLimit}</span>
        </div>
      </div>

      <button
        type="button"
        className="product-filter-reset"
        onClick={onReset}
        disabled={!hasFilters}
      >
        Reset filters
      </button>
    </form>
  );
};

export default ProductFilters;
