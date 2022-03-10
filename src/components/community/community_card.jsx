import React from 'react';

function CommunityCard({iconBg,icon,title,text}) {
    return (
        <div className=" card border-0  row p-3  m-4" style={{borderRadius:"20px", maxWidth:"500px"}}>
                <span className={` p-3 mr-2 h-50 text-white h1 bg-${iconBg}`}  style={{borderRadius:"20px", maxHeight:"80px"}} >{icon}</span>
                <span className=" col-sm-8 " >
                    <p className="h4 font-weight-bold"  >{title}</p>
                    <p className="text-muted mt-3 w-100 h-100" >{text}</p>
                </span>
        </div>
    );
}

export default CommunityCard;