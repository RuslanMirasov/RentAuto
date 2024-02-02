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

const SelectArrow = ({ size = 50, color }) => (
  <svg width={size} viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4L25 26L46 4" stroke={color} strokeWidth={8} strokeLinecap="round" />
  </svg>
);

const Confirm = ({ size = 70, color }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 26.5L24.5 33.5L36.5 17" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <circle cx="25" cy="25" r="23.5" stroke={color} strokeWidth="3" />
  </svg>
);

const Smile = ({ size = 70, color }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="23.5" stroke={color} strokeWidth="3" />
    <circle cx="15" cy="19" r="6.5" stroke={color} strokeWidth="3" />
    <circle cx="34" cy="19" r="6.5" stroke={color} strokeWidth="3" />
    <path
      d="M14.5951 19.3699C14.0491 19.3699 14.0644 18.6617 14.5397 18.5499C15.0494 18.43 15.334 19.0903 14.7946 19.2701"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M33.643 19.669C33.643 19.271 33.522 18.8802 33.8868 18.6718C34.064 18.5705 34.7253 18.4252 34.74 18.7937C34.756 19.1934 34.4392 20.0578 33.8979 19.7134C33.4912 19.4545 33.3524 18.7354 33.8425 18.572"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M13.9968 33.8303C14.2495 33.8584 14.4194 34.2555 14.5508 34.4342C15.011 35.0601 15.5327 35.6597 16.2018 36.0686C17.9513 37.1377 19.9323 38.2386 21.9749 38.595C23.6042 38.8793 25.348 38.389 26.9391 38.0853C28.283 37.8289 29.6953 37.7841 30.8229 36.9218C32.3622 35.7447 33.5819 33.8067 34.3411 32.0352"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const Icon = ({ name, color = 'currentColor', ...props }) => {
  return (
    <>
      {!name && <Default color={color} {...props} />}
      {name === 'logo' && <Logo color={color} {...props} />}
      {name === 'error' && <Error color={color} {...props} />}
      {name === 'confirm' && <Confirm color={color} {...props} />}
      {name === 'select-arrow' && <SelectArrow color={color} {...props} />}
      {name === 'smile' && <Smile color={color} {...props} />}
    </>
  );
};

export default Icon;
