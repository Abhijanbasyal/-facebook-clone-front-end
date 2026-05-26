"use client";
import { useState } from "react";
import { Group } from "./GroupsPage";

export default function GroupsSidebar({
  groups, selected, onSelect,
}: {
  groups: Group[];
  selected: Group;
  onSelect: (g: Group) => void;
}) {
  const [search, setSearch] = useState("");

  const managed  = groups.filter((g) => g.isAdmin);
  const joined   = groups.filter((g) => !g.isAdmin);
  const filtered = (list: Group[]) =>
    list.filter((g) => g.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <aside className="w-[300px] flex-shrink-0 bg-bg-primary border-r
                      border-border-default flex flex-col h-full overflow-y-auto">

      {/* Header */}
      <div className="px-3 pt-4 pb-3">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-xl font-semibold text-text-primary">Groups</h1>
          <button className="w-9 h-9 rounded-full bg-bg-secondary hover:bg-bg-tertiary
                             flex items-center justify-center transition-colors"
                  aria-label="Settings">
            ⚙️
          </button>
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">
            🔍
          </span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search groups"
            className="w-full bg-bg-secondary rounded-full pl-8 pr-4 py-2 text-sm
                       text-text-primary outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-0.5 px-2 mb-2">
        {[
          { icon: "📰", label: "Your feed"    },
          { icon: "🔍", label: "Discover"     },
          { icon: "➕", label: "Create group" },
        ].map(({ icon, label }) => (
          <button key={label}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-left
                             hover:bg-bg-secondary transition-colors text-sm font-medium
                             text-text-primary w-full">
            <span className="w-9 h-9 rounded-full bg-bg-secondary flex items-center
                             justify-center flex-shrink-0">
              {icon}
            </span>
            {label}
          </button>
        ))}
      </nav>

      <hr className="border-border-default mx-3 mb-2" />

      {/* Groups you manage */}
      {filtered(managed).length > 0 && (
        <>
          <p className="px-4 text-[11px] font-semibold text-text-tertiary uppercase
                        tracking-wider mb-1">
            Groups you manage
          </p>
          {filtered(managed).map((g) => (
            <GroupRow key={g.id} group={g} selected={selected} onSelect={onSelect} />
          ))}
          <hr className="border-border-default mx-3 my-2" />
        </>
      )}

      {/* Groups you've joined */}
      <p className="px-4 text-[11px] font-semibold text-text-tertiary uppercase
                    tracking-wider mb-1">
        Groups you've joined
      </p>
      {filtered(joined).map((g) => (
        <GroupRow key={g.id} group={g} selected={selected} onSelect={onSelect} />
      ))}

      <div className="pb-4" />
    </aside>
  );
}

function GroupRow({ group, selected, onSelect }: {
  group: Group;
  selected: Group;
  onSelect: (g: Group) => void;
}) {
  const isActive = selected.id === group.id;
  return (
    <button
      onClick={() => onSelect(group)}
      className={`flex items-center gap-3 px-3 py-2 mx-2 rounded-xl text-left
                  transition-all w-[calc(100%-16px)] mb-0.5
                  ${isActive
                    ? "bg-primary-light border-l-[3px] border-primary pl-2"
                    : "hover:bg-bg-secondary"
                  }`}
    >
      <div className="w-11 h-11 rounded-xl flex items-center justify-center
                      text-xl flex-shrink-0"
           style={{ background: group.color }}>
        {group.emoji}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium truncate
                       ${isActive ? "text-primary" : "text-text-primary"}`}>
          {group.name}
        </p>
        <p className="text-xs text-text-secondary">
          {group.newPosts ? `${group.newPosts} new posts` : `${group.members} members`}
        </p>
      </div>
      {group.newPosts && (
        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
      )}
    </button>
  );
}