const GitHub = ({ color = "#000" }) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="humaan-github"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="humaan-github"
          transform="translate(-94.000000, -2068.000000)"
          fill={color}
          fillRule="nonzero"
        >
          <g id="github" transform="translate(94.000000, 2068.000000)">
            <path
              d="M12,0 C5.37,0 0,5.50941904 0,12.3046768 C0,17.7423186 3.438,22.3534962 8.205,23.9787389 C8.805,24.094608 9.025,23.7141884 9.025,23.387089 C9.025,23.094853 9.015,22.3206837 9.01,21.295294 C5.672,22.0376762 4.968,19.6444165 4.968,19.6444165 C4.422,18.2242517 3.633,17.8448575 3.633,17.8448575 C2.546,17.0819676 3.717,17.0973484 3.717,17.0973484 C4.922,17.1834812 5.555,18.3647301 5.555,18.3647301 C6.625,20.2463203 8.364,19.7028637 9.05,19.3880691 C9.158,18.5923667 9.467,18.0499355 9.81,17.7423186 C7.145,17.4347016 4.344,16.3764994 4.344,11.6617574 C4.344,10.3184969 4.809,9.22132988 5.579,8.3600025 C5.444,8.04930941 5.039,6.79833394 5.684,5.10336471 C5.684,5.10336471 6.689,4.77318921 8.984,6.36459408 C9.944,6.09081502 10.964,5.95546357 11.984,5.94931124 C13.004,5.95546357 14.024,6.09081502 14.984,6.36459408 C17.264,4.77318921 18.269,5.10336471 18.269,5.10336471 C18.914,6.79833394 18.509,8.04930941 18.389,8.3600025 C19.154,9.22132988 19.619,10.3184969 19.619,11.6617574 C19.619,16.3888041 16.814,17.4295747 14.144,17.7320647 C14.564,18.101205 14.954,18.8558918 14.954,20.0084299 C14.954,21.6552058 14.939,22.9779585 14.939,23.3778605 C14.939,23.7008583 15.149,24.0853795 15.764,23.9623327 C20.565,22.3483692 24,17.7341154 24,12.3046768 C24,5.50941904 18.627,0 12,0"
              id="Path"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between border-b text-sm p-4">
      <p>A Roadmap to Becoming an AI Engineer</p>
      <a
        href="https://github.com/athivvat/ai-engineer-roadmap"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70"
      >
        <GitHub />
      </a>
    </div>
  );
};

export default Header;