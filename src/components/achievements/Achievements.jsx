'use client'
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import GreenPageTitle from '@/components/sharing/GreenPageTitle';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import img1 from '/public/blogs/1.png'
import img2 from '/public/blogs/2.png'
import img3 from '/public/blogs/3.png'

export default function Achievements() { // Defining the main functional component named 'Footer'.

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

    const achievements = [
        { id: 1, title: "إعمار بيوت الله", categoryName: "البرامج التنموية", categoryId: 1, image: img1 },
        { id: 2, title: "بيوت الله", categoryName: "اعمال", categoryId: 1, image: img2 },
        { id: 3, title: "بيوت الله", categoryName: "البرامج التنموية", categoryId: 1, image: img3 },
    ]

    return (
        <div className="about has-green-title">
            <GreenPageTitle firstPArt={"إنجـــــ"} secondPart={"ــــاتنا "} thirdPart={" !."} />
            <section className='section-with-yellow-title'>
                <div className="text">
                    <h5>أهلا بك في مؤسسة عطاء العالمية</h5>
                    <div className="hagez"></div>
                    <h2>شرفنا بانجاز هذه المشاريع والانجـــازات</h2>
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
                            achievements.map((item) =>
                                activeTab === item.categoryId || activeTab === 0 ?
                                    <Link href={`/achievement?id=${item.id}`} key={item.id}>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                                            className="prog-item"
                                        >
                                            <div className="prog-img">
                                                <Image src={item.image} alt="logout" width={100} height={100} />
                                                <div className="overlay"></div>
                                            </div>
                                            <div className="prog-info w-full px-4">
                                                <div className="flex items-center justify-between w-full">
                                                    <span>{item.title}</span>
                                                    <h3>{item.categoryName}</h3>
                                                </div>
                                                <p>قمنا بفضل الله بانجاز هذه المشاريع والانجـــازات متوكلين علي الله والحمد لله علي اتمامه علينا النعمه واسباغه الفضل ومنحه الاخلاص</p>
                                            </div>
                                        </motion.div>
                                    </Link>
                                    : null
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
