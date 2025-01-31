'use client';
import React from 'react';
import Image from 'next/image';
import emailIcon from '/public/icons/email.svg';
import phoneIcon from '/public/icons/phone.svg';
import Link from 'next/link';
export default function Header() {


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