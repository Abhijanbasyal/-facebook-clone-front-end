"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function FriendSettingsModal({
  open,
  onClose,
}: Props) {
  const [allowRequests, setAllowRequests] = useState(true);
  const [suggestions, setSuggestions] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-bg-primary border border-border-default p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Friend Settings</h2>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-bg-secondary hover:bg-bg-tertiary"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <SettingRow
            title="Allow Friend Requests"
            value={allowRequests}
            onChange={() => setAllowRequests(!allowRequests)}
          />

          <SettingRow
            title="Friend Suggestions"
            value={suggestions}
            onChange={() => setSuggestions(!suggestions)}
          />

          <SettingRow
            title="Push Notifications"
            value={pushNotifications}
            onChange={() => setPushNotifications(!pushNotifications)}
          />

          <SettingRow
            title="Email Notifications"
            value={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
        </div>
      </div>
    </div>
  );
}

type SettingRowProps = {
  title: string;
  value: boolean;
  onChange: () => void;
};

function SettingRow({ title, value, onChange }: SettingRowProps) {
  return (
    <div className="flex items-center justify-between">
      <p className="font-medium">{title}</p>

      <button
        onClick={onChange}
        className={`
          w-14 h-8 rounded-full relative transition
          ${value ? "bg-blue-500" : "bg-gray-400"}
        `}
      >
        <div
          className={`
            absolute top-1 w-6 h-6 rounded-full bg-white transition
            ${value ? "right-1" : "left-1"}
          `}
        />
      </button>
    </div>
  );
}