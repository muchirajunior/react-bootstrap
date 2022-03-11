import React from 'react';

function MemberCard({image,name,username}) {
    return (
        <div  className="card shadow border-0 col-sm p-2  m-3  text-center">
            <img src={image} className="rounded-circle mx-auto w-50" alt="" />
            <h4 className="font-weight-bold text-dark" > {name} </h4>
            <p className="text-muted">@{username}</p>
            
        </div>
    );
}

export default MemberCard;