import React from 'react';
import SectionHeader from '../common/section_header';
import image1 from "./assets/Image1.png";
import image2 from "./assets/Image2.png";
import image3 from "./assets/Image3.png";
import BlogCard from './blog_card';

function Blogs(props) {
    return (
        <div className="col mt-5" >
            < SectionHeader title="Get Our Application"  header="latest news" />

            <div className="container mx-auto row" >
                < BlogCard 
                    image={image1}
                    title="It Does Not matter How "
                    ltitle="Slowly Go As Long"
                    text="continue reading"
                />

                < BlogCard 
                    image={image2}
                    title="Netbook Network Added "
                    ltitle="New Photo Filter"
                    text="continue reading"
                />

                < BlogCard 
                    image={image3}
                    title="We Optimize Netbooks "
                    ltitle="Better Navigation"
                    text="continue reading"
                />
                
            </div>
            
        </div>
    );
}

export default Blogs;