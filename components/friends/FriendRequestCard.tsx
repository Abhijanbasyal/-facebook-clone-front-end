"use client";
import { useState } from "react";
import { Friend } from "./FriendsPage";

type Mode = "request" | "suggestion" | "friend";

export default function FriendRequestCard({
  friend, mode,
}: {
  friend: Friend;
  mode: Mode;
}) {
  const [status, setStatus] = useState<"idle"|"added"|"deleted">("idle");

  if (status === "deleted") return null;

  return (
    <div className="bg-bg-primary rounded-2xl border border-border-default overflow-hidden">
      {/* Avatar image area */}
      <div className="h-[160px] flex items-center justify-center text-5xl"
           style={{ background: friend.bgColor }}>
        {friend.emoji}
      </div>

      <div className="p-3">
        <p className="font-semibold text-sm text-text-primary">{friend.name}</p>
        <p className="text-xs text-text-secondary mb-3">
          {friend.mutual} mutual friend{friend.mutual !== 1 ? "s" : ""}
        </p>

        {status === "added" ? (
          <div className="text-center py-1.5 rounded-xl bg-bg-secondary
                          text-xs font-medium text-text-secondary">
            {mode === "request" ? "✅ Confirmed" : "✅ Request sent"}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setStatus("added")}
              className="w-full py-1.5 rounded-xl bg-primary text-white
                         text-xs font-semibold hover:bg-primary-hover transition-colors"
            >
              {mode === "request"    ? "Confirm"     :
               mode === "suggestion" ? "+ Add friend" :
               "Message"}
            </button>
            <button
              onClick={() => setStatus("deleted")}
              className="w-full py-1.5 rounded-xl bg-bg-secondary text-text-primary
                         text-xs font-semibold hover:bg-bg-tertiary transition-colors"
            >
              {mode === "request"    ? "Delete"  :
               mode === "suggestion" ? "Remove"  :
               "Unfriend"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}