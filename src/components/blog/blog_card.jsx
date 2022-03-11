import React from 'react';
import { MdArrowForward, MdRemove } from "react-icons/md";

function BlogCard({image,title,ltitle,text}) {
    return (
        <div className="card col-sm border-0" >
            <img src={image} className="w-75"  alt="" />
            <div className="row mt-3">
                < MdRemove  className="font-weight-bold h2 m-2 mt-0 text-warning" />
                <h5 className="text-dark font-weight-bold mb-4 "> {title} <br /> {ltitle}  </h5>
            </div>
           <button className="btn" > {text} < MdArrowForward /> </button>
            
        </div>
    );
}

export default BlogCard;