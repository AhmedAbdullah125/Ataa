'use client'
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import GreenPageTitle from '@/components/sharing/GreenPageTitle';
import Link from 'next/link';
import Image from 'next/image';
import logoutIcon from '/public/icons/logout.svg'
import img1 from '/public/about/4.svg'
import img2 from '/public/about/5.svg'
import img3 from '/public/about/6.svg'
import img4 from '/public/about/7.svg'
import img6 from '/public/about/8.svg'
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
export default function Message() { // Defining the main functional component named 'Footer'.
    let messs = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
    ]
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        const getProgram = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/messages`);
                let data = response.data.data;
                setData(data)
                setLoading(false)
            } catch (error) {
                console.error('Error retrieving data:', error);
                throw new Error('Could not get data');
                setLoading(false)
            }
        };
        getProgram();
    }, []);
    return (
        <div className="about has-green-title">
            <GreenPageTitle firstPArt={"الر"} secondPart={"ســــــا"} thirdPart={"لة!."} />
            <section className='section-with-yellow-title'>
                <div className="text">
                    <h5>أهلا بك في مؤسسة عطاء العالمية</h5>
                    <div className="hagez"></div>
                    <h2>خدمات اجتماعية متطورة تلبي احتياجات الأفراد والمجتمع</h2>
                </div>
            </section>
            <div className="container m-auto">
                <div className="grid-sec">
                    {
                        data.map((item, index) =>
                            <div className="item" key={item.id}>
                                <Image src={item.image || messs[index % 4].img} alt="logout" width={100} height={100} />
                                <div className="h3-cont">
                                    <Image src={img6} alt="logout" />
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="hagez"></div>
                                <p>{item.description}</p>
                                <div className="rate">
                                    <i className="fa-solid fa-star"></i> <span className='rate-value'>{item.rate}</span><span className='rate-votes'>({item.view})</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <Link scroll={true} href={'/programs'} className='greenTitled-link'><span>شاهد البرامج الخيرية الان</span><Image src={logoutIcon} alt="arrow" /></Link>
        </div>
    )
}