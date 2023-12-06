import PropsTypes from "prop-types";

import React from "react";

export default function Navbar(props) {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">{props.para}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">About</a>
        </li>
     
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  );
}

// export default Navbar

Navbar.propsTypes = {
  title: PropsTypes.string.isRequired,
  para: PropsTypes.string,
};

//* default proppsTypes

Navbar.defaultProps={
    title:"Navbar",
    para:"Home"
}
