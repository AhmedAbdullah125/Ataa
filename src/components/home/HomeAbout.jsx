
'use client'
import React from 'react'; // Importing React to use JSX syntax and create components.
import Image from 'next/image';
import logoutIcon from '/public/icons/logout.svg'
import img from '/public/about/1.jpg'
import Link from 'next/link';

export default function HomeAbout() { // Defining the main functional component named 'Footer'.

    return (
        <section className=''>
            <div className="container m-auto">
                <div className="home-about-section">
                    <div className="text-sec">
                        <div className="title">
                            <h5>من نحن</h5>
                            <div className="hagez"></div>
                        </div>
                        <h2>تطويــر واستشــارات الأوقاف بأعلـــى المعـــايير المهنية.</h2>
                        <p>مؤسسة العطاء والتنمية الوقفية مؤسسة لا ربحية تعمل في مجال إدارة وتطوير واستشارات الأوقاف ، للقائمين عليها خبرة في هذا المجال تمتد لسنوات عديدة ، تحقق خلالها ولله الحمد نجاحات متميزة في مجال تمكين الواقفين من الاستفادة القصوى من أوقافهم...</p>
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
