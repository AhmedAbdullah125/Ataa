
'use client'
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import Image from 'next/image';
import logoutIcon from '/public/icons/logout.svg'
import img from '/public/about/1.jpg'
import Link from 'next/link';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';

export default function HomeAbout() { // Defining the main functional component named 'Footer'.

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
            } catch (error) {s
                console.error('Error retrieving data:', error);
                throw new Error('Could not get data');
                setLoading(false)
            }
        };
        getData();
    }, []);

    return (
        <section className=''>
            <div className="container m-auto">
                <div className="home-about-section">
                    <div className="text-sec">
                        <div className="title">
                            <h5>من نحن</h5>
                            <div className="hagez"></div>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                        <Link scroll={true} href={'/about'}>اقــــرأ المزيد<Image src={logoutIcon} alt="logout" /></Link>
                    </div>
                    <div className="img-sec">
                        <Image src={img} alt="logout" width={600} height={600} />
                    </div>
                </div>
            </div>
        </section>
    )
}
