"use client";
import { useState } from "react";
import { Chat } from "@/app/messenger/page";

const DUMMY_MESSAGES = [
  { id:"1", from:"them", text:"Hey! Did you push the latest code to GitHub?" },
  { id:"2", from:"me",   text:"Yeah just pushed it! Check the main branch"  },
  { id:"3", from:"them", text:"Nice! Does it include the navbar fix?"        },
  { id:"4", from:"me",   text:"Yes and also the dark mode toggle"            },
  { id:"5", from:"me",   text:"Took me like 2 hours lol"                     },
  { id:"6", from:"them", text:"Haha worth it, looks really clean!"           },
];

export default function ChatWindow({ chat }: { chat: Chat }) {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col h-full bg-bg-primary">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5
                      border-b border-border-default flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full flex items-center justify-center
                            text-sm font-semibold"
                 style={{ background: chat.color, color: chat.textColor }}>
              {chat.initials}
            </div>
            {chat.online && (
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full
                               bg-secondary border-2 border-bg-primary" />
            )}
          </div>
          <div>
            <p className="font-semibold text-sm text-text-primary">{chat.name}</p>
            <p className={`text-xs ${chat.online ? "text-secondary" : "text-text-tertiary"}`}>
              {chat.online ? "Active now" : "Active 2h ago"}
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          {[
            { icon: "📞", label: "Call"       },
            { icon: "📹", label: "Video call" },
            { icon: "ℹ️",  label: "Info"       },
          ].map(({ icon, label }) => (
            <button key={label} aria-label={label}
                    className="w-9 h-9 rounded-full bg-bg-secondary hover:bg-bg-tertiary
                               flex items-center justify-center text-base transition-colors">
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-2">
        {DUMMY_MESSAGES.map((msg) => (
          <div key={msg.id}
               className={`flex items-end gap-2
                           ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
            {msg.from === "them" && (
              <div className="w-7 h-7 rounded-full flex items-center justify-center
                              text-[10px] font-semibold flex-shrink-0"
                   style={{ background: chat.color, color: chat.textColor }}>
                {chat.initials}
              </div>
            )}
            <div className={`max-w-[65%] px-3 py-2 rounded-2xl text-sm leading-relaxed
                             ${msg.from === "me"
                               ? "bg-primary text-white rounded-br-sm"
                               : "bg-bg-secondary text-text-primary rounded-bl-sm"
                             }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-t border-border-default flex-shrink-0">
        <button aria-label="Photo"
                className="w-9 h-9 rounded-full bg-bg-secondary hover:bg-bg-tertiary
                           flex items-center justify-center text-primary text-base">
          📷
        </button>
        <button aria-label="GIF"
                className="w-9 h-9 rounded-full bg-bg-secondary hover:bg-bg-tertiary
                           flex items-center justify-center text-primary text-xs font-bold">
          GIF
        </button>

        <div className="flex-1 relative flex items-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && setInput("")}
            placeholder="Aa"
            className="w-full bg-bg-secondary rounded-full pl-4 pr-10 py-2 text-sm
                       text-text-primary outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button aria-label="Emoji"
                  className="absolute right-3 text-text-secondary hover:text-text-primary">
            🙂
          </button>
        </div>

        <button aria-label="Like"
                className="text-primary text-xl hover:scale-110 transition-transform">
          👍
        </button>
      </div>
    </div>
  );
}