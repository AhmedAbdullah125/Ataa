'use client';
import React, { useState } from 'react';
import { Autoplay, Navigation, Pagination, Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function ImageSwiper({ data }) {
    const [bigSwiper, setBigSwiper] = useState(null);
    const [smallSwiper, setSmallSwiper] = useState(null);

    return (
        <div className="img-swipers" style={{ direction: 'ltr', display: 'flex', gap: '20px' }}>
            {/* Small Swiper (Thumbnails) */}
            <div className="small-swiper">
                <Swiper
                    onSwiper={setSmallSwiper} // Store small swiper instance
                    spaceBetween={10}
                    direction="vertical"
                    slidesPerView={3}
                    autoplay={false}
                    loop={true}
                    modules={[Autoplay, Navigation, Pagination, Controller]}
                    controller={{ control: bigSwiper }} // Link to big swiper
                >
                    {data.images.map((item, index) => (
                        <SwiperSlide key={index} onClick={() => bigSwiper.slideToLoop(index)}>
                            {/* onClick triggers the big swiper to slide */}
                            <div className="img-cont">
                                <Image src={item} alt={`thumbnail-${index}`} width={100} height={100} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Big Swiper (Main Display) */}
            <div className="big-swiper">
                <Swiper
                    onSwiper={setBigSwiper} // Store big swiper instance
                    navigation
                    spaceBetween={24}
                    slidesPerView={1}
                    autoplay={false}
                    loop={true}
                    modules={[Autoplay, Navigation, Pagination, Controller]}
                    controller={{ control: smallSwiper }} // Link to small swiper
                >
                    {data.images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="img-cont">
                                <Image src={item} alt={`image-${index}`} width={600} height={400} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
