import "./project.css";

function Projects(params) {
  return (
    <>
      <div className="bg-dark py-5" style={{ padding: "0 5%" }}>
        <div
          className="container-fluid rounded"
          style={{ backgroundColor: "#191919" }}
        >
          <div className="row justify-content-lg-between p-4">
            <p className="text-muted text-center text-md-end">
              Student Database
            </p>
            <div className="col-12 col-md-6 col-lg-4">
              <img
                src="/assets/student-db.png"
                alt="Project Screen Short"
                className="project-img"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <p className="text-muted text-center fs-5">A SHORT DESCRIPTION</p>
              <div className="d-flex align-items-center h-100">
                <p className="text-white project-details">
                  This is built in react js and the Node js for database I used
                  MongoDB. This project is made for stafs in college to maintain
                  the students details. Once we enter the details in this we can
                  ascess the data from anywhere through internet. Using this
                  application we can send the circulars we can send the reports
                  for the particular student. and we have more filters to filter
                  the details. This will reduce the time on stafe in college to
                  filter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* project -2  */}
      <div className="bg-dark py-5" style={{ padding: "0 5%" }}>
        <div
          className="container-fluid rounded"
          style={{ backgroundColor: "#191919" }}
        >
          <div className="row justify-content-lg-between p-4">
            <p className="text-muted text-center text-md-start">
              MINI STUCOR
            </p>
            <div className="col-12 col-md-6 col-lg-6">
              <p className="text-muted text-center fs-5">A SHORT DESCRIPTION</p>
              <div className="d-flex align-items-center h-100">
                <p className="text-white project-details">
                  This is built in react js and the Node js for database I used
                  MongoDB. This project is made for stafs in college to maintain
                  the students details. Once we enter the details in this we can
                  ascess the data from anywhere through internet. Using this
                  application we can send the circulars we can send the reports
                  for the particular student. and we have more filters to filter
                  the details. This will reduce the time on stafe in college to
                  filter
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <img
                src="/assets/mini-stucor.png"
                alt="Project Screen Short"
                className="project-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
