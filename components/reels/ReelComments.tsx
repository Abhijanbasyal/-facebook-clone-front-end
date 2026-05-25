"use client";
import { useState } from "react";
import { Reel, ReelComment } from "./ReelData";

export default function ReelComments({
  reel, open, onClose,
}: {
  reel: Reel;
  open: boolean;
  onClose: () => void;
}) {
  const [comments, setComments] = useState<ReelComment[]>(reel.comments);
  const [input,    setInput]    = useState("");

  const sendComment = () => {
    if (!input.trim()) return;
    setComments((prev) => [
      ...prev,
      {
        id:          Date.now().toString(),
        user:        "Abhijan",
        initials:    "A",
        avatarBg:    "#e7f3ff",
        avatarColor: "#185fa5",
        text:        input.trim(),
        time:        "Just now",
      },
    ]);
    setInput("");
  };

  return (
    <div className={`h-full w-[340px] flex-shrink-0 bg-bg-primary flex flex-col
                     border-l border-border-default transition-all duration-300
                     ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 w-0 overflow-hidden border-0"}`}>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3
                      border-b border-border-default flex-shrink-0">
        <h2 className="text-base font-semibold text-text-primary">
          Comments · {comments.length}
        </h2>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-bg-secondary hover:bg-bg-tertiary
                     flex items-center justify-center transition-colors"
          aria-label="Close comments"
        >
          <i className="ti ti-x text-text-secondary" style={{fontSize:15}} aria-hidden="true" />
        </button>
      </div>

      {/* Comment list */}
      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-4">
        {comments.map((c) => (
          <div key={c.id} className="flex gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center
                            text-[11px] font-medium flex-shrink-0"
                 style={{ background: c.avatarBg, color: c.avatarColor }}>
              {c.initials}
            </div>
            <div className="flex-1">
              <div className="bg-bg-secondary rounded-2xl rounded-tl-sm px-3 py-2">
                <p className="text-xs font-semibold text-text-primary mb-0.5">{c.user}</p>
                <p className="text-sm text-text-primary leading-snug">{c.text}</p>
              </div>
              <div className="flex gap-4 mt-1 px-2">
                <span className="text-[11px] text-text-tertiary">{c.time}</span>
                <button className="text-[11px] text-text-secondary hover:text-text-primary
                                   font-medium">Like</button>
                <button className="text-[11px] text-text-secondary hover:text-text-primary
                                   font-medium">Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 px-3 py-3 border-t border-border-default
                      flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center
                        justify-center text-[11px] font-medium flex-shrink-0">
          A
        </div>
        <div className="flex-1 flex items-center bg-bg-secondary rounded-full
                        px-3 gap-2 border border-border-default
                        focus-within:ring-2 focus-within:ring-primary/20">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendComment()}
            placeholder="Write a comment..."
            className="flex-1 bg-transparent py-2 text-sm text-text-primary
                       outline-none placeholder-text-tertiary"
          />
          <button aria-label="Emoji" className="text-text-tertiary hover:text-text-secondary">
            <i className="ti ti-mood-smile" style={{fontSize:18}} aria-hidden="true" />
          </button>
        </div>
        <button
          onClick={sendComment}
          className="w-8 h-8 rounded-full bg-primary hover:bg-primary-hover
                     flex items-center justify-center transition-colors flex-shrink-0"
          aria-label="Send comment"
        >
          <i className="ti ti-send" style={{fontSize:14, color:"white"}} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}