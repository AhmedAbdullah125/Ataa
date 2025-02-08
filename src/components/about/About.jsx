'use client'
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import GreenPageTitle from '@/components/sharing/GreenPageTitle';
import Link from 'next/link';
import Image from 'next/image';
import logoutIcon from '/public/icons/logout.svg'
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';

export default function About() { // Defining the main functional component named 'Footer'.
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/about-us`);
                let data = response.data.data;
                setData(data)
                setLoading(false)
            } catch (error) {
                s
                console.error('Error retrieving data:', error);
                throw new Error('Could not get data');
                setLoading(false)
            }
        };
        getData();
    }, []);
    return (
        <div className="about has-green-title">
            <GreenPageTitle firstPArt={"من "} secondPart={"نحــن"} thirdPart={".!"} />
            <section className='section-with-yellow-title'>
                <div className="text">
                    <h5>أهلا بك في مؤسسة عطاء العالمية</h5>
                    <div className="hagez"></div>
                    <h2>{data.title}</h2>
                </div>
                <p className='greenTitled-p'>
                    {data.description}
                </p>
                <Link scroll={true} href={'/programs'} className='greenTitled-link'><span>شاهد البرامج الخيرية الان</span><Image src={logoutIcon} alt="arrow" /></Link>

            </section>
        </div>
    )
}
