import React from 'react';
import image from './assets/Image.png';
import image1 from './assets/Image1.png';
import image2 from './assets/Image2.png';
import { MdModeStandby } from "react-icons/md";

const item=(text) => <div className="row">
            <b>< MdModeStandby className="text-primary" /></b> {" "}
            <span className="form-check-label" > {text} </span>
        </div>

function About(props) {
    return (
        <div className=" row w-100  p-4 mt-4 bg-white">
            <div className="col-sm-6  p-5 mt-5 h-100"  >
                
                <b className="text-primary" > why netbooks?  </b>
                <h2 className="text-dark mt-3" > <b> Why Join Netbook Social Network? </b> </h2>
                <p className="text-secodary"> Recent survery shows that small business have recognized the need to connect to customers </p>
                <div className="col">
                    { item("Group") }
                    <br />
                    { item("Messages") }
                    <br />
                    { item("Share") }
                </div>

            </div>

            <div className="row ml-4">
                <img src={image} className=" col-sm-6 mt-4 mb-4" alt="" />
                <div className="col-sm-6" style={{display:"flex",flexDirection:"column", float:"right"}} >
                    <img src={image2}  className="mb-3 " alt="" />
                    <img src={image1} className="" alt="" />
                </div>
            </div>
            
        </div>
    );
}

export default About;