"use client";
import { Category } from "./MarketplacePage";

const NAV_LINKS = [
  { icon: "ti-layout-grid",  label: "Browse all"         },
  { icon: "ti-bell",         label: "Notifications"      },
  { icon: "ti-inbox",        label: "Inbox"              },
  { icon: "ti-shield",       label: "Marketplace access" },
];

const EXPANDABLE = [
  { icon: "ti-shopping-bag", label: "Buying"  },
  { icon: "ti-tag",          label: "Selling" },
];

const CATEGORIES: { value: Category; icon: string; label: string }[] = [
  { value: "vehicles",    icon: "ti-car",           label: "Vehicles"            },
  { value: "property",    icon: "ti-home",           label: "Property for rent"   },
  { value: "clothing",    icon: "ti-shirt",          label: "Clothing"            },
  { value: "electronics", icon: "ti-device-laptop",  label: "Electronics"         },
  { value: "furniture",   icon: "ti-armchair",       label: "Furniture"           },
  { value: "free",        icon: "ti-gift",           label: "Free stuff"          },
];

export default function MarketplaceSidebar({
  activeCategory, onCategoryChange, onSearch,
}: {
  activeCategory: Category;
  onCategoryChange: (c: Category) => void;
  onSearch: (q: string) => void;
}) {
  return (
    <aside className="w-[280px] flex-shrink-0 bg-bg-primary border-r
                      border-border-default flex flex-col overflow-y-auto h-full">

      {/* Header */}
      <div className="flex items-center justify-between px-3 pt-4 pb-2">
        <h1 className="text-xl font-semibold text-text-primary">Marketplace</h1>
        <button className="w-9 h-9 rounded-full bg-bg-secondary hover:bg-bg-tertiary
                           flex items-center justify-center transition-colors"
                aria-label="Settings">
          <i className="ti ti-settings text-text-primary" style={{fontSize:17}} aria-hidden="true" />set
        </button>
      </div>

      {/* Search */}
      <div className="relative px-3 mb-2">
        <i className="ti ti-search absolute left-6 top-1/2 -translate-y-1/2
                      text-text-tertiary pointer-events-none" style={{fontSize:15}} aria-hidden="true" />
        <input
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search Marketplace"
          className="w-full pl-8 pr-4 py-2 rounded-full bg-bg-secondary border-none
                     text-text-primary text-sm outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <hr className="border-border-default mx-3 mb-2" />

      {/* Nav links */}
      <nav className="flex flex-col gap-0.5 px-2">
        {NAV_LINKS.map(({ icon, label }) => (
          <button key={label}
                  onClick={() => onCategoryChange("all")}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-left
                              transition-colors w-full text-sm font-medium
                              ${label === "Browse all"
                                ? "bg-primary-light text-primary"
                                : "hover:bg-bg-secondary text-text-primary"
                              }`}>
            <span className="w-9 h-9 rounded-full bg-bg-secondary flex items-center
                             justify-center flex-shrink-0">
              <i className={`ti ${icon}`} style={{fontSize:17}} aria-hidden="true" />
            </span>
            {label}
          </button>
        ))}

        {EXPANDABLE.map(({ icon, label }) => (
          <button key={label}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl
                             hover:bg-bg-secondary transition-colors w-full text-sm
                             font-medium text-text-primary">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-bg-secondary flex items-center
                               justify-center flex-shrink-0">
                <i className={`ti ${icon}`} style={{fontSize:17}} aria-hidden="true" />
              </span>
              {label}
            </div>
            <i className="ti ti-chevron-right text-text-tertiary" style={{fontSize:14}} aria-hidden="true" />
          </button>
        ))}
      </nav>

      {/* Create listing */}
      <div className="px-3 py-2">
        <button className="w-full py-2.5 rounded-xl bg-primary hover:bg-primary-hover
                           text-white text-sm font-medium transition-colors flex items-center
                           justify-center gap-2">
          <i className="ti ti-plus" style={{fontSize:15}} aria-hidden="true" />
          Create new listing
        </button>
      </div>

      <hr className="border-border-default mx-3 my-1" />

      {/* Location */}
      <div className="px-4 py-2">
        <p className="text-xs font-semibold text-text-secondary mb-1">Location</p>
        <p className="text-sm text-primary cursor-pointer hover:underline">
          Kathmandu, Nepal · Within 65 km
        </p>
      </div>

      <hr className="border-border-default mx-3 my-1" />

      {/* Categories */}
      <p className="px-4 text-xs font-semibold text-text-tertiary uppercase
                    tracking-wider mt-2 mb-1">
        Categories
      </p>
      <div className="flex flex-col gap-0.5 px-2 pb-4">
        {CATEGORIES.map(({ value, icon, label }) => (
          <button key={value}
                  onClick={() => onCategoryChange(value)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-left
                              text-sm transition-colors w-full
                              ${activeCategory === value
                                ? "bg-primary-light text-primary font-medium"
                                : "hover:bg-bg-secondary text-text-primary"
                              }`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center
                              flex-shrink-0 text-sm
                              ${activeCategory === value ? "bg-primary-light" : "bg-bg-secondary"}`}>
              <i className={`ti ${icon}`} style={{fontSize:15}} aria-hidden="true" />
            </span>
            {label}
          </button>
        ))}
      </div>
    </aside>
  );
}