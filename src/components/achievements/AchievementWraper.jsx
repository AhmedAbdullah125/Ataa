'use client'
import Breadcrumb from '@/components/sharing/BreadCrumb'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import { API_BASE_URL } from '@/lib/apiConfig'
import AchievementBanner from './AchievementBanner'
import Loading from '@/app/loading'
import img1 from '/public/blogs/1.png'
import img2 from '/public/blogs/2.png'
import img3 from '/public/blogs/3.png'
import Gallery from './Gallery'
export default function AchievementWraper() { // Defining the main functional component named 'Footer'.


    const searchParams = useSearchParams()
    const pathId = searchParams.get('id');
    let [achievement, setAchievement] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathId]);
    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/achievement/${pathId}`);
                let data = response.data.data;
                setAchievement(data);
                setLoading(false);
            } catch (error) {
                console.error('Error retrieving data:', error);
                throw new Error('Could not get data');
                setLoading(false)
            }
        };
        getData();

    }, []);
console.log(achievement);

    
    return (
        <div className="container m-auto ataa-custom-slider proram-wraper">
            {
                loading ? <Loading /> :
                    <>
                        <Breadcrumb
                            title={'أنجازاتــــنا'}           // Title of the breadcrumb
                            titleUrl={'/achievements'}       // URL for the title link (if clickable)
                            subtitle={achievement.title}            // Subtitle (if applicable, empty in this case)
                            subtitleUrl={''}         // URL for the subtitle (if applicable, empty in this case)
                        />
                        <AchievementBanner data={achievement} />
                        <Gallery data={achievement} />
                       
                    </>
            }

        </div>

    )
}
