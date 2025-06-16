'use client'
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import logoutImage from '/public/icons/logout.svg'
import Link from 'next/link';
import { AvatarCircles } from '../ui/avatar-circles';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import Loading from '@/app/loading';

export default function Hero() { // Defining the main functional component named 'Footer'.
   
    let [slider, setsliders] = useState([]);
    let [loading, setLoading] = useState(true);
    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        setLoading(true)
        const getSliders = async () => {
            try {
                const productResponse = await axios.get(`${API_BASE_URL}/slider`);
                let data = productResponse.data.data;
                setsliders(data)
                setLoading(false)
                let avatars = [];
                for (let i = 0; i < data.volunteers.length; i++) {
                    avatars.push({
                        imageUrl: data.volunteers[i],
                        profileUrl: "#"
                    })
                }
                setAvatars(avatars)

            } catch (error) {
                console.error('Error retrieving data:', error);
                throw new Error('Could not get data');
                setLoading(false)
            }
        };
        getSliders();

    }, []);



    return (
        <section className='Hero ataa-custom-slider'>
            {
                loading ? <Loading /> :
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

                        {
                            slider.slider.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="Hero-Slide rtl">
                                        <Image src={item} alt="Ataa" width={200} height={200} />
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <h3>{slider.title}</h3>
                                                <h2>{slider.text}</h2>
                                                <p>{slider.description}</p>
                                                <Link scroll={true} href="/programs" className='watch-link'><span>شاهد البرامج الخيرية الان</span><Image src={logoutImage} alt="arrow" width={20} height={20} /></Link>
                                                <div className="volun">
                                                    <AvatarCircles className='imgs-row ltr' numPeople={99} avatarUrls={avatars} />
                                                    <p>انضم إلى متطوعينا</p>
                                                </div>
                                                <div className="scroll-down-icon" onClick={() => { window.scrollTo({ top: window.innerHeight, behavior: "smooth" }); }}><div className="pointer"></div></div>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
            }
        </section >
    )
}
