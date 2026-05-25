export type Reel = {
  id: string;
  user: string;
  initials: string;
  avatarColor: string;
  avatarText: string;
  caption: string;
  tags: string;
  song: string;
  bgFrom: string;
  bgTo: string;
  emoji: string;
  likes: number;
  shares: number;
  comments: ReelComment[];
};

export type ReelComment = {
  id: string;
  user: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
  text: string;
  time: string;
};

export const REELS: Reel[] = [
  {
    id: "1",
    user: "Rainfall.IO",
    initials: "RI",
    avatarColor: "#185fa5",
    avatarText: "#e7f3ff",
    caption: "11/10 Wallpapers on Wallpaper Engine 🔥",
    tags: "#WallpaperEngine #setuppc #wallpaper #desktop",
    song: "MX21 · NA BA CHE",
    bgFrom: "#1a1a2e",
    bgTo: "#0f3460",
    emoji: "🖥️",
    likes: 432,
    shares: 29,
    comments: [
      { id:"c1", user:"Rahul Kumar",   initials:"RK", avatarBg:"#e7f3ff", avatarColor:"#185fa5", text:"Bro this setup is insane 😍 which monitor is that?",      time:"2h"  },
      { id:"c2", user:"Sita Tamang",   initials:"ST", avatarBg:"#faeeda", avatarColor:"#633806", text:"That keyboard is everything 🎨 is it custom?",             time:"1h"  },
      { id:"c3", user:"Krishna Patel", initials:"KP", avatarBg:"#e1f5ee", avatarColor:"#085041", text:"The wallpaper looks like it's from a Ghibli movie fr 🌿", time:"30m" },
    ],
  },
  {
    id: "2",
    user: "TechVibes",
    initials: "TV",
    avatarColor: "#712b13",
    avatarText: "#faece7",
    caption: "Golden hour with the perfect desk setup ✨",
    tags: "#desksetup #aesthetic #golden #productivity",
    song: "Lo-fi Beats · Chill Study",
    bgFrom: "#f97316",
    bgTo: "#c2410c",
    emoji: "🌅",
    likes: 891,
    shares: 104,
    comments: [
      { id:"c1", user:"Anita Magar",      initials:"AM", avatarBg:"#eeedfe", avatarColor:"#3c3489", text:"What desk is this? I need it 😭",      time:"3h"  },
      { id:"c2", user:"Bikash Shrestha",  initials:"BS", avatarBg:"#faece7", avatarColor:"#712b13", text:"Golden hour + lo-fi = perfection 🙌",  time:"2h"  },
    ],
  },
  {
    id: "3",
    user: "GameGuru",
    initials: "GG",
    avatarColor: "#3c3489",
    avatarText: "#eeedfe",
    caption: "Late night gaming session hits different 🎮",
    tags: "#gaming #setup #nightvibes #RGB",
    song: "Phonk · NFS Heat OST",
    bgFrom: "#0f0f23",
    bgTo: "#2d0a3a",
    emoji: "🎮",
    likes: 2341,
    shares: 412,
    comments: [
      { id:"c1", user:"Rahul Kumar",  initials:"RK", avatarBg:"#e7f3ff", avatarColor:"#185fa5", text:"The RGB is so clean bro 🔴🟢🔵",  time:"5h" },
      { id:"c2", user:"Priya Lama",   initials:"PL", avatarBg:"#fbeaf0", avatarColor:"#72243e", text:"which chair is that?",              time:"4h" },
      { id:"c3", user:"Sita Tamang",  initials:"ST", avatarBg:"#faeeda", avatarColor:"#633806", text:"I need this setup rn 💀",           time:"2h" },
    ],
  },
  {
    id: "4",
    user: "NatureDesk",
    initials: "ND",
    avatarColor: "#085041",
    avatarText: "#e1f5ee",
    caption: "Bringing nature into the workspace 🌿",
    tags: "#plantsetup #green #workspace #calm",
    song: "Forest Sounds · Ambient Mix",
    bgFrom: "#052e16",
    bgTo: "#166534",
    emoji: "🌿",
    likes: 673,
    shares: 88,
    comments: [
      { id:"c1", user:"Anita Magar", initials:"AM", avatarBg:"#eeedfe", avatarColor:"#3c3489", text:"So peaceful 🌱 what plant is that?", time:"1h" },
    ],
  },
];