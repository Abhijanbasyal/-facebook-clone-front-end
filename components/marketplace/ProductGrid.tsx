"use client";
import { useState } from "react";
import { Product, Category } from "./MarketplacePage";
import ProductCard from "./ProductCard";

const FILTER_CHIPS: { value: Category | "all"; label: string }[] = [
  { value: "all",         label: "All"         },
  { value: "electronics", label: "Electronics" },
  { value: "vehicles",    label: "Vehicles"    },
  { value: "clothing",    label: "Clothing"    },
  { value: "furniture",   label: "Furniture"   },
  { value: "free",        label: "Free stuff"  },
  { value: "property",    label: "Property"    },
];

export default function ProductGrid({ products }: { products: Product[] }) {
  const [chip, setChip] = useState<Category | "all">("all");

  const freeItems   = products.filter((p) => p.price === "Free");
  const regularItems = products.filter((p) => p.price !== "Free");

  const displayed = chip === "all"
    ? regularItems
    : chip === "free"
    ? freeItems
    : products.filter((p) => p.category === chip);

  return (
    <div className="flex-1 px-4 py-4 flex flex-col gap-6">

      {/* Filter chips */}
      <div className="flex gap-2 flex-wrap">
        {FILTER_CHIPS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setChip(value)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium border
                        transition-all duration-150
                        ${chip === value
                          ? "bg-primary text-white border-primary"
                          : "bg-bg-primary text-text-secondary border-border-default hover:border-primary/40"
                        }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Today's picks */}
      {(chip === "all") && (
        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3">
            Today's picks
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {regularItems.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}

      {/* Filtered results */}
      {chip !== "all" && (
        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3">
            {FILTER_CHIPS.find((f) => f.value === chip)?.label}
            <span className="ml-2 text-sm font-normal text-text-tertiary">
              ({displayed.length} items)
            </span>
          </h2>
          {displayed.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16
                            text-text-tertiary gap-3">
              <i className="ti ti-search-off" style={{fontSize:40}} aria-hidden="true" />
              <p className="text-sm">No items found in this category</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {displayed.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </section>
      )}

      {/* Free stuff section — only on "all" tab */}
      {chip === "all" && freeItems.length > 0 && (
        <section>
          <h2 className="text-base font-semibold text-text-primary mb-3">
            Free stuff near you
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {freeItems.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}