"use client";
import { useState } from "react";
import GroupsSidebar   from "./GroupsSidebar";
import GroupHeader     from "./GroupHeader";
import GroupCreatePost from "./GroupCreatePost";
import GroupPostCard   from "./GroupPostCard";

export type Group = {
  id: string;
  name: string;
  emoji: string;
  members: string;
  posts: string;
  newPosts?: number;
  bgFrom: string;
  bgTo: string;
  isAdmin?: boolean;
  color: string;
  textColor: string;
};

export type Post = {
  id: string;
  groupId: string;
  author: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
  time: string;
  content: string;
  emoji?: string;
  likes: number;
  comments: number;
  shares: number;
  reactions: string;
};

export const GROUPS: Group[] = [
  { id:"1", name:"Dev Community Nepal", emoji:"👨‍💻", members:"24.5k", posts:"128/day", newPosts:3,  bgFrom:"#1877f2", bgTo:"#0f3460", isAdmin:true,  color:"#e7f3ff", textColor:"#185fa5" },
  { id:"2", name:"Next.js Builders",    emoji:"⚛️",   members:"12.4k", posts:"54/day",  newPosts:2,  bgFrom:"#7c3aed", bgTo:"#4c1d95", isAdmin:false, color:"#eeedfe", textColor:"#3c3489" },
  { id:"3", name:"UI/UX Nepal",         emoji:"🎨",   members:"8.2k",  posts:"30/day",              bgFrom:"#059669", bgTo:"#064e3b", isAdmin:false, color:"#e1f5ee", textColor:"#085041" },
  { id:"4", name:"Python Enthusiasts",  emoji:"🐍",   members:"45k",   posts:"200/day",             bgFrom:"#d97706", bgTo:"#92400e", isAdmin:false, color:"#faeeda", textColor:"#633806" },
  { id:"5", name:"Startup Nepal",       emoji:"🚀",   members:"5.6k",  posts:"22/day",  newPosts:1,  bgFrom:"#dc2626", bgTo:"#7f1d1d", isAdmin:false, color:"#faece7", textColor:"#712b13" },
  { id:"6", name:"Photography KTM",     emoji:"📸",   members:"9.1k",  posts:"45/day",              bgFrom:"#db2777", bgTo:"#831843", isAdmin:false, color:"#fbeaf0", textColor:"#72243e" },
];

export const POSTS: Post[] = [
  { id:"p1", groupId:"1", author:"Rahul Kumar",   initials:"RK", avatarBg:"#e7f3ff", avatarColor:"#185fa5", time:"2h",  content:"Just finished building a full-stack Facebook clone with Next.js 14 + Express + MongoDB! The dark mode and real-time features are 🔥 Who else is building cool stuff this week? Drop your projects below 👇", emoji:"💻", likes:84,  comments:32, shares:8,  reactions:"👍 ❤️ 🔥" },
  { id:"p2", groupId:"1", author:"Sita Tamang",   initials:"ST", avatarBg:"#e1f5ee", avatarColor:"#085041", time:"5h",  content:"Top 5 VS Code extensions every developer must have in 2025 🛠️\n\n1. Prettier\n2. GitLens\n3. Thunder Client\n4. Error Lens\n5. Tailwind CSS IntelliSense\n\nWhat's your must-have extension? 👇",                                                    likes:210, comments:67, shares:41, reactions:"👍 💯" },
  { id:"p3", groupId:"1", author:"Krishna Patel", initials:"KP", avatarBg:"#eeedfe", avatarColor:"#3c3489", time:"8h",  content:"Docker tip of the day 🐳\n\nAlways use .dockerignore to exclude node_modules and .env files from your image. Keeps builds fast and images small!",                                                                                              likes:156, comments:24, shares:19, reactions:"👍 🔥 💡" },
  { id:"p4", groupId:"2", author:"Anita Magar",   initials:"AM", avatarBg:"#eeedfe", avatarColor:"#3c3489", time:"1h",  content:"Server components in Next.js 14 changed everything for me. Zero client JS for data fetching = insanely fast pages. Anyone else making the switch from pages router?",                                                                              likes:93,  comments:41, shares:12, reactions:"👍 ❤️" },
  { id:"p5", groupId:"2", author:"Bikash S.",     initials:"BS", avatarBg:"#faece7", avatarColor:"#712b13", time:"3h",  content:"PSA: next/image with priority prop on above-the-fold images gives you a massive LCP score boost. Just went from 3.2s to 0.8s on our landing page 🚀",                                                                                          likes:341, comments:88, shares:67, reactions:"🚀 👍 🔥" },
  { id:"p6", groupId:"3", author:"Priya Lama",    initials:"PL", avatarBg:"#fbeaf0", avatarColor:"#72243e", time:"4h",  content:"Redesigned our onboarding flow using progressive disclosure. Reduced drop-off by 40% 🎉 The key? Show only what's needed at each step. Less is always more in UX.",                                                                              likes:178, comments:53, shares:29, reactions:"❤️ 🎨 👍" },
];

export type Tab = "posts" | "members" | "events" | "media";

export default function GroupsPage() {
  const [selectedGroup, setSelectedGroup] = useState<Group>(GROUPS[0]);
  const [activeTab,     setActiveTab]     = useState<Tab>("posts");

  const groupPosts = POSTS.filter((p) => p.groupId === selectedGroup.id);

  return (
    <div className="flex h-[calc(100vh-56px)] bg-bg-secondary overflow-hidden">
      <GroupsSidebar
        groups={GROUPS}
        selected={selectedGroup}
        onSelect={(g) => { setSelectedGroup(g); setActiveTab("posts"); }}
      />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-[680px] mx-auto px-4 py-4 flex flex-col gap-3">
          <GroupHeader
            group={selectedGroup}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {activeTab === "posts" && (
            <>
              <GroupCreatePost group={selectedGroup} />
              {groupPosts.length > 0
                ? groupPosts.map((post) => (
                    <GroupPostCard key={post.id} post={post} group={selectedGroup} />
                  ))
                : (
                  <div className="bg-bg-primary rounded-2xl border border-border-default
                                  p-12 flex flex-col items-center gap-3 text-center">
                    <span className="text-5xl">{selectedGroup.emoji}</span>
                    <p className="font-semibold text-text-primary">No posts yet</p>
                    <p className="text-sm text-text-secondary">
                      Be the first to post in {selectedGroup.name}
                    </p>
                  </div>
                )
              }
            </>
          )}

          {activeTab === "members" && (
            <div className="bg-bg-primary rounded-2xl border border-border-default p-8
                            text-center text-text-secondary text-sm">
              {selectedGroup.members} members — members list coming soon
            </div>
          )}

          {activeTab === "events" && (
            <div className="bg-bg-primary rounded-2xl border border-border-default p-8
                            text-center text-text-secondary text-sm">
              No upcoming events in this group
            </div>
          )}

          {activeTab === "media" && (
            <div className="bg-bg-primary rounded-2xl border border-border-default p-8
                            text-center text-text-secondary text-sm">
              No media shared yet
            </div>
          )}
        </div>
      </main>
    </div>
  );
}