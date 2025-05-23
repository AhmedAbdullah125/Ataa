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
import Loading from '@/app/loading';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';

export default function Blog() { // Defining the main functional component named 'Footer'.

    let [blogs, setBlogs] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const getBlogs = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/blogs`);
                let data = response.data.data;
                setBlogs(data)
                setLoading(false)

            } catch (error) {
                console.error('Error retrieving data:', error);
                throw new Error('Could not get data');
                setLoading(false)
            }
        };
        getBlogs();

    }, []);
    
    return (
        <div className="about has-green-title">
            <GreenPageTitle firstPArt={"المد"} secondPart={"و"} thirdPart={"نـــــة ."} />
            <section className='section-with-yellow-title'>
                <div className="text">
                    <h5>أهلا بك في مؤسسة عطاء العالمية</h5>
                    <div className="hagez"></div>
                    <h2>احدث التطورات في مجال الأوقاف</h2>
                </div>
            </section>
            <div className="container">
                {
                    loading ? <Loading /> :
                        <div className="progs-grid">
                            {
                                blogs.map((item , index) =>

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
                                            <Link scroll={true} href={`/blog?id=${item.slug}`}><span>قراءة المزيد </span><Image src={LogOutIcon} alt="logout" /></Link>
                                        </div>
                                    </motion.div>
                                )
                            }
                        </div>
                }
            </div>
        </div>
    )
}
