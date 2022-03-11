import React from 'react';

function LinksCard({title,links}) {
    return (
        <div className="col-sm ">
            <h4 className=" row font-weight-bold " > {title} </h4>
            { links.map((link)=>  <span className="row mt-3 mb-3 " > {link} <br /> </span>  ) }
            
        </div>
    );
}

export default LinksCard;