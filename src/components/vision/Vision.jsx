'use client'
import React from 'react'; // Importing React to use JSX syntax and create components.
import GreenPageTitle from '@/components/sharing/GreenPageTitle';
import Link from 'next/link';
import Image from 'next/image';
import logoutIcon from '/public/icons/logout.svg'

export default function Vision() { // Defining the main functional component named 'Footer'.

    return (
        <div className="about has-green-title">
            <GreenPageTitle firstPArt={"الر"} secondPart={"ؤ"} thirdPart={"يــــة !."} />
            <section className='section-with-yellow-title'>
                <div className="text">
                    <h5>أهلا بك في مؤسسة عطاء العالمية</h5>
                    <div className="hagez"></div>
                    <h2>مرجعيــة وقـفية مبنيــة على أسس شرعية ومهنيـــة.</h2>
                </div>
                <p className='greenTitled-p'>
                    مؤسسة وقفية عريقة بأدوات معاصرة ذات مرجعية في كل ما يتعلق باللأوقاف مبنية على أسس شرعية وأصول مهنية مؤسسية...
                </p>
                <Link href={'/about'} className='greenTitled-link'><span>شاهد البرامج الخيرية الان</span><Image src={logoutIcon} alt="arrow" /></Link>

            </section>
        </div>
    )
}
