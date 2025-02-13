'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import logo from '../../../src/assets/images/home/logo.svg'
import Loading from '@/app/loading';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';



export default function Footer() { // Defining the main functional component named 'Footer'.

    const [data, setData] = useState([]);
    const [contact, setContact] = useState([]);
    const [loading, setLoading] = useState(true);
    const [whatsapp, setWhatsapp] = useState([]);

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/settings`);
                // const responseContact = await axios.get(`${API_BASE_URL}/contacts`);
                let data = response.data.data;
                for (let index = 0; index < data.socialData.length; index++) {
                    if (data.socialData[index].type == 'whatsapp') {
                        setWhatsapp(data.socialData[index].value)
                    }

                }
                setData(data)
                // setContact(dataContact)
                setLoading(false)
            } catch (error) {
                console.error('Error retrieving data:', error);
                throw new Error('Could not get data');
                setLoading(false)
            }
        };

        getData();
    }, []);

    return (
        <footer id='footer'> {/* Main footer container with padding and background color */}
            {
                loading ? <Loading /> :
                    <>
                        <Link scroll={true} href={`https://wa.me/${whatsapp}?text=Good%20Morning%20Ataa`} target="_blank" className="fixed-what">
                            <i className="fa-brands fa-whatsapp"></i>
                        </Link>
                        <div className="container m-auto" id='footer'>
                            <div className="content">
                                <div className="logo">
                                    <Image src={data.footer.logo} alt="Mazar" width={200} height={200} />
                                    <p>{data.footer.titleFooter}</p>
                                </div>
                                {data.footer.isProgram ? <div className="links">
                                    <h3>الخدمات</h3>
                                    <div className="hagez"></div>
                                    <ul>
                                        <li><Link scroll={true} href="/programs">تنمية المجتمع وتطوير الخدمات</Link></li>
                                        <li><Link scroll={true} href="/programs">مساعدات فردية تلبي الاحتياج</Link></li>
                                        <li><Link scroll={true} href="/programs">دعم الجمعيات والمشاريع التنموية</Link></li>
                                        <li><Link scroll={true} href="/programs">تطوير العمل الخيري ومؤسساته</Link></li>
                                    </ul>
                                </div> :null}
                                <div className="links">
                                    <h3>روابط سريعة</h3>
                                    <div className="hagez"></div>
                                    <ul>
                                        <li><Link scroll={true} href="/">الرئيسية</Link></li>
                                        {data.footer.isAbout ? <li><Link scroll={true} href="/about">من نحن</Link></li> :null}
                                        {data.footer.isProgram ? <li><Link scroll={true} href="/programs">البرامج الخيرية</Link></li>:null}
                                        <li><Link scroll={true} href="/contact">تواصل معنا</Link></li>
                                    </ul>
                                </div>
                                <div className="links">
                                    <h3>تواصل معنا</h3>
                                    <div className="hagez"></div>
                                    <ul>
                                        <li><Link scroll={true} href={`https://wa.me/${data.footer.mobile}`} className='contact-li-cont'> <i className="fa-brands fa-whatsapp"></i> {data.footer.mobile}</Link></li>
                                        <li><Link scroll={true} href={`mailto:${data.footer.email}`} className='contact-li-cont'><i className="fa-regular fa-envelope"></i> {data.footer.email}</Link></li>
                                        <li><p className='location contact-li-cont'><i className="fa-solid fa-location-dot"></i>  {data.footer.location}</p></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="lowerFooter">
                                <Link scroll={true} href={"/terms"}>الشروط والاحكام</Link>
                                {data.footer.isocial?<div className="social-links-global">
                                    {
                                        data.socialData.map((item, index) => (
                                            <Link scroll={true} href={item.value} key={index}><i className={`fa-brands fa-${item.type}`}></i></Link>
                                        ))
                                    }
                                </div>:null}
                                <Link scroll={true} href={"/policy"}>سياسة الخصوصية</Link>
                            </div>
                        </div>
                    </>
            }
            <div className="served">
                <i className="fa-regular fa-copyright"></i><span>جميع الحقوق محفوظة 2025 لدى مؤسسة عطاء العالمية</span>
            </div>
        </footer>
    )
}
