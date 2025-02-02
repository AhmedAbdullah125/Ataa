'use client'
import React, { useState } from 'react'; // Importing React to use JSX syntax and create components.
import GreenPageTitle from '@/components/sharing/GreenPageTitle';
import Image from 'next/image';
import img1 from '/public/blogs/1.png'
import img2 from '/public/blogs/2.png'
import img3 from '/public/blogs/3.png'
import LogOutIcon from '/public/icons/logoutgreen.svg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumb from '@/components/sharing/BreadCrumb';
export default function Blog() { // Defining the main functional component named 'Footer'.
    let data = [
        { id: 1, name: "تســـويق مبــــاشر", img: img1, category: "برنامج السلال الغذائية", categId: 2 },
        { id: 2, name: "تســـويق مبــــاشر", img: img2, category: "البرامج التنموية", categId: 3 },
        { id: 3, name: "تســـويق مبــــاشر", img: img3, category: "البرامج الصحية", categId: 4 },

    ]
    return (
        <div className="single-blog">
            <div className="container  m-auto">
                <Breadcrumb
                    title={'المدونة'}           // Title of the breadcrumb
                    titleUrl={'/blogs'}       // URL for the title link (if clickable)
                    subtitle={''}            // Subtitle (if applicable, empty in this case)
                    subtitleUrl={''}         // URL for the subtitle (if applicable, empty in this case)
                />
                <div className="single-cont">
                    <div className="img-cont">
                        <Image src={img1} alt="Ataa" />
                    </div>
                    <div className="para">
                        <h2>الأوقاف الخيرية: استثمار مستدام لخدمة المجتمع</h2>
                        <p>الأوقاف الخيرية تعدّ أحد أعمدة التنمية المستدامة في المجتمعات، حيث تمثل وسيلة فعالة لاستدامة الدعم الاجتماعي والاقتصادي. من خلال إدارة الأصول الموقوفة بحكمة، تتحقق عوائد مالية تُوجه نحو تعزيز قطاعات حيوية مثل التعليم، الصحة، والإغاثة. لكن كيف يمكن للأوقاف أن تكون استثمارًا مستدامًا يخدم المجتمع بشكل فعّال؟</p>
                    </div>
                    <div className="para">
                        <h2>أهمية الأوقاف كاستثمار مستدام</h2>
                        <p>الأوقاف تعتمد على فكرة الاستثمار طويل الأجل. الأصول الموقوفة، سواء كانت عقارات، أراضي، أو أموال نقدية، تظل محفوظة بينما تُستخدم عائداتها لتنفيذ الأهداف الخيرية. بفضل العوائد المستمرة، تُعتبر الأوقاف مصدرًا ثابتًا ومستدامًا يُخفف العبء على الجهات الخيرية من الاعتماد على التبرعات الوقتية. الأوقاف الخيرية تمثل نموذجًا رائدًا للاستثمار المستدام الذي يُلبي احتياجات المجتمع على المدى الطويل. إدارتها بحكمة وشفافية يُمكنها من تحقيق أهدافها الخيرية بكفاءة عالية. على المؤسسات والأفراد إدراك أهميتها والعمل على تعزيز هذا النموذج لتحقيق تنمية مستدامة تخدم الأجيال القادمة.</p>
                    </div>
                </div>
                <section className='section-with-yellow-title'>
                    <div className="text">
                        <h5>المدونة</h5>
                        <div className="hagez"></div>
                        <h2>مقالات مشابهة</h2>
                    </div>
                    <div className="progs-grid grid">
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
                                        <Link href={`/blog?id=${item.categId}`}><span>قراءة المزيد </span><Image src={LogOutIcon} alt="logout" /></Link>
                                    </div>
                                </motion.div>
                            )
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}
