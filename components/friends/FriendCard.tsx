type Props = {
  name: string;
  image: string;
  mutualFriends: number;
};

export default function FriendCard({
  name,
  image,
  mutualFriends,
}: Props) {
  return (
    <div className="bg-bg-primary rounded-2xl overflow-hidden border border-border-default shadow-sm hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="w-full h-[220px] object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>

        <p className="text-sm text-text-secondary mt-1 mb-4">
          {mutualFriends} mutual friends
        </p>

        <div className="flex flex-col gap-2">
          <button className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
            Add Friend
          </button>

          <button className="w-full py-2 rounded-xl bg-bg-secondary hover:bg-bg-tertiary font-medium transition">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}