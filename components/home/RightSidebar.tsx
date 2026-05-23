const CONTACTS = [
  { initials: "RK", name: "Rahul Kumar",     online: true  },
  { initials: "ST", name: "Sita Tamang",     online: true  },
  { initials: "KP", name: "Krishna Patel",   online: true  },
  { initials: "AM", name: "Anita Magar",     online: false },
  { initials: "BS", name: "Bikash Shrestha", online: false },
  { initials: "PL", name: "Priya Lama",      online: true  },
];

export default function RightSidebar() {
  return (
    <div className="flex flex-col gap-1">
      <p className="px-3 text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1">
        Contacts
      </p>

      {CONTACTS.map(({ initials, name, online }) => (
        <button key={name}
                className="flex items-center gap-3 px-3 py-2 rounded-lg
                           hover:bg-bg-tertiary transition-colors w-full text-left">
          <div className="relative flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-bg-secondary flex items-center
                            justify-center text-xs font-semibold text-text-secondary">
              {initials}
            </div>
            {online && (
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full
                               bg-secondary border-2 border-bg-primary" />
            )}
          </div>
          <span className="text-sm text-text-primary font-medium flex-1">{name}</span>
        </button>
      ))}

      <hr className="my-2 border-border-default" />

      <p className="px-3 text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1">
        Group conversations
      </p>
      {[
        { initials: "DEV", name: "Dev Community"   },
        { initials: "UI",  name: "UI/UX Nepal"     },
      ].map(({ initials, name }) => (
        <button key={name}
                className="flex items-center gap-3 px-3 py-2 rounded-lg
                           hover:bg-bg-tertiary transition-colors w-full text-left">
          <div className="w-9 h-9 rounded-lg bg-bg-secondary flex items-center
                          justify-center text-xs font-bold text-text-secondary flex-shrink-0">
            {initials}
          </div>
          <span className="text-sm text-text-primary font-medium">{name}</span>
        </button>
      ))}
    </div>
  );
}