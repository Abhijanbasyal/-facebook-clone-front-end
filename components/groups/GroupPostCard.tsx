"use client";
import { useState } from "react";
import { Post, Group } from "./GroupsPage";

export default function GroupPostCard({
  post, group,
}: {
  post: Post;
  group: Group;
}) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="bg-bg-primary rounded-2xl border border-border-default overflow-hidden">

      {/* Header */}
      <div className="flex items-center gap-3 p-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center
                        text-sm font-semibold flex-shrink-0"
             style={{ background: post.avatarBg, color: post.avatarColor }}>
          {post.initials}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-sm text-text-primary">{post.author}</p>
          <p className="text-xs text-text-secondary">
            posted in{" "}
            <span className="text-text-primary font-medium">{group.name}</span>
            {" · "}{post.time}
          </p>
        </div>
        <button className="w-9 h-9 rounded-full hover:bg-bg-secondary flex items-center
                           justify-center text-text-secondary text-xl transition-colors">
          ···
        </button>
      </div>

      {/* Content */}
      <div className="px-3 pb-3">
        <p className="text-sm text-text-primary leading-relaxed whitespace-pre-line">
          {post.content}
        </p>
      </div>

      {/* Optional image */}
      {post.emoji && (
        <div className="flex items-center justify-center h-[200px] bg-bg-secondary text-6xl">
          {post.emoji}
        </div>
      )}

      {/* Stats */}
      <div className="flex justify-between px-3 py-2 text-xs text-text-secondary
                      border-t border-border-default">
        <span>{post.reactions} · {post.likes + (liked ? 1 : 0)} reactions</span>
        <span>{post.comments} comments · {post.shares} shares</span>
      </div>

      {/* Action buttons */}
      <div className="flex border-t border-border-default">
        <button
          onClick={() => setLiked((v) => !v)}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl
                      text-sm font-medium transition-colors mx-1
                      ${liked
                        ? "text-primary bg-primary-light"
                        : "text-text-secondary hover:bg-bg-secondary"
                      }`}
        >
          {liked ? "👍" : "👍"} Like
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl
                           text-sm font-medium text-text-secondary hover:bg-bg-secondary
                           transition-colors mx-1">
          💬 Comment
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl
                           text-sm font-medium text-text-secondary hover:bg-bg-secondary
                           transition-colors mx-1">
          ↗️ Share
        </button>
      </div>
    </article>
  );
}