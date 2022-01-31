import { useEffect, useState } from "react";
import "./home.css";

const MyName = () => {
  const myName = [..."Devendran"];
  const [activeLetter, setActiveLetter] = useState();
  useEffect(() => {
    let count = 0;
    const clrTimer = () => window.clearInterval(timerId);

    const timerId = window.setInterval(() => {
      setActiveLetter(count);
      ++count;
      if (count === myName.length) {
        clrTimer();
      }
    }, 800);

    return clrTimer;
  }, [myName.length]);

  const handleLetterClick = function (i) {
    setActiveLetter(i);
  };

  return (
    <>
      {myName.map((x, i) => {
        return (
          <span
            className={activeLetter === i ? "active" : ""}
            onClick={handleLetterClick.bind(null, i)}
            key={i.toString()}
          >
            {x}
          </span>
        );
      })}
    </>
  );
};

function Home() {
  return (
    <div className="container-fluid bg-dark h-100" id="home">
      <div className="row h-100">
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
          <div className="word my-text fs-1 text-center w-100 d-flex justify-content-center">
            <p className="my-text fs-1 text-center me-2">Hi. I'm</p>
            <MyName></MyName>
          </div>
          <p className="my-text fs-1 text-center w-100 text-2">A Developer.</p>
          <p className="text-white px-3 text-center w-100">
            I’m also a full-stack- developer and general doodler with a keen eye
            for creating engaging Web Sites, bringing products to life.
          </p>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center bg-dark">
          {/* small screen */}
          <div className="d-md-none">
            <img src="/assets/eye2.png" alt="eye" className="rounded w-100" />
          </div>
          {/* eye box */}
          <div className="d-none eye-wrapper w-100 d-md-flex justify-content-center align-items-center m-auto position-relative">
            {/* side boxes */}
            <div className="side-box side-box-1 d-none d-xxl-block"></div>
            <div className="side-box side-box-2 d-none d-xxl-block"></div>
            <div className="side-box side-box-3 d-none d-xxl-block"></div>
            <div className="side-box side-box-4 d-none d-xxl-block"></div>
            {/* eclipes */}

            <svg
              width="275"
              height="269"
              viewBox="0 0 275 269"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ opacity: 1, transform: "translateY(0px)" }}
            >
              <rect
                x="0.301636"
                y="40.4437"
                width="20"
                height="64"
                rx="8"
                transform="rotate(-45 0.301636 40.4437)"
                fill="white"
                style={{ opacity: 1 }}
              ></rect>
              <rect
                x="126"
                width="20"
                height="64"
                rx="8"
                fill="white"
                style={{ opacity: 1 }}
              ></rect>
              <rect
                x="257.556"
                y="26.3015"
                width="20"
                height="64"
                rx="8"
                transform="rotate(45 257.556 26.3015)"
                fill="white"
                style={{ opacity: 1 }}
              ></rect>
              <ellipse
                cx="137.5"
                cy="181.5"
                rx="137.5"
                ry="87.5"
                fill="white"
              ></ellipse>
              <path
                className="eye-ball"
                d="M138 233C166.719 233 190 209.943 190 181.5C190 153.057 166.719 130 138 130C109.281 130 86 153.057 86 181.5C86 209.943 109.281 233 138 233Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
