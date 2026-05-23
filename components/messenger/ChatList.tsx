"use client";
import { useState } from "react";
import { Chat } from "@/app/messenger/page";
import CreateGroupModal from "./CreateGroupModal";

export default function ChatList({
  chats, selectedId, onSelect,
}: {
  chats: Chat[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const [showMenu,  setShowMenu]  = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <aside className="bg-bg-primary border-r border-border-default flex flex-col h-full">

      {/* Header */}
      <div className="p-3 pb-2">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-xl font-semibold text-text-primary">Chats</h1>
          <div className="flex gap-2">

            {/* 3-dots menu */}
            <div className="relative">
              <button
                onClick={() => setShowMenu((v) => !v)}
                className="w-8 h-8 rounded-full bg-bg-secondary hover:bg-bg-tertiary
                           flex items-center justify-center text-text-primary"
                aria-label="Options"
              >
                ···
              </button>
              {showMenu && (
                <div className="absolute top-10 left-0 w-48 bg-bg-primary rounded-xl
                                border border-border-default z-30 p-1 shadow-sm">
                  <button
                    onClick={() => { setShowModal(true); setShowMenu(false); }}
                    className="flex items-center gap-2 w-full px-3 py-2 rounded-lg
                               hover:bg-bg-secondary text-sm text-text-primary"
                  >
                    👥 Create group chat
                  </button>
                  <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg
                                     hover:bg-bg-secondary text-sm text-text-primary">
                    📌 Mark all as read
                  </button>
                </div>
              )}
            </div>

            <button
              className="w-8 h-8 rounded-full bg-bg-secondary hover:bg-bg-tertiary
                         flex items-center justify-center"
              aria-label="New message"
            >
              ✏️
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary text-sm">🔍</span>
          <input
            placeholder="Search Messenger"
            className="w-full bg-bg-secondary rounded-full pl-8 pr-4 py-2 text-sm
                       text-text-primary placeholder-text-tertiary outline-none
                       focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto px-2 pb-4">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelect(chat.id)}
            className={`flex items-center gap-3 w-full px-2 py-2 rounded-xl text-left
                        transition-colors mb-0.5
                        ${selectedId === chat.id
                          ? "bg-primary-light"
                          : "hover:bg-bg-secondary"
                        }`}
          >
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-11 h-11 rounded-full flex items-center justify-center
                              text-sm font-semibold"
                   style={{ background: chat.color, color: chat.textColor }}>
                {chat.initials}
              </div>
              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full
                                 bg-secondary border-2 border-bg-primary" />
              )}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <span className={`text-sm font-medium truncate
                                  ${chat.unread ? "text-text-primary" : "text-text-secondary"}`}>
                  {chat.name}
                </span>
                <span className="text-[11px] text-text-tertiary ml-2 flex-shrink-0">
                  {chat.time}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary truncate max-w-[150px]">
                  {chat.lastMessage}
                </span>
                {chat.unread && (
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 ml-2" />
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {showModal && <CreateGroupModal onClose={() => setShowModal(false)} />}
    </aside>
  );
}