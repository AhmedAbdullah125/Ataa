'use client';
import React, { useEffect, useState } from 'react';
import Hero from '@/components/home/Hero';
import HomeAbout from '@/components/home/HomeAbout';
import HomeVision from '@/components/home/HomeVision';
import HomeValues from '@/components/home/HomeValues';
import HomeMessage from '@/components/home/HomeMessage';
import HomePrograms from '@/components/home/HomePrograms';
import HomeBlogs from '@/components/home/HomeBlogs';
import Loading from '@/app/loading';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
export default function Maneger() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/settings`);
                let data = response.data.data;
                setData(data)
                setLoading(false)
            } catch (error) {
                console.error('Error retrieving data:', error);
                throw new Error('Could not get data');
            }
        };
        getData();
    }, []);
    console.log(data);
    
    return (
        <main className='flex flex-col md:gap-36 gap-14'>
            {loading ? <Loading></Loading> :
                <>
                    <Hero />
                    {data.footer.isAbout&&<HomeAbout />}
                    {data.footer.isVision&&<HomeVision />}
                    {data.footer.isMessage&&<HomeMessage />}
                    {data.footer.isValue&&<HomeValues />}
                    {data.footer.isProgram&&<HomePrograms />}
                    {data.footer.isBlog&&<HomeBlogs />}
                </>
            }
        </main>
    );
}
