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
    const [pathId, setPathId] = useState(searchParams.get('id'))
    let [program, setprogram] = useState([]);
    let [programs, setprograms] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathId]);
    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            try {
                // const response = await axios.get(`${API_BASE_URL}/program/${pathId}`);
                // const responsePrograms = await axios.get(`${API_BASE_URL}/programs`);
                // let data = response.data.data;
                // let programs = responsePrograms.data.data;
                // setprogram(data);
                // setprograms(programs);
                setLoading(false);
            } catch (error) {
                console.error('Error retrieving data:', error);
                throw new Error('Could not get data');
                setLoading(false)
            }
        };
        getData();

    }, []);
    const achievement = {
        id: 1,
        name: 'إعمار بيوت الله',
        categoryId: 1,
        categoryName: 'ائمة',
        description: ` قمنا بفضل الله بانجاز هذه المشاريع والانجـــازات متوكلين علي الله والحمد لله علي اتمامه علينا النعمه واسباغه الفضل ومنحه الاخلاص 
 قمنا بفضل الله بانجاز هذه المشاريع والانجـــازات متوكلين علي الله والحمد لله علي اتمامه علينا النعمه واسباغه الفضل ومنحه الاخلاص
 قمنا بفضل الله بانجاز هذه المشاريع والانجـــازات متوكلين علي الله والحمد لله علي اتمامه علينا النعمه واسباغه الفضل ومنحه الاخلاص
 قمنا بفضل الله بانجاز هذه المشاريع والانجـــازات متوكلين علي الله والحمد لله علي اتمامه علينا النعمه واسباغه الفضل ومنحه الاخلاص
 قمنا بفضل الله بانجاز هذه المشاريع والانجـــازات متوكلين علي الله والحمد لله علي اتمامه علينا النعمه واسباغه الفضل ومنحه الاخلاص
 `
        ,
        images: [img1, img2, img3, img1, img2, img3],


    }
    return (
        <div className="container m-auto ataa-custom-slider proram-wraper">
            {
                loading ? <Loading /> :
                    <>
                        <Breadcrumb
                            title={'الانجــــازات'}           // Title of the breadcrumb
                            titleUrl={'/achievements'}       // URL for the title link (if clickable)
                            subtitle={achievement.name}            // Subtitle (if applicable, empty in this case)
                            subtitleUrl={''}         // URL for the subtitle (if applicable, empty in this case)
                        />
                        <AchievementBanner data={achievement} />
                        <Gallery data={achievement} />
                       
                    </>
            }

        </div>

    )
}
