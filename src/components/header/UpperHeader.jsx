'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import emailIcon from '/public/icons/email.svg';
import phoneIcon from '/public/icons/phone.svg';
import Link from 'next/link';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
export default function Header() {
    const [data, setData] = useState([]);
    const [contact, setContact] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/social-media`);
                // const responseContact = await axios.get(`${API_BASE_URL}/contacts`);
                let data = response.data.data;
                // let dataContact = responseContact.data.data;
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
        <div className="uperHeader">
            <div className="container m-auto">
                <div className="uper-header-cont">
                    <div className="r-side">
                        <h3>مرحبا بكم.</h3>
                        <div className="bullet"></div>
                        <Link href="mailto:info@datareality.sa" className="email-phone-cont">
                            <Image src={emailIcon} alt="email" />
                            <p>info@datareality.sa</p>
                        </Link>
                        <div className="bullet"></div>
                        <Link href="tel:+966504154883" className="email-phone-cont">
                            <Image src={phoneIcon} alt="phone" />
                            <p>+966 50 415 4883</p>
                        </Link>
                    </div>
                    <div className="social-links-global">
                        {
                            loading ? null :
                                data.map((item , index) => (
                                    <Link href={item.value} key={index}><i className={`fa-brands fa-${item.type}`}></i></Link>
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}