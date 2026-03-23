import React from 'react';

const LogoIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: '0.4rem', filter: 'drop-shadow(0px 0px 8px rgba(139, 92, 246, 0.4))' }}
  >
    <rect width="40" height="40" rx="10" fill="url(#paint0_linear_logo)" />
    <path
      d="M12 28L28 12M28 12H16M28 12V24"
      stroke="white"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="paint0_linear_logo" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
);

export default LogoIcon;
