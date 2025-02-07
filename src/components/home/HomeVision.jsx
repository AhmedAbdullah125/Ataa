
'use client'
import React from 'react'; // Importing React to use JSX syntax and create components.
import Image from 'next/image';
import logoutIcon from '/public/icons/logout.svg'
import img from '/public/about/2.jpg'
import Link from 'next/link';

export default function HomeVision() { // Defining the main functional component named 'Footer'.

    return (
        <section className=''>
            <div className="container m-auto">
                <div className="home-about-section">
                    <div className="img-sec">
                        <Image src={img} alt="logout" width={600} height={600} />
                    </div>
                    <div className="text-sec">
                        <div className="title">
                            <h5>الرؤية</h5>
                            <div className="hagez"></div>
                        </div>
                        <h2>مرجعيــة وقـفية مبنيــة على أسس شرعية ومهنيـــة.</h2>
                        <p>مؤسسة وقفية عريقة بأدوات معاصرة ذات مرجعية في كل ما يتعلق باللأوقاف مبنية على أسس شرعية وأصول مهنية مؤسسية...</p>
                        <Link href={'/vision'}>اقــــرأ المزيد<Image src={logoutIcon} alt="logout" /></Link>
                    </div>

                </div>
            </div>
        </section>
    )
}
