'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import emailIcon from '/public/icons/email.svg';
import phoneIcon from '/public/icons/phone.svg';
import Link from 'next/link';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
export default function Header() {
    // const [data, setData] = useState([]);
    // const [contact, setContact] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setLoading(true)
    //     const getData = async () => {
    //         try {
    //             const response = await axios.get(`${API_BASE_URL}/social-media`);
    //             const responseContact = await axios.get(`${API_BASE_URL}/contacts`);
    //             let data = response.data.data;
    //             let dataContact = responseContact.data.data;
    //             setData(data)
    //             setContact(dataContact)
    //             setLoading(false)
    //         } catch (error) {
    //             console.error('Error retrieving data:', error);
    //             throw new Error('Could not get data');
    //             setLoading(false)
    //         }
    //     };
    //     getData();
    // }, []);
    // console.log(data);
    

    return (
        <div className="uperHeader">
            <div className="container m-auto">
                <div className="uper-header-cont">
                    <div className="r-side">
                        <h3>مرحبا بكم.</h3>
                        <div className="bullet"></div>
                        <div className="email-phone-cont">
                            <Image src={emailIcon} alt="email" />
                            <p>info@datareality.sa</p>
                        </div>
                        <div className="bullet"></div>
                        <div className="email-phone-cont">
                            <Image src={phoneIcon} alt="phone" />
                            <p>+966 50 415 4883</p>
                        </div>
                    </div>
                    <div className="social-links-global">
                        <Link href={"#"}><i className="fa-brands fa-facebook"></i></Link>
                        <Link href={"#"}><i className="fa-brands fa-instagram"></i></Link>
                        <Link href={"#"}><i className="fa-brands fa-tiktok"></i></Link>
                        <Link href={"#"}><i className="fa-brands fa-x-twitter"></i></Link>
                        <Link href={"#"}><i className="fa-brands fa-linkedin"></i></Link>
                    </div>
                </div>
            </div>
        </div>

    );
}