
'use client'
import React, { useState } from 'react'; // Importing React to use JSX syntax and create components.
import Image from 'next/image';
import img1 from '/public/about/4.svg'
import img2 from '/public/about/5.svg'
import img3 from '/public/about/6.svg'
import img4 from '/public/about/7.svg'
import img6 from '/public/about/8.svg'
import LogoutIcon from '/public/icons/logout.svg';
import Link from 'next/link';

export default function HomePrograms() { // Defining the main functional component named 'Footer'.
    let data = [
        { id: 1, title: 'تنمية المجتمع وتطوير الخدمات', img: img1, rate: 4.2, description: "الإسهام في تحقيق أهداف المجتمع التنموية في المجالات الحيوية و تقديم الخدمات الاجتماعية وتطويرها..." },
        { id: 2, title: 'مساعدات فردية تلبي الاحتياج', img: img2, rate: 5.0, description: "تعاون المجتمع العقاري بمنصبهم وتطويرهم وتقديم الخدمات الاجتماعية وتطويرها..." },
        { id: 3, title: 'تطوير الخدمات التي تدربها المجتمع', img: img3, rate: 4.4, description: "تقديم الخدمات الاجتماعية وتطويرها..." },
        { id: 4, title: 'تطوير الخدمات التي تدربها المجتمع', img: img4, rate: 4.9, description: "تقديم الخدمات الاجتماعية وتطويرها..." },
    ]
    const [activeTab, setActiveTab] = useState(1);
    const tabs = [
        { id: 1, name: "الكل" }, { id: 2, name: "برنامج السلال الغذائية" }, { id: 3, name: "البرامج التنموية" }, { id: 4, name: "البرامج الصحية" }, { id: 5, name: "البرامج الموسمية" }, { id: 6, name: "البرامج التعليمية" }, { id: 7, name: "البرامج الاجتماعية" }
    ]
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
                </div>
            </div>
        </section>
    )
}
