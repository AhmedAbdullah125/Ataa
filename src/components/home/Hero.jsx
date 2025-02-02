'use client'
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import heroImg from '/public/Hero/hero.jpg'
import logoutImage from '/public/icons/logout.svg'
import Link from 'next/link';
import { AvatarCircles } from '../ui/avatar-circles';

export default function Hero() { // Defining the main functional component named 'Footer'.
    const avatars = [
        {
            imageUrl: "https://avatars.githubusercontent.com/u/16860528",
            profileUrl: "https://github.com/dillionverma",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/20110627",
            profileUrl: "https://github.com/tomonarifeehan",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/106103625",
            profileUrl: "https://github.com/BankkRoll",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/59228569",
            profileUrl: "https://github.com/safethecode",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/59442788",
            profileUrl: "https://github.com/sanjay-mali",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/89768406",
            profileUrl: "https://github.com/itsarghyadas",
        },
    ];


    return (
        <section className='Hero'>
            <Swiper
                navigation
                pagination={{ type: "bullets", clickable: true }}
                spaceBetween={24}
                slidesPerView={7.5}
                autoplay={false}
                dir='ltr'
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
                breakpoints={{
                    1400: {
                        slidesPerView: 1,
                    },
                    1100: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    100: {
                        slidesPerView: 1,
                    }
                }}
            >
                <SwiperSlide >
                    <div className="Hero-Slide rtl">
                        <Image src={heroImg} alt="Mazar" width={200} height={200} />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h3>مؤسسة وقفية عريقة بأدوات معاصرة ذات مرجعية</h3>
                                <h2>وَأَنْفَقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلانِيَةً</h2>
                                <p>عطاء العالمية ...... مؤسسة لا ربحية تعمل في مجال إدارة وتصميم البرامج المجتمعية والوقفية بهدف تمكين الأفراد والمؤسسات لتقديم أفضل الخدمات في مجالات العمل المجتمعي.</p>
                                <Link href="/about" className='watch-link'><span>شاهد البرامج الخيرية الان</span><Image src={logoutImage} alt="arrow" width={20} height={20} /></Link>
                                <div className="volun">
                                    <AvatarCircles className='imgs-row ltr' numPeople={99} avatarUrls={avatars} />
                                    <p>انضم إلى متطوعينا</p>
                                </div>
                                <div className="scroll-down-icon" onClick={() => { window.scrollTo({ top: window.innerHeight, behavior: "smooth" }); }}><div className="pointer"></div></div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="Hero-Slide rtl">
                        <Image src={heroImg} alt="Mazar" width={200} height={200} />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h3>مؤسسة وقفية عريقة بأدوات معاصرة ذات مرجعية</h3>
                                <h2>وَأَنْفَقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلانِيَةً</h2>
                                <p>عطاء العالمية ...... مؤسسة لا ربحية تعمل في مجال إدارة وتصميم البرامج المجتمعية والوقفية بهدف تمكين الأفراد والمؤسسات لتقديم أفضل الخدمات في مجالات العمل المجتمعي.</p>
                                <Link href="/about" className='watch-link'><span>شاهد البرامج الخيرية الان</span><Image src={logoutImage} alt="arrow" width={20} height={20} /></Link>
                                <div className="volun">
                                    <AvatarCircles className='imgs-row ltr' numPeople={99} avatarUrls={avatars} />
                                    <p>انضم إلى متطوعينا</p>
                                </div>
                                <div className="scroll-down-icon" onClick={() => { window.scrollTo({ top: window.innerHeight, behavior: "smooth" }); }}><div className="pointer"></div></div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="Hero-Slide rtl">
                        <Image src={heroImg} alt="Mazar" width={200} height={200} />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h3>مؤسسة وقفية عريقة بأدوات معاصرة ذات مرجعية</h3>
                                <h2>وَأَنْفَقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلانِيَةً</h2>
                                <p>عطاء العالمية ...... مؤسسة لا ربحية تعمل في مجال إدارة وتصميم البرامج المجتمعية والوقفية بهدف تمكين الأفراد والمؤسسات لتقديم أفضل الخدمات في مجالات العمل المجتمعي.</p>
                                <Link href="/about" className='watch-link'><span>شاهد البرامج الخيرية الان</span><Image src={logoutImage} alt="arrow" width={20} height={20} /></Link>
                                <div className="volun">
                                    <AvatarCircles className='imgs-row ltr' numPeople={99} avatarUrls={avatars} />
                                    <p>انضم إلى متطوعينا</p>
                                </div>
                                <div className="scroll-down-icon" onClick={() => { window.scrollTo({ top: window.innerHeight, behavior: "smooth" }); }}><div className="pointer"></div></div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section >
    )
}
