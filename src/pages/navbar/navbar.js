function NavBar() {
  return (
    <div classNameName="container-fluid">
      <nav className="row bg-dark px-4 py-3 m-0">
        {/* nav links */}
        <div className="col-12 col-md-6 d-flex justify-content-around">
          <a href="/" className="nav-item text-white fw-bold text-decoration-none">
            Home
          </a>
          <a href="/" className="nav-item text-white fw-bold text-decoration-none">
            About
          </a>
          <a href="/" className="nav-item text-white fw-bold text-decoration-none">
            Projects
          </a>
          <a href="/" className="nav-item text-white fw-bold text-decoration-none">
            Contact
          </a>
        </div>
        <div className="nav-items col-12 col-md-6 d-none d-md-block"></div>
      </nav>
    </div>
  );
}

export default NavBar;
