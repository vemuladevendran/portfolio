import "./about.css";
const TagCloud = require("TagCloud");
<script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js">
  {""}
</script>;
function About() {
  const myTags = [
    "JavaScript",
    "CSS",
    "HTML",
    "React JS",
    "Angular",
    "git",
    "Node.js",
    "Mongo Db",
    "Bootstrap",
  ];

  TagCloud(".content", myTags, {
    // radius in px
    radius: 250,

    // animation speed
    // slow, normal, fast
    maxSpeed: "normal",
    initSpeed: "normal",

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true,
  });

  return (
    <div className="about-container container-fluid px-0 py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="content">
              <h1 className="about-title">My, Myself & I </h1>
              <h1 className="about-title">My, Myself & I </h1>
            </div>
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
