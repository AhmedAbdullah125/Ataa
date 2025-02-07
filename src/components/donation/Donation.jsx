'use client'
import Breadcrumb from '@/components/sharing/BreadCrumb'
import React, { useEffect, useState } from 'react'
import Loading from '@/app/loading'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import axios from 'axios'
import { API_BASE_URL } from '@/lib/apiConfig'
export default function Donation() { // Defining the main functional component named 'Footer'.

    const searchParams = useSearchParams()
    const [pathId, setPathId] = useState(searchParams.get('id'))
    let [program, setprogram] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const getProgram = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/program/${pathId}`);
                let data = response.data.data;
                setprogram(data)
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
        <div className="">
            <div className="container m-auto mb-10">

                <Breadcrumb 
                    title={'البرامج'}           // Title of the breadcrumb
                    titleUrl={'/programs'}       // URL for the title link (if clickable)
                    subtitle={'صفحة  التبرع'}            // Subtitle (if applicable, empty in this case)
                    subtitleUrl={''}         // URL for the subtitle (if applicable, empty in this case)
                />
            </div>
            {
                loading ? <Loading /> :
                    <div className="donation-page">
                        <div className="container m-auto">
                            <div className="donation-form">
                                <div className="details">
                                    <div className="img-cont">
                                        <Image src={program.thumbnail} alt="logout" width={600} height={600} />
                                    </div>
                                    <div className="text">

                                        <h3>  أنت تدعم حملة جمع التبرعات <span>{program.mainTitle}</span> </h3>
                                        <p>ستذهب تبرعاتك إلى<span> مؤسسة عطاء العالمية</span> .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>

    )
}
