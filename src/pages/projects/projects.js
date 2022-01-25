import "./project.css";
import projectsDetails from "./project-list";

function Projects() {
  return (
    <div className="container-fluid py-5" style={{ background: "#212529" }}>
      <div className="container">
        <div className="row">
          <h1 className="project-text mb-3">Projects</h1>

          {projectsDetails.map((x) => {
            return (
              <div className="col-12 col-md-4 p-3">
                <div className="card-shadow">
                  <p className="project-text">{x.projectName}</p>
                  <div>
                    <img
                      src={x.projectImgUrl}
                      alt="raa"
                      className="w-100 project-img"
                    />
                    <div className="d-flex justify-content-between mt-1">
                      <button className="details-btn border-0">
                        <p className="ani-text">
                          <span>M</span>
                          ore
                          <span>Details</span>
                        </p>
                      </button>
                      <div className="project-text">
                        {x.webUrl ? (
                          <a href={x.webUrl} target="_blank" rel="noreferrer">
                            <i className="bi bi-box-arrow-up-right text-white fw-bold mx-2"></i>
                          </a>
                        ) : null}
                        {x.githubUrl ? (
                          <a
                            href={x.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bi bi-github text-white fw-bold mx-1"></i>
                          </a>
                        ) : null}
                        {x.playstoreLink ? (
                          <a
                            href={x.playstoreLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i
                              className="bi bi-shop text-white fw-bold mx-2"
                              title="play store"
                            ></i>
                          </a>
                        ) : null}
                      </div>
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
