'use client'
import Image from 'next/image';
import Marquee from '../ui/marquee';
import { cn } from '@/lib/utils';
import img1 from '/public/countries/1.png'
import img2 from '/public/countries/2.png'
import img3 from '/public/countries/3.png'
import img4 from '/public/countries/4.png'
import img5 from '/public/countries/5.png'
import img6 from '/public/countries/6.png'
import img7 from '/public/countries/7.png'


export default function Countries() { // Defining the main functional component named 'Footer'.

    const ReviewCard = ({
        img,
    }) => {
        return (
            <figure className={cn()} >
                <div className="part-cont" >
                    <Image src={img} alt="Mazar" width={200} height={200} />
                </div>
            </figure>
        );
    };
    let countries = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }, { img: img5 }, { img: img6 }, { img: img7 }]
    return (
        <section className='countries-section section-with-yellow-title'>
            <div className="text">
                <h5>دول التنفيذ</h5>
                <div className="hagez"></div>
                <h2>الدول التي تعاملنا معهم.</h2>
            </div>
            <div className="marq" style={{ direction: 'ltr' }}>
                <div className="relative flex  w-full flex-col items-center gap-4 justify-center overflow-hidden  ">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {countries.map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    )
}
