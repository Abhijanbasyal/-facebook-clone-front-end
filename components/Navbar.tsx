"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import ProfileDropdown from "@/components/ProfileDropdown";

// ── Icons ────────────────────────────────────────────────────────────────────
import {
  FaHome,
  FaUserFriends,
  FaBars,
  FaFacebookMessenger,
  FaBell,
} from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";

// ── Nav center links ─────────────────────────────────────────────────────────
const navLinks = [
  { href: "/", label: "Home", Icon: FaHome },
  { href: "/friends", label: "Friends", Icon: FaUserFriends },
  { href: "/reels", label: "Reels", Icon: MdOndemandVideo },
  { href: "/marketplace", label: "Market", Icon: BsShop },
  { href: "/groups", label: "Groups", Icon: HiUserGroup },
];

// ── Icon button with optional badge ─────────────────────────────────────────
function IconBtn({
  icon,
  badge,
  label,
}: {
  icon: React.ReactNode;
  badge?: number;
  label: string;
}) {
  return (
    <button
      aria-label={label}
      className="relative w-9 h-9 rounded-full bg-white/20 hover:bg-white/30
                 flex items-center justify-center text-nav-text transition-colors shrink-0"
    >
      {icon}
      {badge ? (
        <span
          className="absolute -top-0.5 -right-0.5 bg-error text-nav-text
                         text-[10px] font-bold rounded-full min-w-[16px] h-4
                         flex items-center justify-center px-1 border-2 border-primary"
        >
          {badge}
        </span>
      ) : null}
    </button>
  );
}

// ── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="bg-primary text-nav-text h-14 flex items-center px-3 gap-2
                    shadow-md sticky top-0 z-50 w-full"
    >
      {/* LEFT — Logo + Search */}
      <div className="flex items-center gap-2 shrink-0">
        <Link href="/" className="text-3xl font-black font-serif leading-none">
          f
        </Link>

        <div className="relative hidden sm:block">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-nav-text/60">
            {/* search icon */}
            <HiUserGroup />
          </span>
          <input
            type="text"
            placeholder="Search Facebook"
            className="bg-primary-hover rounded-full pl-9 pr-4 py-2 text-sm
                       text-nav-text placeholder-white/60 outline-none w-52
                       focus:ring-2 focus:ring-white/30"
          />
        </div>
      </div>

      {/* CENTER — Main nav links */}
      <div className="flex items-center justify-center flex-1 gap-1 mx-2">
        {navLinks.map(({ href, label, Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              title={label}
              className={`group relative flex flex-col items-center justify-center px-4 sm:px-5
              h-14 rounded-lg text-[11px] gap-0.5 transition-colors
              border-b-[3px] shrink-0
              ${
                active
                  ? "text-nav-text border-white"
                  : "text-nav-text/60 border-transparent hover:bg-white/10 hover:text-nav-text"
              }`}
            >
              <Icon className="w-6 h-6" />

              {/* Hover label */}
              <span
                className="absolute top-full mt-1 px-2 py-1 text-xs rounded bg-black text-nav-text
               opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* RIGHT — Menu, Messenger, Notifications, Profile */}
      <div className="flex items-center gap-2 shrink-0">
        <IconBtn icon={<FaBars className="w-4 h-4" />} label="Menu" />
        <Link
          href="/messenger"
          className="relative w-9 h-9 rounded-full bg-white/20 hover:bg-white/30
                 flex items-center justify-center text-white transition-colors shrink-0"
          aria-label="Messenger"
        >
          <FaFacebookMessenger className="w-4 h-4" />
          <span
            className="absolute -top-0.5 -right-0.5 bg-error text-white text-[10px]
                   font-bold rounded-full min-w-[16px] h-4 flex items-center
                   justify-center px-1 border-2 border-primary"
          >
            3
          </span>
        </Link>
        <IconBtn
          icon={<FaBell className="w-4 h-4" />}
          label="Notifications"
          badge={5}
        />
        {/* ↓ replaces the old avatar button — has dropdown built in */}
        <ProfileDropdown />
      </div>
    </nav>
  );
}
