import "./contact.css";

function MyForm() {
  return (
    <div className="container">
      <div className="row">
        <form className="col-12">
          <div className="row">
            <div className="col-12 col-md-6">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input w-100 py-2 my-1 border-0"
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="email"
                placeholder="Your Email"
                className="form-input w-100 py-2 my-1 border-0"
              />
            </div>
          </div>
          <div className="col-12">
            <input
              type="text"
              placeholder="Subject"
              className="form-input w-100 py-2 my-1 border-0"
            />
          </div>
          <div className="col-12">
            <textarea
              placeholder="Message"
              className="form-input w-100 py-2 my-1 border-0"
            />
          </div>
          <div className="col-12 text-center mt-3">
            <button className="glow-on-hover" type="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyForm;
