"use client";
import { useState } from "react";
import { CHATS } from "@/app/messenger/page";

export default function CreateGroupModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [search,   setSearch]   = useState("");

  const filtered = CHATS.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-bg-primary rounded-2xl p-5 w-[340px] border border-border-default">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-text-primary">Create group chat</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-bg-secondary hover:bg-bg-tertiary
                       flex items-center justify-center text-text-secondary"
          >
            ✕
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary text-sm">🔍</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search friends..."
            className="w-full bg-bg-secondary rounded-full pl-8 pr-4 py-2 text-sm
                       text-text-primary outline-none border border-border-default"
          />
        </div>

        {/* Friends list */}
        <div className="flex flex-col gap-1 max-h-52 overflow-y-auto mb-4">
          {filtered.map((chat) => (
            <label
              key={chat.id}
              className="flex items-center gap-3 px-2 py-2 rounded-xl
                         hover:bg-bg-secondary cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center
                              text-xs font-semibold flex-shrink-0"
                   style={{ background: chat.color, color: chat.textColor }}>
                {chat.initials}
              </div>
              <span className="text-sm text-text-primary flex-1">{chat.name}</span>
              <input
                type="checkbox"
                checked={selected.includes(chat.id)}
                onChange={() => toggle(chat.id)}
                className="accent-primary w-4 h-4"
              />
            </label>
          ))}
        </div>

        <button
          onClick={onClose}
          disabled={selected.length < 2}
          className="w-full py-2.5 rounded-xl bg-primary text-white font-medium text-sm
                     hover:bg-primary-hover transition-colors disabled:opacity-50
                     disabled:cursor-not-allowed"
        >
          Create group {selected.length >= 2 ? `(${selected.length})` : ""}
        </button>
      </div>
    </div>
  );
}