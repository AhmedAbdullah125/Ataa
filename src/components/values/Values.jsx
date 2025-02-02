'use client'
import React from 'react'; // Importing React to use JSX syntax and create components.
import GreenPageTitle from '@/components/sharing/GreenPageTitle';
import Image from 'next/image';
import Marquee from '../ui/marquee';
import { cn } from '@/lib/utils';
import img1 from '/public/countries/1.png'
import logoutIcon from '/public/icons/logout.svg'
import img2 from '/public/countries/2.png'
import img3 from '/public/countries/3.png'
import img4 from '/public/countries/4.png'
import img5 from '/public/countries/5.png'
import img6 from '/public/countries/6.png'
import img7 from '/public/countries/7.png'
import Link from 'next/link';

export default function Values() { // Defining the main functional component named 'Footer'.
    const ReviewCard = ({
        name,
    }) => {
        return (
            <div className="values-details">
                <div className="value-item">
                    <span>{name}</span>
                    <div className="hagez-vertival"></div>
                </div>
            </div>
        );
    };
    let countries = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }, { img: img5 }, { img: img6 }, { img: img7 }]
    let data = [
        { id: 1, name: "المهنية واالحترافية" },
        { id: 2, name: "الضوابط الشرعية" },
        { id: 3, name: "المساهمة في التنمية" },
        { id: 4, name: "االلتزام والمصداقية" },
        { id: 5, name: "التعاون في المجتمع" },
        { id: 6, name: "التفاعل مع العملاء" },
    ]
    return (
        <div className="about has-green-title">
            <GreenPageTitle firstPArt={"القـ"} secondPart={"ـيــــ"} thirdPart={"ـم !."} />
            <section className='section-with-yellow-title'>
                <div className="text">
                    <h5>أهلا بك في مؤسسة عطاء العالمية</h5>
                    <div className="hagez"></div>
                    <h2>تمكيـــن العمل الخيــري وتحقيــق الأثـــر المجتمعــي.</h2>
                </div>

            </section>
            <div className="marq" style={{ direction: 'ltr' }}>
                <div className="relative flex  w-full flex-col items-center md:gap-10 gap-4  justify-center overflow-hidden  ">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {data.map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </Marquee>
                </div>
            </div>
            <Link href={'/about'} className='greenTitled-link'><span>شاهد البرامج الخيرية الان</span><Image src={logoutIcon} alt="arrow" /></Link>

        </div>
    )
}
