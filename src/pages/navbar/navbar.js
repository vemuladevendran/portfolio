import "./navbar.css";

function NavBar() {
  return (
    <div
      className="container-fluid position-fixed w-100 top-0 p-0"
      style={{ zIndex: "5" }}
    >
      <nav className="row bg-dark px-4 py-3 m-0">
        {/* nav links */}
        <div className="col-12 col-md-6 d-flex justify-content-around">
          <a
            href="#home"
            className="nav-item text-white fw-bold text-decoration-none"
          >
            Home
          </a>
          <div className="project-nav position-relative">
            <span
              className="nav-item text-white fw-bold text-decoration-none"
            >
              Projects
            </span>
            {/* projects list dropdown */}
            <div className="project-list position-absolute">
              <div
                className="d-flex flex-column justify-content-center py-3 mt-3"
                style={{ backgroundColor: "#191919", borderRadius: "20px" }}
              >
                <a
                  href="#studentdb"
                  className="nav-item p-3 text-white fw-bold text-decoration-none"
                >
                  StudentDb
                </a>
                <a
                  href="#ministucor"
                  className="nav-item p-3 text-white fw-bold text-decoration-none"
                >
                  Mini stucor
                </a>
                <a
                  href="#bangalorewaits"
                  className="nav-item p-3 text-white fw-bold text-decoration-none"
                >
                  BangaloreWaits
                </a>
              </div>
            </div>
          </div>
          <a
            href="#skills"
            className="nav-item text-white fw-bold text-decoration-none"
          >
            My Skills
          </a>
          <a
            href="#contact"
            className="nav-item text-white fw-bold text-decoration-none"
          >
            Contact
          </a>
        </div>
        <div className="col-12 col-md-6 d-none d-md-block text-end">
          <span className="nav-social-icons">
            <i className="bi bi-linkedin text-white fw-bold"></i>
          </span>
          <span className="nav-social-icons">
            <i className="bi bi-facebook text-white fw-bold"></i>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
