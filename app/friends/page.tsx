import FriendsSidebar from "@/components/friends/FriendsSidebar";
import FriendsSuggestions from "@/components/friends/FriendsSuggestions";

export default function FriendsPage() {
  return (
    <div className="min-h-screen bg-bg-secondary text-text-primary">
      <div className="max-w-[1600px] mx-auto flex gap-6 p-4">
        {/* LEFT SIDEBAR */}
        <div className="w-[320px] hidden lg:block sticky top-20 h-[calc(100vh-90px)] overflow-y-auto">
          <FriendsSidebar />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          <FriendsSuggestions />
        </div>
      </div>
    </div>
  );
}