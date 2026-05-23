"use client";
import { useState } from "react";
import ChatList    from "@/components/messenger/ChatList";
import ChatWindow  from "@/components/messenger/ChatWindow";
import ChatInfo    from "@/components/messenger/ChatInfo";

export type Chat = {
  id: string;
  name: string;
  initials: string;
  lastMessage: string;
  time: string;
  online: boolean;
  unread: boolean;
  color: string;
  textColor: string;
};

export const CHATS: Chat[] = [
  { id:"1", name:"Rahul Kumar",     initials:"RK", lastMessage:"Hey! Did you push the code?",  time:"2m",       online:true,  unread:true,  color:"#e7f3ff", textColor:"#185fa5" },
  { id:"2", name:"Sita Tamang",     initials:"ST", lastMessage:"Looks amazing!",               time:"15m",      online:true,  unread:true,  color:"#faeeda", textColor:"#633806" },
  { id:"3", name:"Krishna Patel",   initials:"KP", lastMessage:"You: Let's meet tomorrow",     time:"1h",       online:false, unread:false, color:"#e1f5ee", textColor:"#085041" },
  { id:"4", name:"Anita Magar",     initials:"AM", lastMessage:"haha yeah that was fun",       time:"3h",       online:false, unread:false, color:"#eeedfe", textColor:"#3c3489" },
  { id:"5", name:"Bikash Shrestha", initials:"BS", lastMessage:"bro check this out",           time:"Yesterday",online:true,  unread:true,  color:"#faece7", textColor:"#712b13" },
];

export default function MessengerPage() {
  const [selectedId, setSelectedId] = useState<string>("1");
  const selected = CHATS.find((c) => c.id === selectedId)!;

  return (
    <div className="grid grid-cols-[300px_1fr_280px] h-[calc(100vh-56px)]
                    bg-bg-secondary overflow-hidden">
      <ChatList
        chats={CHATS}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
      <ChatWindow chat={selected} />
      <ChatInfo   chat={selected} />
    </div>
  );
}