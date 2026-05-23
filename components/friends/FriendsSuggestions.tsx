import FriendCard from "./FriendCard";

const friendRequests = [
  {
    id: 1,
    name: "Sophia Carter",
    mutualFriends: 12,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
  },
  {
    id: 2,
    name: "Liam Johnson",
    mutualFriends: 7,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },
];

const suggestions = [
  {
    id: 1,
    name: "Emma Watson",
    mutualFriends: 20,
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=800",
  },
  {
    id: 2,
    name: "Noah Smith",
    mutualFriends: 11,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
  },
  {
    id: 3,
    name: "Olivia Brown",
    mutualFriends: 16,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
  },
  {
    id: 4,
    name: "James Wilson",
    mutualFriends: 4,
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800",
  },
];

export default function FriendsSuggestions() {
  return (
    <div className="flex flex-col gap-10">
      {/* FRIEND REQUESTS */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold">Friend Requests</h2>

          <button className="text-blue-500 hover:underline text-sm">
            See all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {friendRequests.map((friend) => (
            <FriendCard
              key={friend.id}
              name={friend.name}
              image={friend.image}
              mutualFriends={friend.mutualFriends}
            />
          ))}
        </div>
      </section>

      {/* PEOPLE YOU MAY KNOW */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold">People You May Know</h2>

          <button className="text-blue-500 hover:underline text-sm">
            See all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {suggestions.map((friend) => (
            <FriendCard
              key={friend.id}
              name={friend.name}
              image={friend.image}
              mutualFriends={friend.mutualFriends}
            />
          ))}
        </div>
      </section>
    </div>
  );
}