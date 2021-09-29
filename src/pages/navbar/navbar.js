import "./navbar.css";

function NavBar() {
  return (
    <div className="container-fluid position-fixed w-100 top-0 p-0" style={{zIndex: '5'}}>
      <nav className="row bg-dark px-4 py-3 m-0">
        {/* nav links */}
        <div className="col-12 col-md-6 d-flex justify-content-around">
          <a
            href="/"
            className="nav-item text-white fw-bold text-decoration-none"
          >
            Home
          </a>
          <a
            href="/"
            className="nav-item text-white fw-bold text-decoration-none"
          >
            About
          </a>
          <a
            href="/"
            className="nav-item text-white fw-bold text-decoration-none"
          >
            Projects
          </a>
          <a
            href="/"
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
