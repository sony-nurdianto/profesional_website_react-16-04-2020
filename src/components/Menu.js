import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.png";
import "./style.css";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Sony Nurdianto
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Portofolio">
                  Portofolio
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Article">Article</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Hire">Hire me</Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <div className="container-fluid Title3">
                    <div className="row">
                        <div className="col ">
                            <img className="ml-5"src={Logo} alt="..."/>
                        </div>
                        <div className="col d-flex align-items-center">
                            <nav className="nav">
                                <Link className="nav-link" to="/"><h2>Home</h2></Link>
                                <Link className="nav-link" to="#"><h2>Portofolio</h2></Link>
                                <Link className="nav-link" to="/Article"><h2>Article</h2></Link>
                                <Link className="nav-link" to="/Hire"><h2>Hire me</h2></Link>
                            </nav>
                        </div>
                    </div>
                </div> */}
      </div>
    );
  }
}
