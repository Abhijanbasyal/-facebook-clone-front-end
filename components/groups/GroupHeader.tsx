import { Group, Tab } from "./GroupsPage";

const TABS: { value: Tab; label: string }[] = [
  { value: "posts",   label: "Posts"   },
  { value: "members", label: "Members" },
  { value: "events",  label: "Events"  },
  { value: "media",   label: "Media"   },
];

export default function GroupHeader({
  group, activeTab, onTabChange,
}: {
  group: Group;
  activeTab: Tab;
  onTabChange: (t: Tab) => void;
}) {
  return (
    <div className="bg-bg-primary rounded-2xl border border-border-default overflow-hidden">

      {/* Banner */}
      <div className="h-[160px] relative flex items-end p-4"
           style={{ background: `linear-gradient(135deg, ${group.bgFrom}, ${group.bgTo})` }}>
        <div className="flex-1">
          <p className="text-2xl font-bold text-white mb-1">
            {group.emoji} {group.name}
          </p>
          <p className="text-sm text-white/80">
            Public group · {group.members} members · {group.posts}
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-xl bg-white text-primary text-sm
                             font-semibold hover:bg-white/90 transition-colors">
            ✓ Joined
          </button>
          <button className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30
                             text-white text-sm font-medium transition-colors">
            + Invite
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-2 pt-1 pb-1 border-t border-border-default gap-1">
        {TABS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => onTabChange(value)}
            className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-colors
                        ${activeTab === value
                          ? "bg-primary-light text-primary"
                          : "hover:bg-bg-secondary text-text-secondary"
                        }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}