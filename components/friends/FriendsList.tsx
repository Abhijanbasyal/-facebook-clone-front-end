import { ActiveTab, REQUESTS, SUGGESTIONS, ALL_FRIENDS } from "./FriendsPage";
import FriendRequestCard from "./FriendRequestCard";

export default function FriendsList({ activeTab }: { activeTab: ActiveTab }) {
  return (
    <main className="flex-1 overflow-y-auto px-6 py-5">

      {/* ── Friend Requests ── */}
      {activeTab === "requests" && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-text-primary">
              Friend requests
            </h2>
            <button className="text-sm text-primary hover:underline font-medium">
              See all
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {REQUESTS.map((f) => (
              <FriendRequestCard key={f.id} friend={f} mode="request" />
            ))}
          </div>
        </section>
      )}

      {/* ── Suggestions ── */}
      {(activeTab === "suggestions" || activeTab === "requests") && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-text-primary">
              People you may know
            </h2>
            <button className="text-sm text-primary hover:underline font-medium">
              See all
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {SUGGESTIONS.map((f) => (
              <FriendRequestCard key={f.id} friend={f} mode="suggestion" />
            ))}
          </div>
        </section>
      )}

      {/* ── All Friends ── */}
      {activeTab === "all" && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-text-primary">
              All friends
            </h2>
            <input
              placeholder="Search friends"
              className="bg-bg-secondary rounded-full px-4 py-1.5 text-sm
                         text-text-primary outline-none border border-border-default
                         focus:ring-2 focus:ring-primary/20 w-48"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {ALL_FRIENDS.map((f) => (
              <FriendRequestCard key={f.id} friend={f} mode="friend" />
            ))}
          </div>
        </section>
      )}

    </main>
  );
}