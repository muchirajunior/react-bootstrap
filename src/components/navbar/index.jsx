import logo from "./assets/logo.png";
import React from 'react';
import { MdSearch } from "react-icons/md";

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg w-100 navbar-light bg-transparent border-bottom box-shadow mb-3">
            <div className="container" >
                <a className="navbar-brand" href="#!"> <img src={logo} alt="" /> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#!navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#!">Home <span className="sr-only">(current)</span></a>
                        </li>
                       
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Community
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#!">Action</a>
                                <a className="dropdown-item" href="#!">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#!">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">Events</a>
                        </li>
                       
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <div className="row border-bottom mr-2">
                            <label htmlFor="search"> < MdSearch  /></label>
                            <input className=" form-control  border-0 bg-transparent" name="search" type="search" placeholder="search here .." aria-label="Search" />
                        </div>
                        <button className="btn btn-primary btn-lg pl-4 pr-4 "  type="submit">Login</button>
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;