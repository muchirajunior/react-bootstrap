import React from 'react';
import image from "./assets/Iamge.png";

function Banner(props) {
    return (
        <div className="container row" >
            <div className="col p-5 mt-5">
                <button className="btn btn-light m-2">
                    <b className="text-primary">netbook community</b>
                </button>
                <h1 className="text-primary " > <b>Your Solutions For The Community!</b></h1>
                <p className="text-secondary"  >More than 2 billion people over the world use socibook to stay in touch of reiends and families</p>
                <div className="row">
                    <button className="btn btn-primary btn-lg  m-4 pl-4 pr-4" >view More</button>
                    <button className="btn btn-outline-primary btn-lg m-4 pl-4 pr-4" >view More</button>
                </div>
            </div>
            <div className="col-sm-6">
                <img src={image} className="image-fluid w-100" alt="" />
            </div>
            
        </div>
    );
}

export default Banner;