"use client";
import { useState } from "react";
import { Product } from "./MarketplacePage";

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);

  const priceDisplay =
    product.price === "Free"
      ? "Free"
      : `Rs. ${product.price.toLocaleString()}`;

  return (
    <article className="bg-bg-primary rounded-2xl border border-border-default
                        overflow-hidden cursor-pointer group
                        transition-transform duration-200 ease-out
                        hover:-translate-y-1 hover:border-primary/30">

      {/* Image area */}
      <div className="relative h-[160px] flex items-center justify-center text-5xl"
           style={{ background: product.bgColor }}>
        <span className="transition-transform duration-200 group-hover:scale-110">
          {product.emoji}
        </span>

        {/* Badge */}
        {(product.badge || product.discount) && (
          <span className={`absolute top-2 left-2 text-[11px] font-medium px-2 py-0.5
                            rounded-full
                            ${product.badge === "Free"
                              ? "bg-success text-white"
                              : product.badge === "New"
                              ? "bg-primary text-white"
                              : "bg-error text-white"
                            }`}>
            {product.discount ? `-${product.discount}%` : product.badge}
          </span>
        )}

        {/* Wishlist button — appears on hover */}
        <button
          onClick={(e) => { e.stopPropagation(); setLiked((v) => !v); }}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-bg-primary
                     border border-border-default flex items-center justify-center
                     opacity-0 group-hover:opacity-100 transition-all duration-150
                     hover:scale-110"
        >
          <i className={`ti ti-heart`}
             style={{ fontSize:13, color: liked ? "#e24b4a" : "var(--color-text-secondary)" }}
             aria-hidden="true" />
        </button>
      </div>

      {/* Body */}
      <div className="p-3">
        <p className={`text-[15px] font-semibold mb-0.5
                       ${product.price === "Free" ? "text-success" : "text-text-primary"}`}>
          {priceDisplay}
        </p>
        <p className="text-xs text-text-secondary mb-1.5 truncate">{product.name}</p>
        <div className="flex items-center gap-1 text-[11px] text-text-tertiary">
          <i className="ti ti-map-pin" style={{fontSize:11}} aria-hidden="true" />
          {product.location}
        </div>
      </div>
    </article>
  );
}