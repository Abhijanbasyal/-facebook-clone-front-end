// "use client";

// import { useState } from "react";
// import FriendSettingsModal from "./FriendSettingsModal";

// const menuItems = [
//   {
//     icon: "👥",
//     title: "Friends",
//   },
//   {
//     icon: "📩",
//     title: "Friend Requests",
//   },
//   {
//     icon: "✨",
//     title: "Suggestions",
//   },
//   {
//     icon: "🧑‍🤝‍🧑",
//     title: "All Friends",
//   },
// ];

// export default function FriendsSidebar() {
//   const [openSettings, setOpenSettings] = useState(false);

//   return (
//     <>
//       <div className="bg-bg-primary rounded-2xl border border-border-default p-4 shadow-sm">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-2xl font-bold">Friends</h1>

//           <button
//             onClick={() => setOpenSettings(true)}
//             className="w-10 h-10 rounded-full bg-bg-secondary hover:bg-bg-tertiary transition flex items-center justify-center text-lg"
//           >
//             ⚙️
//           </button>
//         </div>

//         <div className="flex flex-col gap-2">
//           {menuItems.map((item) => (
//             <button
//               key={item.title}
//               className="flex items-center gap-4 p-3 rounded-xl hover:bg-bg-secondary transition text-left"
//             >
//               <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-xl">
//                 {item.icon}
//               </div>

//               <div>
//                 <p className="font-semibold text-sm">{item.title}</p>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

//       <FriendSettingsModal
//         open={openSettings}
//         onClose={() => setOpenSettings(false)}
//       />
//     </>
//   );
// }


"use client";
import { ActiveTab } from "./FriendsPage";

const NAV = [
  { tab: "requests"    as ActiveTab, icon: "👥", label: "Friend requests" },
  { tab: "suggestions" as ActiveTab, icon: "💡", label: "Suggestions"     },
  { tab: "all"         as ActiveTab, icon: "👤", label: "All friends"     },
];

export default function FriendsSidebar({
  activeTab, onTabChange, onSettingsClick, requestCount,
}: {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onSettingsClick: () => void;
  requestCount: number;
}) {
  return (
    <aside className="w-[280px] flex-shrink-0 bg-bg-primary border-r border-border-default
                      flex flex-col overflow-y-auto h-full">

      {/* Header */}
      <div className="px-3 pt-4 pb-2">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-text-primary">Friends</h1>
          <button
            onClick={onSettingsClick}
            className="w-9 h-9 rounded-full bg-bg-secondary hover:bg-bg-tertiary
                       flex items-center justify-center text-lg transition-colors"
            aria-label="Notification settings"
          >
            ⚙️
          </button>
        </div>

        <hr className="border-border-default" />
      </div>

      {/* Nav items */}
      <nav className="flex flex-col gap-0.5 px-2">
        {NAV.map(({ tab, icon, label }) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-left
                        transition-colors w-full
                        ${activeTab === tab
                          ? "bg-primary-light text-primary"
                          : "hover:bg-bg-secondary text-text-primary"
                        }`}
          >
            <span className={`w-9 h-9 rounded-full flex items-center justify-center
                              text-lg flex-shrink-0
                              ${activeTab === tab ? "bg-primary-light" : "bg-bg-secondary"}`}>
              {icon}
            </span>
            <span className="text-sm font-medium flex-1">{label}</span>
            {tab === "requests" && requestCount > 0 && (
              <span className="bg-error text-white text-[11px] font-bold
                               rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
                {requestCount}
              </span>
            )}
          </button>
        ))}
      </nav>

      <hr className="border-border-default mx-3 my-2" />

      {/* Birthdays */}
      <div className="px-2">
        <p className="px-3 text-xs font-semibold text-text-tertiary uppercase
                      tracking-wider mb-1">
          Birthdays
        </p>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-bg-secondary cursor-pointer">
          <span className="w-9 h-9 rounded-full bg-bg-secondary flex items-center
                           justify-center text-lg flex-shrink-0">🎂</span>
          <div>
            <p className="text-sm font-medium text-text-primary">Rahul Kumar</p>
            <p className="text-xs text-text-secondary">Today</p>
          </div>
        </div>
      </div>
    </aside>
  );
}