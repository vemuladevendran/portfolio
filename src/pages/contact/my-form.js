import { useState } from "react";
import "./contact.css";

function MyForm() {
  const [formSubmit, setFormSubmited] = useState(false);
  const [formValues, setFormValues] = useState({
    yourName: "",
    email: "",
    subject: "",
    message: "",
  });

  // handle formvalue change

  const handleFormvaluechange = (event) => {
    try {
      setFormValues({
        ...formValues,
        [event.target.name]: event.target.value,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    event.target.reset();
  };

  return (
    <div className="container">
      <div className="row">
        <form
          className="col-12"
          onSubmit={($event) => {
            handleSubmit($event);
          }}
        >
          <div className="row">
            <div className="col-12 col-md-6">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input w-100 py-2 my-1 border-0"
                name="yourName"
                onChange={handleFormvaluechange}
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="email"
                placeholder="Your Email"
                className="form-input w-100 py-2 my-1 border-0"
                name="email"
                onChange={handleFormvaluechange}
              />
            </div>
          </div>
          <div className="col-12">
            <input
              type="text"
              placeholder="Subject"
              className="form-input w-100 py-2 my-1 border-0"
              name="subject"
              onChange={handleFormvaluechange}
              required
            />
          </div>
          <div className="col-12">
            <textarea
              placeholder="Message"
              className="form-input w-100 py-2 my-1 border-0"
              name="message"
              onChange={handleFormvaluechange}
            />
          </div>
          {formSubmit ? (
            <span className="text-white">
              Your Form Is Submited. I Will Get Back You Soon
            </span>
          ) : null}
          <div className="col-12 text-center mt-3">
            <button className="glow-on-hover" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyForm;
