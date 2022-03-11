import React from 'react';
import FooterSocial from './components/footer_social';
import LinksCard from "./components/links_card"
import SubscribeCard from './components/subscribe_card';

function Footer(props) {
    return (
        <div className="col w-100 bg-secondary text-white p-0 " >
            <div className="container row mx-auto m-2 pt-4 pb-4" >
                < LinksCard  title="Home"  links={["Home","Community","Events","Contact"]} />
                < LinksCard  title="Resources"  links={["Blog","News","Guides","Help Center"]} />
                < LinksCard  title="Community"  links={["NewsFeed","Profile","Friends","Forum"]} />
                < LinksCard  title="Main Links"  links={["Members","Activities","Groups","Private Groups"]} />
                < SubscribeCard />
            </div>

            < FooterSocial />
            
        </div>
    );
}

export default Footer;