'use client'
import React from 'react'; // Importing React to use JSX syntax and create components.
import GreenPageTitle from '@/components/sharing/GreenPageTitle';
import Link from 'next/link';
import Image from 'next/image';
import logoutIcon from '/public/icons/logout.svg'
import img1 from '/public/about/4.svg'
import img2 from '/public/about/5.svg'
import img3 from '/public/about/6.svg'
import img4 from '/public/about/7.svg'
import img6 from '/public/about/8.svg'

export default function Message() { // Defining the main functional component named 'Footer'.
    let data = [
        { id: 1, title: 'تنمية المجتمع وتطوير الخدمات', img: img1, rate: 4.2, description: "الإسهام في تحقيق أهداف المجتمع التنموية في المجالات الحيوية و تقديم الخدمات الاجتماعية وتطويرها..." },
        { id: 2, title: 'مساعدات فردية تلبي الاحتياج', img: img2, rate: 5.0, description: "تعاون المجتمع العقاري بمنصبهم وتطويرهم وتقديم الخدمات الاجتماعية وتطويرها..." },
        { id: 3, title: 'تطوير الخدمات التي تدربها المجتمع', img: img3, rate: 4.4, description: "تقديم الخدمات الاجتماعية وتطويرها..." },
        { id: 4, title: 'تطوير الخدمات التي تدربها المجتمع', img: img4, rate: 4.9, description: "تقديم الخدمات الاجتماعية وتطويرها..." },
    ]

    return (
        <div className="about has-green-title">
            <GreenPageTitle firstPArt={"الر"} secondPart={"ســــــا"} thirdPart={"لة!."} />
            <section className='section-with-yellow-title'>
                <div className="text">
                    <h5>أهلا بك في مؤسسة عطاء العالمية</h5>
                    <div className="hagez"></div>
                    <h2>خدمات اجتماعية متطورة تلبي احتياجات الأفراد والمجتمع</h2>
                </div>

            </section>
            <div className="container m-auto">
                <div className="grid-sec">
                    {
                        data.map((item) =>
                            <div className="item" key={item.id}>
                                <Image src={item.img} alt="logout" width={100} height={100} />
                                <div className="h3-cont">
                                    <Image src={img6} alt="logout" />
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="hagez"></div>
                                <p>{item.description}</p>
                                <div className="rate">
                                    <i className="fa-solid fa-star"></i> <span className='rate-value'>{item.rate}</span><span className='rate-votes'>(122)</span>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
            <Link scroll={true} href={'/programs'} className='greenTitled-link'><span>شاهد البرامج الخيرية الان</span><Image src={logoutIcon} alt="arrow" /></Link>
        </div>
    )
}
