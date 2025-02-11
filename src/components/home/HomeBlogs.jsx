'use client'
import Image from 'next/image';

import img1 from '/public/blogs/1.png'
import img2 from '/public/blogs/2.png'
import img3 from '/public/blogs/3.png'
import { motion } from 'framer-motion';
import LogOutIcon from '/public/icons/logoutgreen.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';


export default function HomeBlogs() { // Defining the main functional component named 'Footer'.
    let data = [
        { id: 1, name: "تســـويق مبــــاشر", img: img1, category: "برنامج السلال الغذائية", categId: 2 },
        { id: 2, name: "تســـويق مبــــاشر", img: img2, category: "البرامج التنموية", categId: 3 },
        { id: 3, name: "تســـويق مبــــاشر", img: img3, category: "البرامج الصحية", categId: 4 },
        
    ]
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
        <div className="container m-auto">
            <section className='section-with-yellow-title'>
                <div className="text">
                    <h5>المدونة</h5>
                    <div className="hagez"></div>
                    <h2>احدث التطورات في مجال الأوقاف</h2>
                </div>
                <div className="progs-grid">
                    {
                        blogs.slice(0, 6).map((item) =>

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
                                        <span>{item.createdAt}</span><div className="bullet"></div><span>{item.timeReading} دقائق قراءة</span><div className="bullet"></div><span>{item.view|| 0}<i className="fa-solid fa-eye"></i></span>

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
    )
}
