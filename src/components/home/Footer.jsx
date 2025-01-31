'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import logo from '../../../src/assets/images/home/logo.svg'
import Loading from '@/app/loading';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';



export default function Footer() { // Defining the main functional component named 'Footer'.

    const [loading, setLoading] = useState(true); // State for loading indicator
    const [data, setData] = useState(null);
    const [contactData, setContactData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        const headers = {
            lang: 'ar', // Change language dynamically based on state
        };
        // Fetch data from the API with Axios
        axios.get(`${API_BASE_URL}/social_media`, {
            headers: headers,
        }).then(response => {
            setData(response.data.data);  // Set the response data to state
            setLoading(false);  // Set loading to false

        })
            .catch(error => {
                setError(error);  // Handle any errors
                console.error('Error fetching data:', error);
                setLoading(false)
            });
        axios.get(`${API_BASE_URL}/contacts`, {
            headers: headers,
        }).then(response => {
            setContactData(response.data.data);  // Set the response data to state
            setLoading(false);  // Set loading to false
        })
            .catch(error => {
                setError(error);  // Handle any errors
                console.error('Error fetching data:', error);
                setLoading(false)
            });
    }, []);  // Run this effect whenever the `language` changes
    const [whatsapp, setWhatsapp] = useState("");

    useEffect(() => {
        if (contactData?.length) {
            const mobileNumber = contactData.find((item) => item.type === "mobile")?.value;
            if (mobileNumber) {
                setWhatsapp(mobileNumber);
            }
        }
    }, [contactData]); // Runs when `contactData` updates
    console.log(whatsapp);

    return (
        <footer id='footer'> {/* Main footer container with padding and background color */}
            {
                loading ? <Loading /> :
                    <>
                        <Link href={`https://wa.me/${whatsapp}?text=Good%20Morning%20Alalaa`} target="_blank" className="fixed-what">
                            <i className="fa-brands fa-whatsapp"></i>
                        </Link>
                        <div className="container m-auto" id='footer'>
                            <div className="content">
                                <div className="logo">
                                    <Image src={logo} alt="Mazar" width={200} height={200} />
                                    <p>عطاء العالمية ...... مؤسسة لا ربحية تعمل في مجال إدارة وتصميم البرامج المجتمعية والوقفية بهدف تمكين الأفراد والمؤسسات لتقديم أفضل الخدمات في مجالات العمل المجتمعي.</p>
                                </div>
                                <div className="links">
                                    <h3>الخدمات</h3>
                                    <div className="hagez"></div>
                                    <ul>
                                        <li><Link href="/">تنمية المجتمع وتطوير الخدمات</Link></li>
                                        <li><Link href="/">مساعدات فردية تلبي الاحتياج</Link></li>
                                        <li><Link href="/">دعم الجمعيات والمشاريع التنموية</Link></li>
                                        <li><Link href="/">تطوير العمل الخيري ومؤسساته</Link></li>
                                    </ul>
                                </div>
                                <div className="links">
                                    <h3>روابط سريعة</h3>
                                    <div className="hagez"></div>
                                    <ul>
                                        <li><Link href="/">الرئيسية</Link></li>
                                        <li><Link href="/about">من نحن</Link></li>
                                        <li><Link href="/">البرامج الخيرية</Link></li>
                                        <li><Link href="/contact">تواصل معنا</Link></li>
                                    </ul>
                                </div>
                                <div className="links">
                                    <h3>تواصل معنا</h3>
                                    <div className="hagez"></div>
                                    <ul>
                                        <li><Link href="https://wa.me/+966504154883" className='contact-li-cont'> <i className="fa-brands fa-whatsapp"></i> +966 50 415 4883</Link></li>
                                        <li><Link href="mailto:info@Contact.sa" className='contact-li-cont'><i className="fa-regular fa-envelope"></i> info@Contact.sa</Link></li>
                                        <li><p className='location contact-li-cont'><i className="fa-solid fa-location-dot"></i>  شارع الملك فهد ، الرياض ، المملكة العربية السعودية</p></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="lowerFooter">
                                <Link href={"#"}>الشروط والاحكام</Link>
                                <div className="social-links-global">
                                    <Link href={"#"}><i className="fa-brands fa-facebook"></i></Link>
                                    <Link href={"#"}><i className="fa-brands fa-instagram"></i></Link>
                                    <Link href={"#"}><i className="fa-brands fa-tiktok"></i></Link>
                                    <Link href={"#"}><i className="fa-brands fa-x-twitter"></i></Link>
                                    <Link href={"#"}><i className="fa-brands fa-linkedin"></i></Link>
                                </div>
                                <Link href={"#"}>الشروط والاحكام</Link>
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
