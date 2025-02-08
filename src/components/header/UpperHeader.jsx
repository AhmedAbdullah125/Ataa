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
                const response = await axios.get(`${API_BASE_URL}/settings`);
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
            {
                loading ? null :
                    <div className="container m-auto">
                        <div className="uper-header-cont">
                            <div className="r-side">
                                <h3>مرحبا بكم.</h3>
                                <div className="bullet"></div>
                                <Link scroll={true} href={`mailto:${data.footer.email}`} className="email-phone-cont">
                                    <Image src={emailIcon} alt="email" />
                                    <p>{data.footer.email}</p>
                                </Link>
                                <div className="bullet"></div>
                                <Link scroll={true} href={`tel:${data.footer.mobile}`} className="email-phone-cont">
                                    <Image src={phoneIcon} alt="phone" />
                                    <p>{data.footer.mobile}</p>
                                </Link>
                            </div>
                            <div className="social-links-global">
                                {
                                    loading ? null :
                                        data.socialData.map((item, index) => (
                                            <Link scroll={true} href={item.value} key={index}><i className={`fa-brands fa-${item.type}`}></i></Link>
                                        ))
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>

    );
}