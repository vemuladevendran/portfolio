


function MySkils(params) {
    return(
        <div className="container-fluid" id="skills" style={{padding: '0 5%',backgroundColor: '#212529'}}>
            <div className="row" style={{backgroundColor: '#191919'}}>
                <p className="fw-bold text-white p-3 fs-4">My Skills</p>
                <div className="col-12 col-md-4 col-lg-3 d-flex align-items-center">
                    <img className="w-100" src="/assets/html.png" alt="HTML CSS JS" />
                </div>
                <div className="col-12 col-md-4 col-lg-3 d-flex align-items-center">
                    <img className="w-100" src="/assets/angular.png" alt="ANGULAR" />
                </div>
                <div className="col-12 col-md-4 col-lg-3 d-flex align-items-center">
                    <img className="w-100" src="/assets/react.png" alt="REACT JS" />
                </div>
                <div className="col-12 col-md-4 col-lg-3 d-flex align-items-center">
                    <img className="w-100" src="/assets/nodejs.png" alt="NODE JS" />
                </div>
            </div>
        </div>
    )
}

export default MySkils;