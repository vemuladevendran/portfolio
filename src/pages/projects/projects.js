import "./project.css";

function Projects() {
  const projectsDetails = [
    {
      projectName: "Raaonline",
      projectImgUrl: "/assets/raa.png",
      githubUrl: "",
      webUrl: "www.raaonline.co.in/",
    },
    {
      projectName: "BangaloreWaits",
      projectImgUrl: "/assets/blr.png",
      githubUrl: "",
      webUrl: "",
    },
  ];

  return (
    <div className="container-fluid py-5" style={{ background: "#212529" }}>
      <div className="container">
        <div className="row">
          <h1 className="project-text mb-3">Projects</h1>

          {projectsDetails.map((x) => {
            {
              /* project cards */
            }
            return (
              <div className="col-12 col-md-4 card-shadow">
                <p className="project-text">{x.projectName}</p>
                <div>
                  <img src={x.projectImgUrl} alt="raa" className="w-100 project-img" />
                  <div className="d-flex justify-content-between mt-1">
                    <button className="details-btn border-0">
                      <p className="ani-text">
                        <span>M</span>
                        ore
                        <span>Details</span>
                      </p>
                    </button>
                    <div className="project-text">
                      <a href={x.webUrl} target="_blank" rel="noreferrer">
                        <i className="bi bi-box-arrow-up-right text-white fw-bold mx-2"></i>
                      </a>
                      <a href={x.githubUrl} target="_blank" rel="noreferrer">
                        <i className="bi bi-github text-white fw-bold mx-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
