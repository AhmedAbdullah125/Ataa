'use client';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/home/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import searchIcon from '/public/icons/search.svg';
import logoutIcon from '/public/icons/logout.svg';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import Loading from '@/app/loading';

export default function Header() {
  function handleClose() {
    document.querySelector('html').style.overflowY = 'unset';
    document.querySelector('.side-menu').classList.toggle('side-menu-active')
    document.querySelector('.menu-bars').classList.toggle('hidden')
    document.querySelector('.menu-bars-X').classList.toggle('hidden')
    document.querySelector('.X-overlay').classList.toggle('hidden')
  }
  const pathname = usePathname();

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsFixed(true);
        document.body.style.paddingTop = "104px";
      } else {
        setIsFixed(false);
        document.body.style.paddingTop = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [data, setData] = useState([]);
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/settings`);
        let data = response.data.data;
        setData(data)
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
    <>
      {
        loading ? <Loading /> :
          <header className={`header ${isFixed ? 'fixed-header' : ''} `}>
            <div className="X-overlay hidden" onClick={handleClose}></div>
            <div className="container m-auto flex items-center gap-2 justify-between">
              <Link scroll={true} href="/"> <Image src={data.footer.logo} alt="logo" className="logo-img"  width={100} height={100}/></Link>

              <div className="links">
                <Link scroll={true} href="/" className={pathname === '/' || pathname === '' ? 'active' : ''}>الرئيسية</Link>
                <Link scroll={true} href="/about" className={pathname === '/about' ? 'active' : ''}>من نحــن!</Link>
                <Link scroll={true} href="/vision" className={pathname === '/vision' ? 'active' : ''}>الرؤية</Link>
                <Link scroll={true} href="/message" className={pathname === '/message' ? 'active' : ''} >الرسالة</Link>
                <Link scroll={true} href="/values" className={pathname === '/values' ? 'active' : ''} >القيم</Link>
                <Link scroll={true} href="/programs" className={pathname === '/programs' ? 'active' : ''}>البرامج الخيرية</Link>
                <Link scroll={true} href="/blogs" className={pathname === '/blogs' ? 'active' : ''} >المدونة</Link>
              </div>
              <div className="access">
                <Link scroll={true} href="/login" className='book-link-yellow'><Image src={searchIcon} alt="search" /></Link>
                <Link scroll={true} href="/contact" className='book-link'><span>اتصل بنا</span><Image src={logoutIcon} alt="search" /></Link>
              </div>
              <Menu className='menu-bars' onClick={() => {
                document.querySelector('html').style.overflowY = 'hidden';
                document.querySelector('.side-menu').classList.toggle('side-menu-active')
                document.querySelector('.menu-bars').classList.toggle('hidden')
                document.querySelector('.menu-bars-X').classList.toggle('hidden')
                document.querySelector('.X-overlay').classList.toggle('hidden')
              }} />
              <X className='menu-bars-X hidden' onClick={handleClose} />
              <div className="side-menu" onClick={handleClose}>
                <div className="links" onClick={handleClose} >
                  <Link scroll={true} href="/" onClick={handleClose}>الرئيسية</Link>
                  <Link scroll={true} href="/about" onClick={handleClose}>من نحــن!</Link>
                  <Link scroll={true} href="/vision" onClick={handleClose}>الرؤية</Link>
                  <Link scroll={true} href="/message" onClick={handleClose} >الرسالة</Link>
                  <Link scroll={true} href="/values" onClick={handleClose} >القيم</Link>
                  <Link scroll={true} href="/programs" onClick={handleClose}>البرامج الخيرية</Link>
                  <Link scroll={true} href="/blogs" onClick={handleClose} >المدونة</Link>
                </div>
              </div>
            </div>
          </header>
      }
    </>

  );
}