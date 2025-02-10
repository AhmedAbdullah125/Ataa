'use client'
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import GreenPageTitle from '@/components/sharing/GreenPageTitle';
import Image from 'next/image';
import Marquee from '../ui/marquee';
import logoutIcon from '/public/icons/logout.svg'
import Link from 'next/link';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import Loading from '@/app/loading';

export default function Values() { // Defining the main functional component named 'Footer'.
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/value`);
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
        <>
            {
                loading ? <Loading /> :
                    <div className="about has-green-title">
                        <GreenPageTitle firstPArt={"القـ"} secondPart={"ـيــــ"} thirdPart={"ـم !."} />
                        <section className='section-with-yellow-title'>
                            <div className="text">
                                <h5>أهلا بك في مؤسسة عطاء العالمية</h5>
                                <div className="hagez"></div>
                                <h2>{data.title}</h2>
                            </div>

                        </section>
                        <div className="marq" style={{ direction: 'ltr' }}>
                            <div className="relative flex  w-full flex-col items-center md:gap-10 gap-4  justify-center overflow-hidden  ">
                                <Marquee pauseOnHover className="[--duration:20s]">
                                    {data.words.map((review, index) => (

                                        <div className="values-details" key={index}>
                                            <div className="value-item">
                                                <span>{review}</span>
                                                <div className="hagez-vertival"></div>
                                            </div>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                        <Link scroll={true} href={'/programs'} className='greenTitled-link'><span>شاهد البرامج الخيرية الان</span><Image src={logoutIcon} alt="arrow" /></Link>

                    </div>
            }
        </>
    )
}
