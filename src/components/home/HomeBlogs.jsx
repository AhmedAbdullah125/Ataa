'use client'
import Image from 'next/image';

import img1 from '/public/blogs/1.png'
import img2 from '/public/blogs/2.png'
import img3 from '/public/blogs/3.png'
import { motion } from 'framer-motion';
import LogOutIcon from '/public/icons/logoutgreen.svg';
import Link from 'next/link';


export default function HomeBlogs() { // Defining the main functional component named 'Footer'.
    let data = [
        { id: 1, name: "تســـويق مبــــاشر", img: img1, category: "برنامج السلال الغذائية", categId: 2 },
        { id: 2, name: "تســـويق مبــــاشر", img: img2, category: "البرامج التنموية", categId: 3 },
        { id: 3, name: "تســـويق مبــــاشر", img: img3, category: "البرامج الصحية", categId: 4 },
        
    ]
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
                        data.map((item) =>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                className="prog-item" key={item.id}>
                                <div className="prog-img">
                                    <Image src={item.img} alt="logout" />

                                </div>
                                <div className="blog-details">
                                    <div className="date-read">
                                        <span>21 نوفمبر 2024</span><div className="bullet"></div><span>4 دقائق قراءة</span><div className="bullet"></div><span>510<i className="fa-solid fa-eye"></i></span>

                                    </div>
                                    <h2> الأوقاف الخيرية: استثمار مستدام لخدمة المجتمع.</h2>
                                    <p>الأوقاف الخيرية تمثل وسيلة لضمان استدامة الدعم الاجتماعي والاقتصادي عبر أصول تُدار بحكمة، تُوجه عائداتها لتعزيز التعليم، الصحة، والإغاثة...</p>
                                    <Link href={`/blog/${item.categId}`}><span>قراءة المزيد </span><Image src={LogOutIcon} alt="logout" /></Link>
                                </div>
                            </motion.div>
                        )
                    }
                </div>
            </section>
        </div>
    )
}
