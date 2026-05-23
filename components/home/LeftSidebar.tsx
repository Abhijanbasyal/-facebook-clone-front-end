const links = [
  { icon: "👤", label: "Profile", href: "/profile" },
  { icon: "🤖", label: "Meta AI", href: "/ai" },
  { icon: "👥", label: "Friends", href: "/friends" },
  { icon: "▶️", label: "Reels", href: "/reels" },
  { icon: "🛍️", label: "Marketplace", href: "/marketplace" },
  { icon: "⬛", label: "Groups", href: "/groups" },
  { icon: "📺", label: "Watch", href: "/watch" },
];

const groups = [
  { initials: "DEV", label: "Dev Community" },
  { initials: "NXT", label: "Next.js Builders" },
  { initials: "UI", label: "UI/UX Nepal" },
];

export default function LeftSidebar() {
  return (
    <nav className="flex flex-col gap-1">
      {/* Main links */}
      {links.map(({ icon, label, href }) => (
        <a
          key={label}
          href={href}
          className="flex items-center gap-3 px-3 py-2 rounded-lg
                     hover:bg-bg-tertiary transition-colors
                     text-text-primary font-medium text-sm"
        >
          <span
            className="text-xl w-9 h-9 flex items-center justify-center
                       bg-bg-secondary rounded-lg flex-shrink-0"
          >
            {icon}
          </span>
          {label}
        </a>
      ))}

      <hr className="my-2 border-border-default" />

      <p className="px-3 text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1">
        Your groups
      </p>

      {groups.map(({ initials, label }) => (
        <a
          key={label}
          href="/groups"
          className="flex items-center gap-3 px-3 py-2 rounded-lg
                     hover:bg-bg-tertiary transition-colors
                     text-text-primary font-medium text-sm"
        >
          <span
            className="w-9 h-9 rounded-lg bg-bg-secondary flex items-center
                       justify-center text-xs font-bold text-text-secondary flex-shrink-0"
          >
            {initials}
          </span>
          {label}
        </a>
      ))}

      <button
        className="flex items-center gap-3 px-3 py-2 rounded-lg
                   hover:bg-bg-tertiary text-primary font-medium text-sm mt-1"
      >
        <span
          className="w-9 h-9 rounded-lg bg-primary-light flex items-center
                     justify-center text-primary text-lg flex-shrink-0"
        >
          ›
        </span>
        See more
      </button>
    </nav>
  );
}