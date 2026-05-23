type Post = {
  id: string;
  name: string;
  initials: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="bg-bg-primary rounded-xl border border-border-default">
      {/* Header */}
      <div className="flex items-center gap-3 p-3">
        <div className="w-10 h-10 rounded-full bg-primary-light text-primary
                        flex items-center justify-center font-semibold flex-shrink-0">
          {post.initials}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-sm text-text-primary">{post.name}</p>
          <p className="text-xs text-text-secondary">{post.time} · 🌐</p>
        </div>
        <button className="text-text-secondary hover:bg-bg-secondary
                           rounded-full w-8 h-8 flex items-center justify-center text-xl">
          ···
        </button>
      </div>

      {/* Content */}
      <p className="px-3 pb-3 text-sm text-text-primary leading-relaxed">
        {post.content}
      </p>

      {/* Stats */}
      <div className="flex justify-between px-3 py-2 text-xs text-text-secondary
                      border-t border-border-default">
        <span>👍 ❤️ 😂 {post.likes}</span>
        <span>{post.comments} comments · {post.shares} shares</span>
      </div>

      {/* Action buttons */}
      <div className="flex border-t border-border-default">
        {[
          { icon: "👍", label: "Like"    },
          { icon: "💬", label: "Comment" },
          { icon: "↗️", label: "Share"   },
        ].map(({ icon, label }) => (
          <button key={label}
                  className="flex-1 flex items-center justify-center gap-2 py-2
                             text-sm font-medium text-text-secondary
                             hover:bg-bg-secondary rounded-lg transition-colors">
            <span>{icon}</span> {label}
          </button>
        ))}
      </div>
    </article>
  );
}