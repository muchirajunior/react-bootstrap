import React from 'react';
import SectionHeader from '../common/section_header';
import MemberCard from './assets/member_card';
import image1 from "./assets/team1.jpg";
import image2 from "./assets/team2.jpg"

//reusable custom button for teams sections
const TeamButton = ({type,text}) => <button className={`btn m-2 pl-5 pr-5 rounded btn-lg btn-${type} `} >{text}</button>

function Team(props) {
    return (
        <div className="col w-100 " >
            < SectionHeader
                title="Valuable team"
                header="Out Active Members"
                text="when unkownon printer took a galley of type and meeting "
                ltext="fari scrambled it."
            />

            <div className="row p-2  m-3 bg-light rounded mx-auto w-50">
                { TeamButton({text:"Newest"}) }
                { TeamButton({text:"Popular"}) }
                { TeamButton({text:"Active", type:"primary"}) }
            </div>
        
            <div className="container mx-auto p-2 row" >
                
                < MemberCard image={image1} name="Fahim Rahman" username="fahim" />
                < MemberCard image={image2} name="Lucy Rahman" username="lucy" />
                < MemberCard image={image1} name="Fahim Rahman" username="fahim" />
                < MemberCard image={image2} name="Lucy Rahman" username="lucy" />

            </div>
            
            
        </div>
    );
}

export default Team;