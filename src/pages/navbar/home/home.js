import "./home.css";

function Home() {
  return (
    <div className="container-fluid bg-dark h-100">
      <div className="row h-100">
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
          <p className="my-text fs-1 text-center w-100">Hi. I'm Devendran.</p>
          <p className="my-text fs-1 text-center w-100">A Developer.</p>
          <p className="text-white px-3 text-center w-100">
            I’m also a front-end developer and general doodler with a keen eye
            for creating engaging UI, bringing products to life.
          </p>
        </div>
        <div className="col-12 col-lg-6 d-flex bg-dark">
          {/* eye box */}
          <div className="eye-wrapper w-100 d-flex justify-content-center align-items-center m-auto position-relative">
            {/* side boxes */}
            <div className="side-box side-box-1 d-none d-xxl-block"></div>
            <div className="side-box side-box-2 d-none d-xxl-block"></div>
            <div className="side-box side-box-3 d-none d-xxl-block"></div>
            <div className="side-box side-box-4 d-none d-xxl-block"></div>
             {/* eclipes */}
          <div className="bg-white eye-ball-wrapper">
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
