import React from "react";

const Installment = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="85"
      height="77"
      viewBox="0 0 85 77"
      fill="none"
    >
      <g filter="url(#filter0_i_1479_510)">
        <ellipse
          cx="48.6494"
          cy="38.2543"
          rx="36.2793"
          ry="37.9803"
          fill="white"
        />
      </g>
      <mask
        id="mask0_1479_510"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="11"
        y="5"
        width="74"
        height="70"
      >
        <ellipse
          cx="48.3761"
          cy="40.3098"
          rx="36.5528"
          ry="34.6326"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_1479_510)">
        <path
          d="M27.9541 42.3262C27.9541 34.0419 34.6698 27.3262 42.9541 27.3262H86.2326V65.6103C86.2326 73.8946 79.5168 80.6103 71.2326 80.6103H42.9541C34.6698 80.6103 27.9541 73.8946 27.9541 65.6103V42.3262Z"
          fill="#1380FF"
        />
        <rect
          x="41.9395"
          y="43.9443"
          width="30.3048"
          height="2.16781"
          rx="1.0839"
          fill="white"
        />
        <rect
          x="41.9395"
          y="51.8813"
          width="18.6491"
          height="2.16781"
          rx="1.0839"
          fill="#88BFFF"
        />
        <rect
          x="41.9395"
          y="59.8179"
          width="12.4327"
          height="2.16781"
          rx="1.0839"
          fill="#88BFFF"
        />
      </g>
      <g filter="url(#filter1_d_1479_510)">
        <rect
          x="17.3037"
          y="17.4653"
          width="30.7194"
          height="22.844"
          rx="11.422"
          fill="#0C417E"
        />
      </g>
      <path
        d="M25.4622 29.7505L28.1974 32.4127C29.0696 33.2616 30.4914 33.1412 31.2085 32.1577L38.2722 22.4689"
        stroke="#FDFDFD"
        stroke-width="3"
        stroke-linecap="round"
      />
      <defs>
        <filter
          id="filter0_i_1479_510"
          x="12.3701"
          y="-5.72607"
          width="72.5596"
          height="81.9604"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-18" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.958398 0 0 0 0 0.958398 0 0 0 0 0.958398 0 0 0 0.38 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1479_510"
          />
        </filter>
        <filter
          id="filter1_d_1479_510"
          x="0.303711"
          y="9.46533"
          width="64.7197"
          height="56.8438"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="9" />
          <feGaussianBlur stdDeviation="8.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.14902 0 0 0 0 0.196078 0 0 0 0 0.219608 0 0 0 0.27 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1479_510"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1479_510"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Installment;
