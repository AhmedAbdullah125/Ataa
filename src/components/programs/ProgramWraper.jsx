'use client'
import ProrgamLikes from '@/components/programs/ProrgamLikes'
import ImageSwiper from '@/components/programs/ImageSwiper'
import ProgramDetails from '@/components/programs/ProgramDetails'
import Breadcrumb from '@/components/sharing/BreadCrumb'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import { API_BASE_URL } from '@/lib/apiConfig'
import Loading from '@/app/loading'
export default function ProramWraper() { // Defining the main functional component named 'Footer'.


    const searchParams = useSearchParams()
    const [pathId, setPathId] = useState(searchParams.get('id'))
    let [program, setprogram] = useState([]);
    let [programs, setprograms] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const getProgram = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/program/${pathId}`);
                const responsePrograms = await axios.get(`${API_BASE_URL}/programs`);
                let data = response.data.data;
                let programs = responsePrograms.data.data;
                setprogram(data)
                setprograms(programs)
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
        <div className="container m-auto ataa-custom-slider proram-wraper">
            {
                loading ? <Loading /> :
                    <>
                        <Breadcrumb
                            title={'البرامج'}           // Title of the breadcrumb
                            titleUrl={'/programs'}       // URL for the title link (if clickable)
                            subtitle={program.name}            // Subtitle (if applicable, empty in this case)
                            subtitleUrl={''}         // URL for the subtitle (if applicable, empty in this case)
                        />
                        <ImageSwiper data={program} />
                        <ProgramDetails data={program} />
                        <ProrgamLikes data={programs} categoryId={program.categoryId} />
                    </>
            }

        </div>

    )
}
