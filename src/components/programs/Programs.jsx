'use client'
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import GreenPageTitle from '@/components/sharing/GreenPageTitle';
import Image from 'next/image';
import LogoutIcon from '/public/icons/logout.svg'
import { motion } from 'framer-motion';
import Link from 'next/link';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';

export default function Programs() { // Defining the main functional component named 'Footer'.

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
                    const { categoryName, categoryId } = data[i];
                    const exists = tabs.some(tab => tab.id === categoryId);
                    if (!exists) {
                        
                        tabs.push({
                            name: categoryName,
                            id: categoryId
                        });
                    }
                }

                setTabs(tabs);
            } catch (error) {
                console.error('Error retrieving data:', error);
                throw new Error('Could not get data');
                setLoading(false)
            }
        };
        getPrograms();

    }, []);
    
    return (
        <div className="about has-green-title">
            <GreenPageTitle firstPArt={"البرامـــج"} secondPart={"الخيــرية"} thirdPart={" !."} />
            <section className='section-with-yellow-title'>
                <div className="text">
                    <h5>أهلا بك في مؤسسة عطاء العالمية</h5>
                    <div className="hagez"></div>
                    <h2>أفضل البرامج الخيرية التي نخدمها.</h2>
                </div>

            </section>

            <section className='home-message-section home-programs-section w-full'>
                <div className="container m-auto">

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
                    </div>
                    <div className="progs-grid">
                        {
                            programs.map((item) =>
                                activeTab === item.categoryId || activeTab === 0 ?
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                        className="prog-item" key={item.id}>
                                        <div className="prog-img">
                                            <Image src={item.thumbnail} alt="logout" width={100} height={100} />
                                            <div className="overlay">
                                                <span>{item.categoryName}</span>
                                                <div className="a-cont"><Link scroll={true} href={"/program?id=" + item.slug} className={"arrow"}><i className="fa-solid fa-arrow-up"></i></Link></div>
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
            </section>
        </div>
    )
}
