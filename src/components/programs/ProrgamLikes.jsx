'use client'
import React, { useState } from 'react'; // Importing React to use JSX syntax and create components.
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProrgamLikes({ data, categoryId, programId }) { // Defining the main functional component named 'Footer'.
    console.log(programId);

    return (
        <div className="about has-green-title">
            {
                data.length > 1 ?
                    <>
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
                                            item.categoryId == categoryId && item.id != programId ?
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                                    className="prog-item" key={item.id}>
                                                    <div className="prog-img">
                                                        <Image src={item.thumbnail} alt="logout" width={100} height={100} />
                                                        <div className="overlay">
                                                            <span>{item.categoryName}</span>
                                                            <div className="a-cont"><Link scroll={true} href={"/program?id=" + item.slug} className={"arrow"}><i className="fa-solid fa-arrow-up"></i></Link></div>
                                                        </div>
                                                    </div>
                                                    <div className="prog-info">
                                                        <h3>{item.name}</h3>
                                                        <span>{item.title}</span>
                                                    </div>
                                                </motion.div>
                                                : null
                                        )
                                    }
                                </div>
                            </div>
                        </section>
                    </>
                    : null
            }
        </div>
    )
}
