export function LinearGradient({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="316"
      viewBox="0 0 1440 316"
      fill="none"
    >
      <g filter="url(#filter0_f_0_15541)">
        <path
          d="M112 253C112 197.772 156.772 153 212 153H1228C1283.23 153 1328 197.773 1328 253.002C1328 280.143 1328 305.857 1328 332.998C1328 388.227 1283.23 433 1228 433H212C156.772 433 112 388.228 112 333V253Z"
          fill="#2463EB"
          fill-opacity="0.08"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_0_15541"
          x="-41"
          y="0"
          width="1522"
          height="586"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="76.5" result="effect1_foregroundBlur_0_15541" />
        </filter>
      </defs>
    </svg>
  );
}
