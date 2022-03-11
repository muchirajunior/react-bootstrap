import React from 'react';
import { FaApple, FaGooglePlay } from "react-icons/fa";
import image from "./assets/mobile1.png";

function MobileApp(props) {
    return (
        <div className="conatainer mx-auto row " >
            <div className="col-sm-6 m-5" >
                <b className="text-primary">Get Our Application</b>

                <h1 className="text-dark font-weight-bold mt-4"> You Can Easily Find <br /> This APP...! </h1>

                <p className="text-muted ">  I say chap that is suing lavatory chip shop <br /> goes off his smashing boot are you taking  <br /> the piss posh loo briliant </p>

                <div className="row m-4 mt-5"   >
                <a href="#!" className="rounded-lg m-2  list-group-item-action  bg-light p-2 row" style={{maxWidth:"200px"}}  >
                    < FaApple className="font-weight-bold h2 align-middle " />
                    <span className="col " >
                        <span className="text-muted" >Download on the</span> <br />
                        <span className="text-dark font-weight-bold " >App Store</span>
                    </span>
                </a>

                <a href="#!" className="rounded-lg text-white list-group-item-action m-2 bg-primary p-2 row " style={{maxWidth:"200px"}}  >
                    < FaGooglePlay className="font-weight-bold h2 align-middle " />
                    <span className="col" >
                        <span className="text-muted" >Download on the</span> <br />
                        <span className="font-weight-bold " >App Store</span>
                    </span>
                </a>

            </div>
            </div>

            <img src={image}  className="image-fluid" width="40%" alt="" />
          
        </div>
    );
}

export default MobileApp;