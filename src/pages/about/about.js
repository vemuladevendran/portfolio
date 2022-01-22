import "./about.css";
import "./cloud.js";
const TagCloud = require("TagCloud");

function About() {
  const myTags = [
    "JavaScript",
    "CSS",
    "HTML",
    "C",
    "C++",
    "React",
    "Python",
    "Java",
    "git",
    "django",
    "Node.js",
    "OpenCV",
    "GCP",
    "MySQL",
    "jQuery",
  ];

  TagCloud(".content", myTags, {
    // radius in px
    radius: 250,

    // animation speed
    // slow, normal, fast
    maxSpeed: "fast",
    initSpeed: "fast",

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true,
  });

  return (
    <div className="about-container container-fluid px-0 py-3">
      <script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js">
        {" "}
      </script>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1 className="about-title">My, Myself & I </h1>
            <p className="about-content mt-5">
              I’m a Front-End Developer located in Chennai. I have a serious
              passion for UI effects and creating intuitive, dynamic user
              experiences.
            </p>
            <p className="about-content">
              Well-organised person, problem solver, independent employee with
              high attention to detail. outdoor activities, TV series and
              English literature.
            </p>
            <p className="about-content">
              Interested in the entire Full stack spectrum and working on
              ambitious projects with positive people.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <span className="content"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
