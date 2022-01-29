import "./contact.css";
import MyForm from "./my-form";
function Contact() {
  return (
    <div className="container-fluid contact-container" id="contact">
      <div className="row p-lg-5">
        <h1 className="project-text mb-3">Contact Us</h1>
        {/* location map */}
        <div className="col-12 col-md-6">
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4181.1804039230765!2d79.8940679!3d13.2950741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a529ce13dd9223d%3A0xbd71d71f0c631635!2sSri%20Ramakuppam%20Rd%2C%20Katchur%2C%20Tamil%20Nadu%20602026!5e1!3m2!1sen!2sin!4v1643450088448!5m2!1sen!2sin"
            height="450"
            allowfullscreen=""
            loading="lazy"
            className="p-3 p-md-2 w-100"
          ></iframe>
        </div>
        <div className="col-12 col-md-6 d-lg-flex flex-wrap">
          <div className="d-flex col-12 col-lg-3">
            <i className="bi bi-geo-alt-fill text-white fs-2 fw-bold"></i>
            <div className="ms-3">
              <p className="contact-text">Sri Rama Kuppam,</p>
              <p className="contact-text">Seethanjeri (Post),</p>
              <p className="contact-text">Uthukottai,</p>
              <p className="contact-text">Thiruvallur 602026</p>
            </div>
          </div>

          {/* email id */}
          <div className="d-flex col-12 col-lg-6">
            <i className="bi bi-envelope-fill text-white fs-2 fw-bold"></i>
            <div className="ms-3">
              <a href="mailto:devendranvemula@gmail.com">
                devendranvemula@gmail.com
              </a>
            </div>
          </div>

          {/* mobile number */}
          <div className="d-flex col-12 col-lg-3">
            <i className="bi bi-telephone-forward text-white fs-2 fw-bold"></i>
            <div className="ms-3">
              <a href="tel:9445296380">9445296380</a>
            </div>
          </div>

          {/* query form request form */}
          <div className="col-12">
            <MyForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
