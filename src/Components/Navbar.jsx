import React from 'react'

const Navbar = ({setCategory}) => {
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#" onClick={() => setCategory("general")}><span class="badge bg-light text-dark fs-4">NewsApp</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold">

                    <li className="nav-item">
                    <a className="nav-link active" href='#' onClick={() => setCategory("technology")}>Technology</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active" href='#' onClick={() => setCategory("business")}>Business</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active" href='#'  onClick={() => setCategory("health")}>Health</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active" href='#' onClick={() => setCategory("science")}>Science</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active" href='#' onClick={() => setCategory("sports")}>Sports</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active" href='#' onClick={() => setCategory("entertainment")}>Entertainment</a>
                    </li>

                    </ul>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <span>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </span>
                        </li>
                    </ul>


                




            </div>
        </div>
</nav>
  )
}


export default Navbar