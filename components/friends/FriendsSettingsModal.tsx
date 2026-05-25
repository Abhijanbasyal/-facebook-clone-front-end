// "use client";

// import { useState } from "react";

// type Props = {
//   open: boolean;
//   onClose: () => void;
// };

// export default function FriendSettingsModal({
//   open,
//   onClose,
// }: Props) {
//   const [allowRequests, setAllowRequests] = useState(true);
//   const [suggestions, setSuggestions] = useState(true);
//   const [pushNotifications, setPushNotifications] = useState(true);
//   const [emailNotifications, setEmailNotifications] = useState(false);

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
//       <div className="w-full max-w-md rounded-2xl bg-bg-primary border border-border-default p-6 shadow-2xl">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-xl font-bold">Friend Settings</h2>

//           <button
//             onClick={onClose}
//             className="w-10 h-10 rounded-full bg-bg-secondary hover:bg-bg-tertiary"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="flex flex-col gap-5">
//           <SettingRow
//             title="Allow Friend Requests"
//             value={allowRequests}
//             onChange={() => setAllowRequests(!allowRequests)}
//           />

//           <SettingRow
//             title="Friend Suggestions"
//             value={suggestions}
//             onChange={() => setSuggestions(!suggestions)}
//           />

//           <SettingRow
//             title="Push Notifications"
//             value={pushNotifications}
//             onChange={() => setPushNotifications(!pushNotifications)}
//           />

//           <SettingRow
//             title="Email Notifications"
//             value={emailNotifications}
//             onChange={() => setEmailNotifications(!emailNotifications)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// type SettingRowProps = {
//   title: string;
//   value: boolean;
//   onChange: () => void;
// };

// function SettingRow({ title, value, onChange }: SettingRowProps) {
//   return (
//     <div className="flex items-center justify-between">
//       <p className="font-medium">{title}</p>

//       <button
//         onClick={onChange}
//         className={`
//           w-14 h-8 rounded-full relative transition
//           ${value ? "bg-blue-500" : "bg-gray-400"}
//         `}
//       >
//         <div
//           className={`
//             absolute top-1 w-6 h-6 rounded-full bg-white transition
//             ${value ? "right-1" : "left-1"}
//           `}
//         />
//       </button>
//     </div>
//   );
// }


"use client";
import { useState } from "react";

const SETTINGS = [
  { key: "requests",    label: "Friend requests", sub: "Get notified on new requests",   default: true  },
  { key: "suggestions", label: "Suggestions",     sub: "People you may know",             default: false },
  { key: "birthdays",   label: "Birthdays",       sub: "Friend birthday reminders",       default: true  },
  { key: "nearbyFriends",label:"Nearby friends",  sub: "Friends in your area",            default: false },
];

export default function FriendsSettingsModal({ onClose }: { onClose: () => void }) {
  const [toggles, setToggles] = useState<Record<string, boolean>>(
    Object.fromEntries(SETTINGS.map((s) => [s.key, s.default]))
  );

  const toggle = (key: string) =>
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div
      className="fixed inset-0 bg-black/30 z-50 flex items-start justify-start
                 pt-16 pl-[280px]"
      onClick={onClose}
    >
      <div
        className="bg-bg-primary rounded-2xl border border-border-default
                   p-4 w-[300px] ml-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold text-text-primary">
            Notification settings
          </h2>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-bg-secondary hover:bg-bg-tertiary
                       flex items-center justify-center text-text-secondary text-sm"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-1">
          {SETTINGS.map(({ key, label, sub }) => (
            <div key={key}
                 className="flex items-center justify-between py-2.5 px-1
                            border-b border-border-default last:border-0">
              <div>
                <p className="text-sm font-medium text-text-primary">{label}</p>
                <p className="text-xs text-text-secondary">{sub}</p>
              </div>
              {/* Toggle switch */}
              <button
                role="switch"
                aria-checked={toggles[key]}
                onClick={() => toggle(key)}
                className={`w-11 h-6 rounded-full transition-colors relative flex-shrink-0
                            ${toggles[key] ? "bg-primary" : "bg-bg-tertiary"}`}
              >
                <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white
                                  transition-all duration-200
                                  ${toggles[key] ? "left-[22px]" : "left-0.5"}`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}