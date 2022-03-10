import React from 'react';
import { MdArrowRightAlt } from "react-icons/md";

function AchievementCard({header,icon,heading,img,subtitle1,subtitle2,subtitle3,btnText,btnType,shadow}) {
    return (
        <div className={`card m-3 border-0 col-sm p-4 ${shadow}`}>
                <b className="text-primary">{header}</b>
               <h5> <b className="text-primary" style={{fontSize:"40px"}} >{icon}</b> <b className="text-dark " >{heading}</b></h5>
           

            <div className="row m-2 text-muted " >
                <b className="text-danger"  style={{fontSize:"30px"}}  >{img}</b>
                <span className="align-middle ml-1">
                    {subtitle1} 
                    <b className="text-primary ml-2 mr-2">{subtitle2}</b>
                    {subtitle3}
                </span>
            </div>
            <p className="text-muted">More than 2 billion people over the world use socibook to stay in touch of reiends and families</p>

            <button className={`btn ${btnType}`}  > {btnText} < MdArrowRightAlt /></button>

            
        </div>
    );
}

export default AchievementCard;