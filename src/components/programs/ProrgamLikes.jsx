'use client'
import React, { useState } from 'react'; // Importing React to use JSX syntax and create components.
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProrgamLikes({data}) { // Defining the main functional component named 'Footer'.
   

    return (
        <div className="about has-green-title">
            <section className='section-with-yellow-title'>
                <div className="text">
                    <h5>أهلا بك في مؤسسة عطاء العالمية</h5>
                    <div className="hagez"></div>
                    <h2>مشاريع مشابهة</h2>
                </div>
            </section>
            <section className='home-message-section home-programs-section w-full'>
                <div className="container m-auto">
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
                                        <div className="overlay">
                                            <span>{item.category}</span>
                                            <div className="a-cont"><Link href={"/program?id=" + item.id} className={"arrow"}><i className="fa-solid fa-arrow-up"></i></Link></div>
                                        </div>
                                    </div>
                                    <div className="prog-info">
                                        <h3>مشروع</h3>
                                        <span>{item.name}</span>
                                    </div>
                                </motion.div>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
