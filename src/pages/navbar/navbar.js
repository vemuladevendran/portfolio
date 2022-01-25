import { useState } from "react";
import "./navbar.css";

function NavBar() {
  const [navBar, setNavBar] = useState("hide-menu");

  const toggleNavBar = () => {
    if (navBar === "hide-menu") {
      setNavBar("show-menu");
      return;
    }
    setNavBar("hide-menu");
  };
  return (
    <div
      className="container-fluid position-fixed w-100 top-0 p-0 mb-5"
      style={{ zIndex: "5" }}
    >
      <nav className="row ps-4 px-md-4 pt-3 m-0">
        {/* nav links */}
        <div className="col-6 d-flex justify-content-md-around align-items-center">
          <a
            href="#home"
            className="text-decoration-none me-3"
          >
            <img src="/assets/logo.png" alt="logo" className="logo-img" />
          </a>
          <a
            href="#home"
            className="nav-item text-white fw-bold text-decoration-none d-none d-md-block"
          >
            Home
          </a>
          <a
            href="#projects"
            className="nav-item text-white fw-bold text-decoration-none d-none d-md-block"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="nav-item text-white fw-bold text-decoration-none d-none d-md-block"
          >
            My Skills
          </a>
          <a
            href="#contact"
            className="nav-item text-white fw-bold text-decoration-none d-none d-md-block"
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
        {/* mobile screen */}
        <div className="col-6 d-md-none text-end">
          <span className="nav-social-icons">
            <i
              className="bi bi-menu-button-wide text-white fw-bold cursor-pointer"
              onClick={() => {
                toggleNavBar();
              }}
            ></i>
          </span>
        </div>
      </nav>
      {/* mobile nav bar */}
      <section className="row">
        <div
          className={`col-12 mobile-nav-wrapper position-absolute top-0 ${navBar}`}
        >
          <div className="mobile-nav">
            <p className="nav-items text-end">
              <i
                className="bi bi-x-circle text-white fw-bold cursor-pointer"
                onClick={() => {
                  toggleNavBar();
                }}
              ></i>
            </p>
            <p className="nav-items">Home</p>
            <p className="nav-items">About</p>
            <p className="nav-items">My Skills</p>
            <p className="nav-items">Projects</p>
            <p className="nav-items">Contact</p>
            <p className="nav-items">
              <i className="bi bi-linkedin text-white fw-bold"></i>
              <span className="ms-3">Linked In</span>
            </p>
            <p className="nav-items">
              <i className="bi bi-facebook text-white fw-bold"></i>
              <span className="ms-3">Facebook</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
