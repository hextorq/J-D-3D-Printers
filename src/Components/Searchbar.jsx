const Searchbar = ({
  value,
  onChange,
  placeholder = "Search products...",
}) => {
  return (
   <div className="products-page-search">
     
      <input
        type="search"
        placeholder={placeholder}
        aria-label="Search products"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-80 rounded-full border border-[#c8ad9b] bg-white/80 py-3 pl-11 pr-5 text-[#722f37] shadow-sm outline-none transition-all duration-300 placeholder:text-[#a17b78] focus:border-[#722f37] focus:ring-2 focus:ring-[#722f37]/20"
      />

      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#722f37]" aria-hidden="true">
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M16 16l5 5" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  );
};

export default Searchbar;
