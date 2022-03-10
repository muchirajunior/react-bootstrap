import React from 'react';
import CommunityCard from './community_card';
import {  MdForum, MdGroup, MdGroups, MdListAlt,  MdViewModule } from "react-icons/md";
import { FaScroll } from "react-icons/fa";

function Community(props) {
    return (
        <div className="text-center" >
            <b className="text-primary"> Our Community </b>
            <h1><b>Community Main Feature</b></h1>
            <p className="text-muted"> The wise man therefore always holds in this matters <br /> to this principle of selection </p>
            <div className="container row m-5" >
                < CommunityCard 
                    iconBg="primary"
                    icon={< MdGroup />}
                    title="Members,Friends"
                    text="Members, Friends Connection ( like followers), Private message"
                />

                < CommunityCard 
                    iconBg="danger"
                    icon={< MdGroups />}
                    title="Groups"
                    text="Your users can create groups and let others join and talk"
                />

                < CommunityCard 
                    iconBg="warning"
                    icon={< MdForum />}
                    title="Forum"
                    text="Forum is ready to BBPress. Your users can make a topics and talk"
                />

                < CommunityCard 
                    iconBg="primary"
                    icon={< MdViewModule />}
                    title="Custom Module"
                    text="You can create members, Groups Module. We already created 3 modules. its by drag & drop liver builder"
                />

                < CommunityCard 
                    iconBg="danger"
                    icon={< MdListAlt />}
                    title="List Builder"
                    text="Members, Group Lists can be modified by drag & drop liver builder"
                />

                < CommunityCard 
                    iconBg="warning"
                    icon={< FaScroll />}
                    title="List Scroll Effects"
                    text="8 different scroll effects are ready. You can always change by your tastes"
                />

            </div>

        </div>
    );
}

export default Community;