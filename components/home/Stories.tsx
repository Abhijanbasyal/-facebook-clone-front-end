const STORIES = [
  { id: "1", name: "Rahul",   emoji: "🌄", bg: "bg-blue-100"   },
  { id: "2", name: "Sita",    emoji: "🎵", bg: "bg-amber-100"  },
  { id: "3", name: "Krishna", emoji: "✈️", bg: "bg-green-100"  },
  { id: "4", name: "Anita",   emoji: "🌸", bg: "bg-pink-100"   },
];

export default function Stories() {
  return (
    <div className="bg-bg-primary rounded-xl border border-border-default p-3">
      <h2 className="font-semibold text-text-primary mb-3">Stories</h2>
      <div className="flex gap-2 overflow-x-auto pb-1">

        {/* Create story card */}
        <div className="flex flex-col w-[90px] flex-shrink-0 rounded-xl overflow-hidden
                        border border-border-default cursor-pointer hover:opacity-90">
          <div className="h-[100px] bg-bg-secondary flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center
                            justify-center text-white text-xl">+</div>
          </div>
          <div className="bg-bg-primary p-1.5 text-center text-[11px] font-medium
                          text-text-primary">
            Create story
          </div>
        </div>

        {/* Story cards */}
        {STORIES.map(({ id, name, emoji, bg }) => (
          <div key={id}
               className="flex flex-col w-[90px] flex-shrink-0 rounded-xl overflow-hidden
                          border border-border-default cursor-pointer hover:opacity-90 relative">
            <div className={`h-[100px] ${bg} flex items-center justify-center text-3xl`}>
              {emoji}
              <span className="absolute top-2 left-2 w-7 h-7 rounded-full bg-primary
                               border-2 border-white flex items-center justify-center
                               text-white text-[10px] font-bold">
                {name[0]}
              </span>
            </div>
            <div className="bg-bg-primary p-1.5 text-center text-[11px] font-medium
                            text-text-primary">
              {name}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}