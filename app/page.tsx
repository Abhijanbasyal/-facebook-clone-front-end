import LeftSidebar  from "@/components/home/LeftSidebar";
import RightSidebar from "@/components/home/RightSidebar";
import CreatePost   from "@/components/home/CreatePost";
import Stories      from "@/components/home/Stories";
import PostCard     from "@/components/home/PostCard";

const DUMMY_POSTS = [
  {
    id: "1",
    name: "Rahul Sharma",
    initials: "R",
    time: "2 hours ago",
    content: "Just shipped a new feature! Next.js 14 with App Router is incredible 🚀",
    likes: 124,
    comments: 48,
    shares: 12,
  },
  {
    id: "2",
    name: "Sita Thapa",
    initials: "S",
    time: "5 hours ago",
    content: "Beautiful sunset from Nagarkot today. Nature never disappoints 🌅",
    likes: 89,
    comments: 22,
    shares: 5,
  },
];

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] gap-4
                    p-4 bg-bg-secondary min-h-screen">
      {/* Left sidebar — hidden on mobile */}
      <aside className="hidden lg:block">
        <LeftSidebar />
      </aside>

      {/* Center feed */}
      <main className="flex flex-col gap-3 max-w-[680px] w-full mx-auto">
        <CreatePost />
        <Stories />
        {DUMMY_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>

      {/* Right sidebar — hidden on mobile */}
      <aside className="hidden lg:block">
        <RightSidebar />
      </aside>
    </div>
  );
}