"use client";
import { useState, useEffect, useCallback } from "react";
import { REELS }    from "./ReelData";
import ReelPlayer   from "./ReelPlayer";
import ReelComments from "./ReelComments";

export default function ReelsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [commentOpen,  setCommentOpen]  = useState(false);
  const [progress,     setProgress]     = useState(0);

  const currentReel = REELS[currentIndex];

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % REELS.length);
    setCommentOpen(false);
    setProgress(0);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + REELS.length) % REELS.length);
    setCommentOpen(false);
    setProgress(0);
  }, []);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 0.4;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") goNext();
      if (e.key === "ArrowUp")   goPrev();
      if (e.key === "Escape")    setCommentOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  return (
    // ← full height minus navbar, black bg, no overflow
    <div className="flex h-[calc(100vh-56px)] bg-black overflow-hidden">

      {/* Center — takes all remaining space */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        <ReelPlayer
          reel={currentReel}
          progress={progress}
          onNext={goNext}
          onPrev={goPrev}
          onCommentClick={() => setCommentOpen((v) => !v)}
          commentOpen={commentOpen}
        />
      </div>

      {/* Comment panel — fixed width, slides in */}
      <ReelComments
        reel={currentReel}
        open={commentOpen}
        onClose={() => setCommentOpen(false)}
      />
    </div>
  );
}