import "./my-skills.css";
function MySkils(params) {
  return (
    <div
      className="container-fluid skills pb-5"
      id="skills"
      style={{ padding: "0 5%", backgroundColor: "#212529" }}
    >
      <div className="row pb-3" style={{ backgroundColor: "#191919" }}>
        <p className="fw-bold text-white p-3 fs-4">My Skills</p>
        <div className="container d-flex justify-content-center flex-wrap">
          <div className="skills-img-wrapper" data-aos="slide-down">
            <img src="/assets/html.svg" alt="html"></img>
          </div>
          <div className="skills-img-wrapper" data-aos="slide-down">
            <img src="/assets/css.svg" alt="html"></img>
          </div>
          <div className="skills-img-wrapper" data-aos="slide-down">
            <img src="/assets/scs.svg" alt="html"></img>
          </div>
          <div className="skills-img-wrapper" data-aos="slide-down">
            <img src="/assets/js.svg" alt="html"></img>
          </div>
          <div className="skills-img-wrapper" data-aos="slide-down">
            <img src="/assets/bootstrap.png" alt="html"></img>
          </div>
          <div className="skills-img-wrapper" data-aos="slide-down">
            <img src="/assets/angular.svg" alt="html"></img>
          </div>
        </div>
        {/* second line */}
        <div className="mt-3 container d-flex justify-content-center flex-wrap">
          <div className="skills-img-wrapper" data-aos="slide-up">
            <img src="/assets/react.svg" alt="html"></img>
          </div>
          <div className="skills-img-wrapper" data-aos="slide-up">
            <img src="/assets/node.svg" alt="html"></img>
          </div>
          <div className="skills-img-wrapper" data-aos="slide-up">
            <img src="/assets/db.svg" alt="html"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkils;
