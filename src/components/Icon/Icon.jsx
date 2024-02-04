const Default = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="23" stroke={color} strokeWidth="4" />
    <circle cx="25" cy="11" r="4" fill={color} />
    <path d="M29 31C29 43 27.2091 43 25 43C22.7909 43 21 43 21 31C21 19 22.7909 19 25 19C27.2091 19 29 19 29 31Z" fill={color} />
  </svg>
);

const Logo = ({ size = 24, color }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="256" cy="256" r="256" fill="white" />
    <path
      d="M378.473 234.926L356.072 171.086C349.966 153.693 343.482 142 325 142H189C170.518 142 163.034 153.693 156.938 171.075L134.538 234.915C122.576 242.765 115 256.326 115 271.243V348.286C115 360.283 124.742 370 136.769 370C148.797 370 158.538 360.283 158.538 348.286V334.595C158.538 334.595 216.02 337.429 256.5 337.429C296.98 337.429 354.462 334.595 354.462 334.595V348.286C354.462 360.283 364.203 370 376.231 370C388.258 370 398 360.283 398 348.286V271.243C398 256.326 390.413 242.765 378.473 234.926ZM162 227.5L180.308 173.5C183.366 164.793 179.748 163.714 189 163.714H325C327.5 163.714 330 163.714 332.692 171.075L349.019 231H259.5H162C162 231 160.041 233.091 162 227.5ZM163.981 294C154.968 294 147.654 286.704 147.654 277.714C147.654 268.725 154.968 261.429 163.981 261.429C172.993 261.429 180.308 268.725 180.308 277.714C180.308 286.704 172.993 294 163.981 294ZM289.154 283.143H223.846C217.838 283.143 212.962 278.279 212.962 272.286C212.962 266.293 217.838 261.429 223.846 261.429H289.154C295.162 261.429 300.038 266.293 300.038 272.286C300.038 278.279 295.162 283.143 289.154 283.143ZM349.019 294C340.007 294 332.692 286.704 332.692 277.714C332.692 268.725 340.007 261.429 349.019 261.429C358.032 261.429 365.346 268.725 365.346 277.714C365.346 286.704 358.032 294 349.019 294Z"
      fill={color}
    />
  </svg>
);

const Error = ({ size = 50, color }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M28.0424 5.38355L48.0255 40.5197C49.3525 42.853 47.6673 45.75 44.9831 45.75H5.0169C2.33269 45.75 0.647527 42.853 1.97453 40.5197L21.9576 5.38354C23.2996 3.02395 26.7004 3.02395 28.0424 5.38355Z"
      stroke={color}
      strokeWidth="3"
    />
    <path
      d="M22.9062 17.7656C22.8854 16.9844 23.25 16.5938 24 16.5938H26.5C27.25 16.5938 27.6146 16.9844 27.5938 17.7656L27.1719 31.4219C27.151 32.099 26.8125 32.4375 26.1562 32.4375H24.3438C23.6875 32.4375 23.349 32.099 23.3281 31.4219L22.9062 17.7656ZM24.0625 39C23.3333 39 22.9688 38.6094 22.9688 37.8281V35.7344C22.9688 34.9531 23.3333 34.5625 24.0625 34.5625H26.4375C27.1667 34.5625 27.5312 34.9531 27.5312 35.7344V37.8281C27.5312 38.6094 27.1667 39 26.4375 39H24.0625Z"
      fill={color}
    />
  </svg>
);

const SelectArrow = ({ size = 20, color }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 7.5L10 12.5L15 7.5" stroke="#121417" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Confirm = ({ size = 70, color }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 26.5L24.5 33.5L36.5 17" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <circle cx="25" cy="25" r="23.5" stroke={color} strokeWidth="3" />
  </svg>
);

const Favorite = ({ size = 18, color, fill = 'none' }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z"
      stroke={color}
      strokeOpacity="1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Icon = ({ name, color = 'currentColor', fill = 'none', ...props }) => {
  return (
    <>
      {!name && <Default color={color} {...props} />}
      {name === 'logo' && <Logo color={color} {...props} />}
      {name === 'error' && <Error color={color} {...props} />}
      {name === 'confirm' && <Confirm color={color} {...props} />}
      {name === 'select-arrow' && <SelectArrow color={color} {...props} />}
      {name === 'favorites' && <Favorite color={color} fill={fill} {...props} />}
    </>
  );
};

export default Icon;
