"use client";
import { useState } from "react";
import MarketplaceSidebar from "./MarketplaceSidebar";
import MarketplaceHeader  from "./MarketplaceHeader";
import ProductGrid        from "./ProductGrid";

export type Category =
  | "all" | "electronics" | "vehicles" | "clothing"
  | "furniture" | "free" | "property";

export type Product = {
  id: string;
  name: string;
  price: number | "Free";
  location: string;
  category: Category;
  emoji: string;
  bgColor: string;
  badge?: "New" | "Sale" | "Free";
  discount?: number;
};

export const PRODUCTS: Product[] = [
  { id:"1",  name:"MacBook Pro M1 2021",   price:45000, location:"Kathmandu", category:"electronics", emoji:"💻", bgColor:"#e7f3ff", badge:"New"  },
  { id:"2",  name:"Sofa set 3+1+1",         price:12500, location:"Lalitpur",  category:"furniture",   emoji:"🛋️", bgColor:"#faeeda", discount:20  },
  { id:"3",  name:"MTB Bicycle 26 inch",    price:8000,  location:"Bhaktapur", category:"vehicles",    emoji:"🚲", bgColor:"#e1f5ee"                },
  { id:"4",  name:"iPhone 13 128GB",        price:32000, location:"Kathmandu", category:"electronics", emoji:"📱", bgColor:"#eeedfe", badge:"New"  },
  { id:"5",  name:"Brand new dress",        price:1200,  location:"Lalitpur",  category:"clothing",    emoji:"👗", bgColor:"#faece7"                },
  { id:"6",  name:"Acoustic Guitar",        price:9500,  location:"Kathmandu", category:"electronics", emoji:"🎸", bgColor:"#fbeaf0", discount:15  },
  { id:"7",  name:"Samsung 55 inch TV",     price:55000, location:"Kathmandu", category:"electronics", emoji:"📺", bgColor:"#e7f3ff"                },
  { id:"8",  name:"Honda Dio scooter",      price:180000,location:"Kathmandu", category:"vehicles",    emoji:"🛵", bgColor:"#e1f5ee", badge:"New"  },
  { id:"9",  name:"Old textbooks set",      price:"Free",location:"Kathmandu", category:"free",        emoji:"📚", bgColor:"#e1f5ee", badge:"Free" },
  { id:"10", name:"Wooden chair",           price:"Free",location:"Lalitpur",  category:"free",        emoji:"🪑", bgColor:"#faeeda", badge:"Free" },
  { id:"11", name:"Plant cuttings",         price:"Free",location:"Bhaktapur", category:"free",        emoji:"🌱", bgColor:"#e7f3ff", badge:"Free" },
  { id:"12", name:"2BHK flat for rent",     price:25000, location:"Kathmandu", category:"property",    emoji:"🏠", bgColor:"#eeedfe"                },
];

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery,    setSearchQuery]    = useState("");

  const filtered = PRODUCTS.filter((p) => {
    const matchCat   = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="flex h-[calc(100vh-56px)] bg-bg-secondary overflow-hidden">
      <MarketplaceSidebar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onSearch={setSearchQuery}
      />
      <div className="flex-1 overflow-y-auto flex flex-col">
        <MarketplaceHeader
          searchQuery={searchQuery}
          onSearch={setSearchQuery}
        />
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}