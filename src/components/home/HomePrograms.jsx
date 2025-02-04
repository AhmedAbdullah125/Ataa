
'use client'
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import LogoutIcon from '/public/icons/logout.svg';
import Link from 'next/link';
import { motion } from 'framer-motion';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import Loading from '@/app/loading';
export default function HomePrograms() { // Defining the main functional component named 'Footer'.

    const [activeTab, setActiveTab] = useState(0);
    const [tabs, setTabs] = useState([])
    let [programs, setprograms] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const getPrograms = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/programs`);
                let data = response.data.data;
                setprograms(data)
                setLoading(false)
                let tabs = [];
                for (let i = 0; i < data.length; i++) {
                    tabs.push({
                        name: data[i].categoryName,
                        id: data[i].categoryId
                    })
                }
                setTabs(tabs)
            } catch (error) {
                console.error('Error retrieving data:', error);
                throw new Error('Could not get data');
                setLoading(false)
            }
        };
        getPrograms();

    }, []);
    
    
    return (
        <section className='home-message-section home-programs-section has-orbits'>
            <div className="overlay">
                <div className="circul1">
                    <div className="mini-circul1"></div>
                    <div className="circul2">
                        <div className="mini-circul2"></div>
                        <div className="circul3">
                            <div className="mini-circul3"></div>
                            <div className="circul4">
                                <div className="mini-circul4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                loading ? <Loading /> :
                    <div className="container m-auto">
                        <div className="messege-cont">
                            <div className="text-sec">
                                <div className="title">
                                    <h5>البرامج</h5>
                                    <div className="hagez"></div>
                                </div>
                                <h2>البرامج الخيرية</h2>
                            </div>
                            <div className="filter">
                                <div className="tabs-parent">
                                    <div className="tabs">
                                        <div className={`tab ${activeTab === 0 ? "activeTab" : ""}`} onClick={() => setActiveTab(0)}>
                                            <span>الكل</span>
                                        </div>
                                        {
                                            tabs.map((tab) =>
                                                <div className={`tab ${activeTab === tab.id ? "activeTab" : ""}`} onClick={() => setActiveTab(tab.id)} key={tab.id}>
                                                    <span>{tab.name}</span>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <Link href={"/programs"} className="btn-watch"><span>شهاد الكل</span><Image src={LogoutIcon} alt="logout" /></Link>
                            </div>
                            <div className="md:grid progs-grid hidden">
                                {
                                    programs.slice(0, 6).map((item) =>
                                        activeTab == item.categoryId || activeTab == 0 ?
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                                className="prog-item" key={item.id}>
                                                <div className="prog-img">
                                                    <Image src={item.thumbnail} alt="logout" width={100} height={100} />
                                                    <div className="overlay">
                                                        <span>{item.categoryName}</span>
                                                        <div className="a-cont"><Link href={"/program?id=" + item.slug} className={"arrow"}><i className="fa-solid fa-arrow-up"></i></Link></div>
                                                    </div>
                                                </div>
                                                <div className="prog-info">
                                                    <h3>{item.name}</h3>
                                                    <span>{item.title}</span>
                                                </div>
                                            </motion.div>
                                            : null
                                    )
                                }
                            </div>

                        </div>
                    </div>
            }
        </section>
    )
}
