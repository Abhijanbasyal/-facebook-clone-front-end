"use client";

export default function CreatePost() {
  return (
    <div className="bg-bg-primary rounded-xl border border-border-default p-3">
      {/* Input row */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-primary-light text-primary
                        flex items-center justify-center font-semibold flex-shrink-0">
          A
        </div>
        <button className="flex-1 text-left bg-bg-secondary rounded-full
                           px-4 py-2.5 text-text-secondary text-sm
                           hover:bg-bg-tertiary transition-colors">
          What's on your mind?
        </button>
      </div>

      {/* Action buttons */}
      <div className="flex border-t border-border-default pt-2">
        <button className="flex-1 flex items-center justify-center gap-2
                           py-2 rounded-lg hover:bg-bg-secondary transition-colors
                           text-text-secondary text-sm font-medium">
          <span className="text-red-500 text-lg">🎥</span> Live video
        </button>
        <button className="flex-1 flex items-center justify-center gap-2
                           py-2 rounded-lg hover:bg-bg-secondary transition-colors
                           text-text-secondary text-sm font-medium">
          <span className="text-green-500 text-lg">📷</span> Photo
        </button>
        <button className="flex-1 flex items-center justify-center gap-2
                           py-2 rounded-lg hover:bg-bg-secondary transition-colors
                           text-text-secondary text-sm font-medium">
          <span className="text-yellow-500 text-lg">😊</span> Feeling
        </button>
      </div>
    </div>
  );
}