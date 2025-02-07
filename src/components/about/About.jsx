'use client'
import React from 'react'; // Importing React to use JSX syntax and create components.
import GreenPageTitle from '@/components/sharing/GreenPageTitle';
import Link from 'next/link';
import Image from 'next/image';
import logoutIcon from '/public/icons/logout.svg'

export default function About() { // Defining the main functional component named 'Footer'.

    return (
        <div className="about has-green-title">
            <GreenPageTitle firstPArt={"من "} secondPart={"نحــن"} thirdPart={".!"} />
            <section className='section-with-yellow-title'>
                <div className="text">
                    <h5>أهلا بك في مؤسسة عطاء العالمية</h5>
                    <div className="hagez"></div>
                    <h2>من قلب الشرق الأوسط، خبرة تمتد لسنوات في خدمة الأوقاف.</h2>
                </div>
                <p className='greenTitled-p'>
                    مؤسسة العطاء والتنمية الوقفية مؤسسة ال ربحية تعمل في مجال إدارة وتطوير واستشارات الأوقاف ، للقائمين عليها خبرة في هذا المجال تمتد لسنوات عديدة ، تحقق خلالها وهلل الحمد نجاحات متميزة في مجال تمكين الواقفين من الاستفادة القصوى من أوقافهم وتوجيه ريعها فيما خصص من أجله من خلال آليات احترافية للإدارة والتطوير.
                </p>
                <Link href={'/programs'} className='greenTitled-link'><span>شاهد البرامج الخيرية الان</span><Image src={logoutIcon} alt="arrow" /></Link>

            </section>
        </div>
    )
}
