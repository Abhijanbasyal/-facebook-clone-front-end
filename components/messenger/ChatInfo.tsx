import { Chat } from "@/app/messenger/page";

const INFO_ITEMS = [
  { icon: "💬", label: "Chat info"        },
  { icon: "🎨", label: "Customize chat"   },
  { icon: "🖼️", label: "Media & files"    },
  { icon: "🔒", label: "Privacy & support"},
];

export default function ChatInfo({ chat }: { chat: Chat }) {
  return (
    <aside className="bg-bg-primary border-l border-border-default flex flex-col h-full overflow-y-auto">

      {/* Profile section */}
      <div className="flex flex-col items-center gap-2 px-4 py-5
                      border-b border-border-default">
        <div className="relative">
          <div className="w-16 h-16 rounded-full flex items-center justify-center
                          text-xl font-semibold"
               style={{ background: chat.color, color: chat.textColor }}>
            {chat.initials}
          </div>
          {chat.online && (
            <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full
                             bg-secondary border-2 border-bg-primary" />
          )}
        </div>
        <p className="font-semibold text-text-primary">{chat.name}</p>
        <p className={`text-xs ${chat.online ? "text-secondary" : "text-text-tertiary"}`}>
          {chat.online ? "Active now" : "Active 2h ago"}
        </p>

        {/* Action icons */}
        <div className="flex gap-4 mt-2">
          {[
            { icon: "🔇", label: "Mute"    },
            { icon: "🔍", label: "Search"  },
            { icon: "👤", label: "Profile" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <button aria-label={label}
                      className="w-9 h-9 rounded-full bg-bg-secondary hover:bg-bg-tertiary
                                 flex items-center justify-center text-base transition-colors">
                {icon}
              </button>
              <span className="text-[11px] text-text-secondary">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Info items */}
      <div className="p-2 flex flex-col gap-0.5">
        {INFO_ITEMS.map(({ icon, label }) => (
          <button key={label}
                  className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl
                             hover:bg-bg-secondary transition-colors text-left">
            <span className="text-base">{icon}</span>
            <span className="text-sm text-text-primary">{label}</span>
            <span className="ml-auto text-text-tertiary">›</span>
          </button>
        ))}
      </div>
    </aside>
  );
}