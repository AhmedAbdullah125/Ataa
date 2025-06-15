import React from 'react'; // Importing React to use JSX syntax and create components.
import Image from 'next/image';

export default function AchievementBanner({ data }) { // Defining the main functional component named 'Footer'.


    return (
        <div className="">
            <div className="achievement-banner">
                <Image src={data.images[0]} alt="banner" className='banner-img' />
            </div>
            <div className="single-cont">
                <div className="para">
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    )
}
