'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import lovedMessage from '/public/icons/lovedMess.svg'
import Link from 'next/link';
import parse from 'html-react-parser';

export default function ImageSwiper({ data }) {
    const [loved, setLoved] = useState(false);
    const [loveCount, setLoveCount] = useState(data.like);
    // Load the 'loved' state from localStorage on component mount
    useEffect(() => {
        const storedLoved = localStorage.getItem('loved');
        setLoved(storedLoved === 'true');  // Convert to boolean
    }, []);  // ✅ Empty dependency array to only run on mount

    const toggleLoved = () => {
        const newLovedState = !loved;
        setLoved(newLovedState);
        localStorage.setItem('loved', newLovedState.toString());  // ✅ Store as string
    };

    return (
        <div className="ProgramDetails">
            <div className="prog-title">
                <div className="titles">
                    <h5>{data.mainTitle}</h5>
                    <h2>{data.name}</h2>
                </div>
                <div className="share">
                    <i className="fa-solid fa-share-nodes"></i>
                    <div className="love-div" onClick={toggleLoved}>
                        {data.like > 0 ? <span>{loved ? data.like + 1 : data.like}</span> : null}
                        <i className="fa-regular fa-heart" style={{ color: loved ? '#E42728' : 'black' }}></i>
                    </div>
                </div>
            </div>
            <div className="text-achieved">
                <div className="text">
                    <p className="main-p">
                        {parse(data.mainDescription)}
                    </p>
                    {
                        data.programItems.map((item, index) => (
                            <div className="para-cont" key={index}>
                                <h3>{parse(item.title)}</h3>
                                <p>{parse(item.description)}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="achived">
                    <div className="cont-progress">
                        <h4 className="recievied-amount">${data.target - data.compiled}</h4>
                        <span>تم جمع مبلغ {data.compiled} دولار أمريكي</span>
                        <div className="progress-bar-cont">
                            <div className="progress-achived" style={{ width: `${(data.compiled / data.target) * 100}%` }}></div>
                        </div>
                        <h6 className="target">${data.target} الهدف</h6>
                    </div>
                    <Link href={'/programs'} className='donate-link'><span>تبــرع الان</span><Image src={lovedMessage} alt="logout" /></Link>
                </div>
            </div>
        </div>
    );
}
