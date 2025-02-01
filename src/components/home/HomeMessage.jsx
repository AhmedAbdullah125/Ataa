
'use client'
import React from 'react'; // Importing React to use JSX syntax and create components.
import Image from 'next/image';
import img1 from '/public/about/4.svg'
import img2 from '/public/about/5.svg'
import img3 from '/public/about/6.svg'
import img4 from '/public/about/7.svg'
import img6 from '/public/about/8.svg'
import Link from 'next/link';

export default function HomeMessage() { // Defining the main functional component named 'Footer'.
    let data = [
        { id: 1, title: 'تنمية المجتمع وتطوير الخدمات', img: img1, rate: 4.2, description: "الإسهام في تحقيق أهداف المجتمع التنموية في المجالات الحيوية و تقديم الخدمات الاجتماعية وتطويرها..." },
        { id: 2, title: 'مساعدات فردية تلبي الاحتياج', img: img2, rate: 5.0, description: "تعاون المجتمع العقاري بمنصبهم وتطويرهم وتقديم الخدمات الاجتماعية وتطويرها..." },
        { id: 3, title: 'تطوير الخدمات التي تدربها المجتمع', img: img3, rate: 4.4, description: "تقديم الخدمات الاجتماعية وتطويرها..." },
        { id: 4, title: 'تطوير الخدمات التي تدربها المجتمع', img: img4, rate: 4.9, description: "تقديم الخدمات الاجتماعية وتطويرها..." },
    ]
    return (
        <section className='home-message-section has-orbits'>
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
                            <h5>الرسالة</h5>
                            <div className="hagez"></div>
                        </div>
                        <h2>خدمات اجتماعية متطورة تلبي احتياجات الأفراد والمجتمع</h2>
                    </div>
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
            </div>
        </section>
    )
}
