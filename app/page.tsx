import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-4xl font-bold text-[#1877F2]">Welcome Home 🏠</h1>
      <p className="text-gray-500 mt-2">This is the main page</p>
    </div>
  );
}
