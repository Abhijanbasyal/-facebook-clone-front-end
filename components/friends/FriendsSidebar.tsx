"use client";

import { useState } from "react";
import FriendSettingsModal from "./FriendSettingsModal";

const menuItems = [
  {
    icon: "👥",
    title: "Friends",
  },
  {
    icon: "📩",
    title: "Friend Requests",
  },
  {
    icon: "✨",
    title: "Suggestions",
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "All Friends",
  },
];

export default function FriendsSidebar() {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <>
      <div className="bg-bg-primary rounded-2xl border border-border-default p-4 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Friends</h1>

          <button
            onClick={() => setOpenSettings(true)}
            className="w-10 h-10 rounded-full bg-bg-secondary hover:bg-bg-tertiary transition flex items-center justify-center text-lg"
          >
            ⚙️
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item.title}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-bg-secondary transition text-left"
            >
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-xl">
                {item.icon}
              </div>

              <div>
                <p className="font-semibold text-sm">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <FriendSettingsModal
        open={openSettings}
        onClose={() => setOpenSettings(false)}
      />
    </>
  );
}