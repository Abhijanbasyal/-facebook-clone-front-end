"use client";

export default function MarketplaceHeader({
  searchQuery, onSearch,
}: {
  searchQuery: string;
  onSearch: (q: string) => void;
}) {
  return (
    <div className="flex items-center gap-4 mx-4 mt-4 mb-0 px-5 py-3.5
                    bg-bg-primary rounded-2xl border border-border-default flex-shrink-0">
      <div>
        <h2 className="text-lg font-semibold text-text-primary leading-tight">
          Marketplace
        </h2>
        <p className="text-xs text-text-secondary">Buy and sell in your community</p>
      </div>

      {/* Search */}
      <div className="flex-1 relative">
        <i className="ti ti-search absolute left-3.5 top-1/2 -translate-y-1/2
                      text-text-tertiary pointer-events-none" style={{fontSize:15}} aria-hidden="true" />
        <input
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search products, categories..."
          className="w-full pl-9 pr-4 py-2 rounded-full bg-bg-secondary
                     text-text-primary text-sm outline-none border border-border-default
                     focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>

      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary
                         hover:bg-primary-hover text-white text-sm font-medium
                         transition-colors flex-shrink-0">
        <i className="ti ti-plus" style={{fontSize:14}} aria-hidden="true" />
        Sell item
      </button>
    </div>
  );
}