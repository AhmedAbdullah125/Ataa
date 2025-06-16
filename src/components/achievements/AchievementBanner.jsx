import React from 'react'; // Importing React to use JSX syntax and create components.
import Image from 'next/image';

export default function AchievementBanner({ data }) { // Defining the main functional component named 'Footer'.


    return (
        <div className="">
            <div className="achievement-banner">
                <Image src={data.thumbnail} alt="banner" className='banner-img'  width={200} height={200}/>
            </div>
            <div className="single-cont">
                <div className="para">
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    )
}
