import React from 'react';
import {  MdGroup, MdOutlineEmojiEvents, MdStarOutline } from "react-icons/md";
import {BsGithub} from "react-icons/bs";
import AchievementCard from './achievement_card';

function Achievements(props) {
    return (
        <div  className="row mx-auto"  >
            < AchievementCard   
                icon={< MdStarOutline />}
                heading="4.8 Rating" 
                img={< MdGroup />}
                subtitle1=" "
                subtitle2="+836k"
                subtitle3="Members"
                btnText="Join our Community"
                btnType="text-primary"
                shadow="shadow"           
            />

            < AchievementCard   
                icon={< MdOutlineEmojiEvents />}
                heading="Awards" 
                img={< BsGithub />}
                subtitle1="Best of "
                subtitle2="2021"
                subtitle3="On GitHub"
                btnText="Go to Awards" 
                shadow="shadow"         
            />

            
            < AchievementCard   
                header="our Achievements"
                heading="We a connecting you to Digital lives" 
                
                btnText="Discover More"
                btnType="btn-primary" 
                shadow="col-sm-4 "
            />

            
            
        </div>

        
    );
}

export default Achievements;