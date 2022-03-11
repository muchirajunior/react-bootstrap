import React from 'react';

function SectionHeader({title,header,text,ltext}) {
    return (
        <div className="text-center w-100">
            <b className="text-primary">{title}</b>
            <h1 className="font-weight-bold">{header}</h1>
            <p className="text-muted">{text} <br /> {ltext} </p>
        </div>
    );
}

export default SectionHeader;