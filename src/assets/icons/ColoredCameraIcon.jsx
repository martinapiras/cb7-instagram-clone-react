const ColoredCameraIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M13.625 0a1 1 0 0 1 .932.639l.57 1.472a1 1 0 0 0 .933.639H18a2.5 2.5 0 0 1 2.5 2.5v11.5a2.5 2.5 0 0 1-2.5 2.5H2.5a2.5 2.5 0 0 1-2.5-2.5V5.25a2.5 2.5 0 0 1 2.5-2.5h1.94a1 1 0 0 0 .932-.639L5.942.64A1 1 0 0 1 6.876 0h6.75ZM10.25 5.15a5.6 5.6 0 1 0 0 11.2 5.6 5.6 0 0 0 0-11.2Zm0 1.2a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={8.878}
        x2={-12.498}
        y1={-9.976}
        y2={12.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#378DEF" />
        <stop offset={1} stopColor="#6FC7FC" />
      </linearGradient>
    </defs>
  </svg>
);
export default ColoredCameraIcon;
