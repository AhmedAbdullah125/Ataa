'use client'
import React, { useState } from 'react'; // Importing React to use JSX syntax and create components.
import GreenPageTitle from '@/components/sharing/GreenPageTitle';
import Image from 'next/image';
import img1 from '/public/programs/1.png'
import img2 from '/public/programs/2.png'
import img3 from '/public/programs/3.png'
import LogoutIcon from '/public/icons/logout.svg'
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Programs() { // Defining the main functional component named 'Footer'.
    let data = [
        { id: 1, name: "تســـويق مبــــاشر", img: img1, category: "برنامج السلال الغذائية", categId: 2 },
        { id: 2, name: "تســـويق مبــــاشر", img: img2, category: "البرامج التنموية", categId: 3 },
        { id: 3, name: "تســـويق مبــــاشر", img: img3, category: "البرامج الصحية", categId: 4 },
        { id: 4, name: "تســـويق مبــــاشر", img: img1, category: "البرامج الموسمية", categId: 5 },
        { id: 5, name: "تســـويق مبــــاشر", img: img2, category: "البرامج التعليمية", categId: 6 },
        { id: 6, name: "تســـويق مبــــاشر", img: img3, category: "البرامج الاجتماعية", categId: 7 },
    ]
    const [activeTab, setActiveTab] = useState(1);
    const tabs = [
        { id: 1, name: "الكل" }, { id: 2, name: "برنامج السلال الغذائية" }, { id: 3, name: "البرامج التنموية" }, { id: 4, name: "البرامج الصحية" }, { id: 5, name: "البرامج الموسمية" }, { id: 6, name: "البرامج التعليمية" }, { id: 7, name: "البرامج الاجتماعية" }
    ]
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
                            data.map((item) =>
                                activeTab === item.categId || activeTab === 1 ?
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                        className="prog-item" key={item.id}>
                                        <div className="prog-img">
                                            <Image src={item.img} alt="logout" />
                                            <div className="overlay">
                                                <span>{item.category}</span>
                                                <div className="a-cont"><Link href={"#"}><i className="fa-solid fa-arrow-up"></i></Link></div>
                                            </div>
                                        </div>
                                        <div className="prog-info">
                                            <h3>مشروع</h3>
                                            <span>{item.name}</span>
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
