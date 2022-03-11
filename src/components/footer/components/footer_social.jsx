import React from 'react';
import logo from "../assets/logo.png";
import {  FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

function FooterSocial(props) {
    return (
        <div className=" bg-dark  w-100 m-0" >
            <div className="d-flex align-content-lg-center flex-wrap w-100" >
                <span className="m-4 flex-fill" > Besnik Creativity Agency </span>

                <span className=" m-4  flex-fill">
                <img src={logo}  className="image-fluid" width="" alt="" />
                </span>
                

                <div className="row m-4 flex-fill " >
                    <  FaTwitter className="h2 m-2 font-weight-bold" />
                    <  FaFacebook className="h2 m-2 font-weight-bold" />
                    <  FaInstagram className="h2 m-2 font-weight-bold" />
                    <  FaLinkedin className="h2 m-2 font-weight-bold" />
                </div>

            </div> 
            
        </div>
    );
}

export default FooterSocial;