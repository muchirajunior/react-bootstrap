import React from 'react';

function LinksCard({title,links}) {
    return (
        <div className="col-sm ">
            <h4 className=" row font-weight-bold " > {title} </h4>
            { links.map((link)=> 
                <span className="row mt-3 mb-3 " > 
                    <a href="#!" className="list-group-item-action text-white" > {link}  </a>                
                </span>  
            ) }
            
        </div>
    );
}

export default LinksCard;