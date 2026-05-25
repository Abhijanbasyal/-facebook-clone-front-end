"use client";
import { useState } from "react";
import { Reel } from "./ReelData";

export default function ReelPlayer({
  reel, progress, onNext, onPrev, onCommentClick, commentOpen,
}: {
  reel: Reel;
  progress: number;
  onNext: () => void;
  onPrev: () => void;
  onCommentClick: () => void;
  commentOpen: boolean;
}) {
  const [liked,    setLiked]    = useState(false);
  const [paused,   setPaused]   = useState(false);
  const [showPlay, setShowPlay] = useState(false);

  const handleTap = () => {
    setPaused((v) => !v);
    setShowPlay(true);
    setTimeout(() => setShowPlay(false), 700);
  };

  return (
    // Outer wrapper — full height, centers card + side actions
    <div className="flex items-center justify-center gap-4 h-full w-full px-4">

      {/* Reel card — full height, width driven by 9:16 aspect ratio */}
      <div
        className="relative h-full rounded-none sm:rounded-2xl overflow-hidden
                   cursor-pointer flex-shrink-0 transition-all duration-300"
        style={{
          // 9:16 aspect ratio: width = height × (9/16)
          // clamp so it never gets too wide on ultrawide screens
          width: "min(calc(100vh * 9 / 16 - 32px), 600px)",
          background: `linear-gradient(180deg, ${reel.bgFrom} 0%, ${reel.bgTo} 100%)`,
        }}
        onClick={handleTap}
      >
        {/* Fake video content */}
        <div className="absolute inset-0 flex items-center justify-center
                        text-[140px] select-none pointer-events-none">
          {reel.emoji}
        </div>

        {/* Play/pause flash */}
        {showPlay && (
          <div className="absolute inset-0 flex items-center justify-center
                          pointer-events-none z-10">
            <div className="w-16 h-16 rounded-full bg-black/50 flex items-center
                            justify-center">
              <i className={`ti ${paused ? "ti-player-play" : "ti-player-pause"}
                             text-white`}
                 style={{ fontSize: 28 }}
                 aria-hidden="true" />
            </div>
          </div>
        )}

        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
             style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%)" }} />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center
                        justify-between z-10"
             onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full border-2 border-white flex items-center
                            justify-center text-xs font-medium flex-shrink-0"
                 style={{ background: reel.avatarText, color: reel.avatarColor }}>
              {reel.initials}
            </div>
            <p className="text-white text-sm font-semibold">{reel.user}</p>
          </div>
          <button className="px-3 py-1.5 rounded-full border border-white text-white
                             text-xs font-medium hover:bg-white/20 transition-colors">
            Follow
          </button>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
             style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)" }} />

        {/* Bottom info */}
        <div className="absolute bottom-4 left-4 right-4 pointer-events-none z-10">
          <p className="text-white font-medium leading-snug mb-1">
            {reel.caption}
          </p>
          <p className="text-white/70 text-sm mb-2">{reel.tags}</p>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center
                            justify-center text-xs animate-spin [animation-duration:4s]">
              🎵
            </div>
            <p className="text-white/80 text-sm">{reel.song}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-20">
          <div
            className="h-full bg-white transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Side actions — vertically centered next to the card */}
      <div className="flex flex-col items-center gap-5"
           onClick={(e) => e.stopPropagation()}>

        <button
          onClick={() => setLiked((v) => !v)}
          className="flex flex-col items-center gap-1"
          aria-label="Like"
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center
                           transition-all duration-150
                           ${liked ? "bg-red-500/20" : "bg-white/10 hover:bg-white/20"}`}>
            <i className="ti ti-thumb-up"
               style={{ fontSize: 20, color: liked ? "#e24b4a" : "white" }}
               aria-hidden="true" />
          </div>
          <span className="text-white text-xs">{reel.likes + (liked ? 1 : 0)}</span>
        </button>

        <button
          onClick={onCommentClick}
          className="flex flex-col items-center gap-1"
          aria-label="Comments"
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center
                           transition-colors
                           ${commentOpen
                             ? "bg-primary/30"
                             : "bg-white/10 hover:bg-white/20"
                           }`}>
            <i className="ti ti-message-circle"
               style={{ fontSize: 20, color: commentOpen ? "#60a5fa" : "white" }}
               aria-hidden="true" />
          </div>
          <span className="text-white text-xs">{reel.comments.length}</span>
        </button>

        <button className="flex flex-col items-center gap-1" aria-label="Share">
          <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
                          flex items-center justify-center transition-colors">
            <i className="ti ti-share" style={{ fontSize: 20, color: "white" }} aria-hidden="true" />
          </div>
          <span className="text-white text-xs">{reel.shares}</span>
        </button>

        <button className="flex flex-col items-center gap-1" aria-label="More options">
          <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
                          flex items-center justify-center transition-colors">
            <i className="ti ti-dots" style={{ fontSize: 20, color: "white" }} aria-hidden="true" />
          </div>
        </button>

        {/* Up / Down navigation */}
        <div className="flex flex-col gap-2 mt-4">
          <button
            onClick={onPrev}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25
                       flex items-center justify-center transition-colors"
            aria-label="Previous reel"
          >
            <i className="ti ti-chevron-up" style={{ fontSize: 20, color: "white" }} aria-hidden="true" /> up
          </button>
          <button
            onClick={onNext}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25
                       flex items-center justify-center transition-colors"
            aria-label="Next reel"
          >
            <i className="ti ti-chevron-down" style={{ fontSize: 20, color: "white" }} aria-hidden="true" /> down
          </button>
        </div>
      </div>
    </div>
  );
}