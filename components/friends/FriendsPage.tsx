"use client";
import { useState } from "react";
import FriendsSidebar        from "./FriendsSidebar";
import FriendsList           from "./FriendsList";
import FriendsSettingsModal  from "./FriendsSettingsModal";

export type ActiveTab = "requests" | "suggestions" | "all";

export type Friend = {
  id: string;
  name: string;
  initials: string;
  mutual: number;
  color: string;
  textColor: string;
  emoji: string;
  bgColor: string;
};

export const REQUESTS: Friend[] = [
  { id:"r1", name:"Rahul Kumar",     initials:"RK", mutual:3, color:"#e7f3ff", textColor:"#185fa5", emoji:"👨‍💻", bgColor:"#e7f3ff" },
  { id:"r2", name:"Sita Tamang",     initials:"ST", mutual:1, color:"#faeeda", textColor:"#633806", emoji:"👩",   bgColor:"#faeeda" },
  { id:"r3", name:"Bikash Shrestha", initials:"BS", mutual:5, color:"#faece7", textColor:"#712b13", emoji:"🧑",   bgColor:"#faece7" },
];

export const SUGGESTIONS: Friend[] = [
  { id:"s1", name:"Krishna Patel",  initials:"KP", mutual:5, color:"#e1f5ee", textColor:"#085041", emoji:"👨‍🎤", bgColor:"#e1f5ee" },
  { id:"s2", name:"Anita Magar",    initials:"AM", mutual:2, color:"#eeedfe", textColor:"#3c3489", emoji:"👩‍🎨", bgColor:"#eeedfe" },
  { id:"s3", name:"Priya Lama",     initials:"PL", mutual:4, color:"#fbeaf0", textColor:"#72243e", emoji:"👩‍💼", bgColor:"#fbeaf0" },
  { id:"s4", name:"Dev Rai",        initials:"DR", mutual:7, color:"#faeeda", textColor:"#633806", emoji:"👨‍🔬", bgColor:"#faeeda" },
  { id:"s5", name:"Meena Thapa",    initials:"MT", mutual:1, color:"#e7f3ff", textColor:"#185fa5", emoji:"👩‍🏫", bgColor:"#e7f3ff" },
  { id:"s6", name:"Suraj Karki",    initials:"SK", mutual:9, color:"#faece7", textColor:"#712b13", emoji:"🧑‍💻", bgColor:"#faece7" },
];

export const ALL_FRIENDS: Friend[] = [
  { id:"f1", name:"Rahul Kumar",  initials:"RK", mutual:3, color:"#e7f3ff", textColor:"#185fa5", emoji:"👨‍💻", bgColor:"#e7f3ff" },
  { id:"f2", name:"Sita Tamang",  initials:"ST", mutual:1, color:"#faeeda", textColor:"#633806", emoji:"👩",   bgColor:"#faeeda" },
  { id:"f3", name:"Anita Magar",  initials:"AM", mutual:2, color:"#eeedfe", textColor:"#3c3489", emoji:"👩‍🎨", bgColor:"#eeedfe" },
  { id:"f4", name:"Priya Lama",   initials:"PL", mutual:4, color:"#fbeaf0", textColor:"#72243e", emoji:"👩‍💼", bgColor:"#fbeaf0" },
];

export default function FriendsPage() {
  const [activeTab,   setActiveTab]   = useState<ActiveTab>("requests");
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="flex h-[calc(100vh-56px)] bg-bg-secondary overflow-hidden">
      <FriendsSidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onSettingsClick={() => setShowSettings(true)}
        requestCount={REQUESTS.length}
      />
      <FriendsList activeTab={activeTab} />
      {showSettings && (
        <FriendsSettingsModal onClose={() => setShowSettings(false)} />
      )}
    </div>
  );
}