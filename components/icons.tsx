import * as React from "react";

import { IconSvgProps } from "@/types";

export const InstagramIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
      fill="none"
      height={size || height}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M16.5 7.5v.01" />
    </svg>
  );
};

export const FaceBookIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
      fill="none"
      height={size || height}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
    </svg>
  );
};

export const ContactIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      className="icon icon-tabler icons-tabler-outline icon-tabler-contract"
      fill="none"
      height={size || height}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M8 21h-2a3 3 0 0 1 -3 -3v-1h5.5" />
      <path d="M17 8.5v-3.5a2 2 0 1 1 2 2h-2" />
      <path d="M19 3h-11a3 3 0 0 0 -3 3v11" />
      <path d="M9 7h4" />
      <path d="M9 11h4" />
      <path d="M18.42 12.61a2.1 2.1 0 0 1 2.97 2.97l-6.39 6.42h-3v-3z" />
    </svg>
  );
};

export const CarretDownIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      className="icon icon-tabler icons-tabler-filled icon-tabler-caret-down"
      fill="currentColor"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
    </svg>
  );
};

export const WalletIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 48 48"
      width={size || width}
      x="0px"
      y="0px"
      {...props}
    >
      <g>
        <path
          d="M43,13c0-1.10457-0.89543-2-2-2H6c-1.6543,0-3-1.3457-3-3c0-0.55225-0.44775-1-1-1S1,7.44775,1,8v32
	c0,3.86599,3.13401,7,7,7h33c1.10457,0,2-0.89543,2-2V13z"
          fill="#A67C52"
        />
        <path
          d="M46,24H36c-2.75684,0-5,2.24316-5,5s2.24316,5,5,5h10c0.55225,0,1-0.44775,1-1v-8
	C47,24.44775,46.55225,24,46,24z"
          fill="#87613E"
        />
        <path
          d="M4,5h28c1.10457,0,2,0.89543,2,2v4H4c-1.65685,0-3-1.34314-3-3V8C1,6.34314,2.34314,5,4,5z"
          fill="#87613E"
        />
        <circle cx="36" cy="29" fill="#EFD358" r="2" />
        <path
          d="M37,2H7C6.44772,2,6,2.44772,6,3v8h32V3C38,2.44772,37.55228,2,37,2z"
          fill="#4DA34D"
        />
        <rect fill="#9EDB9E" height="6" width="26" x="9" y="5" />
      </g>
    </svg>
  );
};

export const CashIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 48 48"
      width={size || width}
      x="0px"
      y="0px"
      {...props}
    >
      <g>
        <path
          d="M46,33H2c-0.55225,0-1-0.44775-1-1V4c0-0.55225,0.44775-1,1-1h44c0.55225,0,1,0.44775,1,1v28
	C47,32.55225,46.55225,33,46,33z"
          fill="#4DA34D"
        />
        <path
          d="M38,6H10c0,3.31372-2.68628,6-6,6v12c3.31372,0,6,2.68628,6,6h28c0-3.31372,2.68628-6,6-6V12
	C40.68628,12,38,9.31372,38,6z"
          fill="#9EDB9E"
        />
        <circle cx="24" cy="18" fill="#4DA34D" r="7" />
        <path
          d="M25,33h18v-2c0-0.35736-0.09039-0.68933-0.24652-1C42.90961,29.68933,43,29.35736,43,29v-3
	c0-0.35736-0.09039-0.68933-0.24652-1C42.90961,24.68933,43,24.35736,43,24v-3c0-0.35736-0.09039-0.68933-0.24652-1
	C42.90961,19.68933,43,19.35736,43,19v-3c0-0.35736-0.09039-0.68933-0.24652-1C42.90961,14.68933,43,14.35736,43,14v-3
	c0-2.62598-4.52734-4-9-4s-9,1.37402-9,4v3c0,0.35736,0.09039,0.68933,0.24652,1C25.09039,15.31067,25,15.64264,25,16v3
	c0,0.35736,0.09039,0.68933,0.24652,1C25.09039,20.31067,25,20.64264,25,21v3c0,0.35736,0.09039,0.68933,0.24652,1
	C25.09039,25.31067,25,25.64264,25,26v3c0,0.35736,0.09039,0.68933,0.24652,1C25.09039,30.31067,25,30.64264,25,31V33z"
          opacity="0.1"
        />
        <path
          d="M44,37H28c-0.55225,0-1,0.44775-1,1v3c0,2.62598,4.52734,4,9,4s9-1.37402,9-4v-3
	C45,37.44775,44.55225,37,44,37z"
          fill="#D8BC48"
        />
        <path
          d="M36,34c-4.47266,0-9,1.37402-9,4s4.52734,4,9,4s9-1.37402,9-4S40.47266,34,36,34z"
          fill="#EFD358"
        />
        <path
          d="M44,32H28c-0.55225,0-1,0.44775-1,1v3c0,2.62598,4.52734,4,9,4s9-1.37402,9-4v-3
	C45,32.44775,44.55225,32,44,32z"
          fill="#D8BC48"
        />
        <path
          d="M36,29c-4.47266,0-9,1.37402-9,4s4.52734,4,9,4s9-1.37402,9-4S40.47266,29,36,29z"
          fill="#EFD358"
        />
        <path
          d="M44,27H28c-0.55225,0-1,0.44775-1,1v3c0,2.62598,4.52734,4,9,4s9-1.37402,9-4v-3
	C45,27.44775,44.55225,27,44,27z"
          fill="#D8BC48"
        />
        <path
          d="M36,24c-4.47266,0-9,1.37402-9,4s4.52734,4,9,4s9-1.37402,9-4S40.47266,24,36,24z"
          fill="#EFD358"
        />
        <path
          d="M44,22H28c-0.55225,0-1,0.44775-1,1v3c0,2.62598,4.52734,4,9,4s9-1.37402,9-4v-3
	C45,22.44775,44.55225,22,44,22z"
          fill="#D8BC48"
        />
        <path
          d="M36,19c-4.47266,0-9,1.37402-9,4s4.52734,4,9,4s9-1.37402,9-4S40.47266,19,36,19z"
          fill="#EFD358"
        />
        <path
          d="M44,17H28c-0.55225,0-1,0.44775-1,1v3c0,2.62598,4.52734,4,9,4s9-1.37402,9-4v-3
	C45,17.44775,44.55225,17,44,17z"
          fill="#D8BC48"
        />
        <path
          d="M36,14c-4.47266,0-9,1.37402-9,4s4.52734,4,9,4s9-1.37402,9-4S40.47266,14,36,14z"
          fill="#EFD358"
        />
        <path
          d="M44,12H28c-0.55225,0-1,0.44775-1,1v3c0,2.62598,4.52734,4,9,4s9-1.37402,9-4v-3
	C45,12.44775,44.55225,12,44,12z"
          fill="#D8BC48"
        />
        <path
          d="M36,9c-4.47266,0-9,1.37402-9,4s4.52734,4,9,4s9-1.37402,9-4S40.47266,9,36,9z"
          fill="#EFD358"
        />
      </g>
    </svg>
  );
};

export const WhatssAppIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
};

export const ArrowRightIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    </svg>
  );
};

export const AddressIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-map-2"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
      <path d="M9 4v13" />
      <path d="M15 7v5.5" />
      <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
      <path d="M19 18v.01" />
    </svg>
  );
};

export const PhoneIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
  );
};

export const QuoteIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-route"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4z" />
      <path d="M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" />
    </svg>
  );
};

export const MailIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
      <path d="M3 7l9 6l9 -6" />
    </svg>
  );
};

export const SendIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
    </svg>
  );
};

export const PusrposeIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-presentation"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 4l18 0" />
      <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
      <path d="M12 16l0 4" />
      <path d="M9 20l6 0" />
      <path d="M8 12l3 -3l2 2l3 -3" />
    </svg>
  );
};

export const VisionIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-eye-heart"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13.905 11.39a2 2 0 1 0 -2.855 2.37" />
      <path d="M9.992 17.779c-2.722 -.621 -5.053 -2.547 -6.992 -5.779c2.4 -4 5.4 -6 9 -6c3.332 0 6.15 1.714 8.454 5.14" />
      <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
    </svg>
  );
};

export const MisionIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-archive"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
      <path d="M10 12l4 0" />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);
