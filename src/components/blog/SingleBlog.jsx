'use client'
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import GreenPageTitle from '@/components/sharing/GreenPageTitle';
import Image from 'next/image';
import img1 from '/public/blogs/1.png'
import img2 from '/public/blogs/2.png'
import img3 from '/public/blogs/3.png'
import LogOutIcon from '/public/icons/logoutgreen.svg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumb from '@/components/sharing/BreadCrumb';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import Loading from '@/app/loading';
import { API_BASE_URL } from '@/lib/apiConfig';
export default function Blog() { // Defining the main functional component named 'Footer'.
    let data = [
        { id: 1, name: "تســـويق مبــــاشر", img: img1, category: "برنامج السلال الغذائية", categId: 2 },
        { id: 2, name: "تســـويق مبــــاشر", img: img2, category: "البرامج التنموية", categId: 3 },
        { id: 3, name: "تســـويق مبــــاشر", img: img3, category: "البرامج الصحية", categId: 4 },

    ]




    const searchParams = useSearchParams()
    const [pathId, setPathId] = useState(searchParams.get('id'))
    let [blog, setBlog] = useState([]);
    let [blogs, setBlogs] = useState([]);
    let [loading, setLoading] = useState(true);

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

    }, []);
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
                            <div className="img-cont">
                                <Image src={blog.image} alt="Ataa" width={1000} height={1000} />
                            </div>
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
                                    blogs.map((item) =>

                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                            className="prog-item" key={item.id}>
                                            <div className="prog-img">
                                                <Image src={item.image} alt={item.metaTitle} width={100} height={100} />

                                            </div>
                                            <div className="blog-details">
                                                <div className="date-read">
                                                    <span>21 نوفمبر 2024</span><div className="bullet"></div><span>{item.timeReading} دقائق قراءة</span><div className="bullet"></div><span>{item.view || 0}<i className="fa-solid fa-eye"></i></span>

                                                </div>
                                                <h2>{item.name}</h2>
                                                <p>{item.description}</p>
                                                <Link scroll={true} href={`/blog?id=${item.slug}`}><span>قراءة المزيد </span><Image src={LogOutIcon} alt="logout" /></Link>
                                            </div>
                                        </motion.div>
                                    )
                                }
                            </div>
                        </section>
                    </div>
            }
        </div>
    )
}
