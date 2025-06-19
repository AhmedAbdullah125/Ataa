'use client'
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import Image from 'next/image';
import LogOutIcon from '/public/icons/logoutgreen.svg';
import { motion } from 'framer-motion';
import Breadcrumb from '@/components/sharing/BreadCrumb';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import Loading from '@/app/loading';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { API_BASE_URL } from '@/lib/apiConfig';
export default function Blog() { // Defining the main functional component named 'Footer'.

    const searchParams = useSearchParams()
    const [pathId, setPathId] = useState(searchParams.get('id'))
    let [blog, setBlog] = useState([]);
    let [blogs, setBlogs] = useState([]);
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathId]);
    useEffect(() => {
        setLoading(true)
        const getProgram = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/blog/${pathId}`);
                const responseBlogs = await axios.get(`${API_BASE_URL}/blogs`);
                let data = response.data.data;
                let blogs = responseBlogs.data.data;
                setBlog(data)
                setBlogs(blogs)
                setLoading(false)
            } catch (error) {
                console.error('Error retrieving data:', error);
                throw new Error('Could not get data');
                setLoading(false)
            }
        };
        getProgram();

    }, [pathId]);

    return (
        <div className="single-blog">
            {
                loading ? <Loading /> :
                    <div className="container  m-auto">
                        <Breadcrumb
                            title={'المدونة'}           // Title of the breadcrumb
                            titleUrl={'/blogs'}       // URL for the title link (if clickable)
                            subtitle={blog.name}            // Subtitle (if applicable, empty in this case)
                            subtitleUrl={''}         // URL for the subtitle (if applicable, empty in this case)
                        />
                        <div className="single-cont">

                            <Swiper
                                // navigation
                                pagination={{ type: "bullets", clickable: true }}
                                spaceBetween={0}
                                slidesPerView={1}
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
                                    blog.images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="img-cont">
                                                <Image src={img} alt="Ataa" width={1000} height={1000} />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>

                            {
                                blog.blogItems.map((item, index) =>
                                    <div className="para" key={index}>
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                )
                            }

                        </div>
                        <section className='section-with-yellow-title'>
                            <div className="text">
                                <h5>المدونة</h5>
                                <div className="hagez"></div>
                                <h2>مقالات مشابهة</h2>
                            </div>
                            <div className="progs-grid grid">
                                {
                                    blogs.map((item, index) =>

                                        item.id != blog.id ?
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                                className="prog-item" key={index}>
                                                <div className="prog-img">
                                                    <Image src={item.image} alt={item.metaTitle} width={100} height={100} />

                                                </div>
                                                <div className="blog-details">
                                                    <div className="date-read">
                                                        <span>{item.createdAt}</span><div className="bullet"></div><span>{item.timeReading} دقائق قراءة</span><div className="bullet"></div><span>{item.view || 0}<i className="fa-solid fa-eye"></i></span>

                                                    </div>
                                                    <h2>{item.name}</h2>
                                                    <p>{item.description}</p>
                                                    <div className='read-link' scroll={true} href={`/blog?id=${item.slug}`} onClick={() => {
                                                        window.scrollTo(0, 0);
                                                        setPathId(item.slug)
                                                    }} ><span>قراءة المزيد </span><Image src={LogOutIcon} alt="logout" /></div>
                                                </div>
                                            </motion.div>
                                            : null
                                    )
                                }
                            </div>
                        </section>
                    </div>
            }
        </div>
    )
}
