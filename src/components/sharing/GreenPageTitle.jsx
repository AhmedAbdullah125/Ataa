import React from 'react'; // Importing React to use JSX syntax and create components.


export default function GreenPageTitle(title) { // Defining the main functional component named 'Footer'.
    return (
        <div className="GreenPageTitle">
            <h2><span>{title.firstPArt}</span> <span className='yellow-in-GreenPageTitle'>{title.secondPart}</span> <span>{title.thirdPart}</span></h2>
        </div>
    )
}
