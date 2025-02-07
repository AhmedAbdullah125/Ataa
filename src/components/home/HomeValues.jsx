
'use client'
import React from 'react'; // Importing React to use JSX syntax and create components.
import Image from 'next/image';
import logoutIcon from '/public/icons/logout.svg'
import img from '/public/about/3.jpg'
import Link from 'next/link';

export default function HomeValues() { // Defining the main functional component named 'Footer'.
    let data = [
        {id:1,name:"المهنية واالحترافية"},
        {id:2,name:"الضوابط الشرعية"},
        {id:3,name:"المساهمة في التنمية"},
        {id:4,name:"االلتزام والمصداقية"},
        {id:5,name:"التعاون في المجتمع"},
        {id:6,name:"التفاعل مع العملاء"},
    ]
    return (
        <section className=''>
            <div className="container m-auto">
                <div className="home-about-section">
                    <div className="text-sec">
                        <div className="title">
                            <h5>القيم</h5>
                            <div className="hagez"></div>
                        </div>
                        <h2>تمكيـــن العمل الخيــري</h2>
                        <div className="values-details">
                            {
                                data.map((item)=>
                                    <div className="value-item" key={item.id}>
                                        <span>{item.name}</span>
                                        <div className="hagez-vertival"></div>
                                    </div>
                                )
                            }
                        </div>
                        <Link scroll={true} href={'/about'}>اقــــرأ المزيد<Image src={logoutIcon} alt="logout" /></Link>
                    </div>
                    <div className="img-sec">
                        <Image src={img} alt="logout" width={600} height={600} />
                    </div>
                </div>
            </div>
        </section>
    )
}
