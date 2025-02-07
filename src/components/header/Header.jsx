'use client';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/home/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import searchIcon from '/public/icons/search.svg';
import logoutIcon from '/public/icons/logout.svg';

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

  return (
      <header className={`header ${isFixed ? 'fixed-header' : ''} `}>
        <div className="X-overlay hidden" onClick={handleClose}></div>
        <div className="container m-auto flex items-center gap-2 justify-between">
          <Link href="/"> <Image src={logo} alt="logo" className="logo-img" /></Link>

          <div className="links">
            <Link href="/" className={pathname === '/' || pathname === '' ? 'active' : ''}>الرئيسية</Link>
            <Link href="/about" className={pathname === '/about' ? 'active' : ''}>من نحــن!</Link>
            <Link href="/vision" className={pathname === '/vision' ? 'active' : ''}>الرؤية</Link>
            <Link href="/message" className={pathname === '/message' ? 'active' : ''} >الرسالة</Link>
            <Link href="/values" className={pathname === '/values' ? 'active' : ''} >القيم</Link>
            <Link href="/programs" className={pathname === '/programs' ? 'active' : ''}>البرامج الخيرية</Link>
            <Link href="/blogs" className={pathname === '/blogs' ? 'active' : ''} >المدونة</Link>
          </div>
          <div className="access">
            <Link href="/login" className='book-link-yellow'><Image src={searchIcon} alt="search" /></Link>
            <Link href="/contact" className='book-link'><span>اتصل بنا</span><Image src={logoutIcon} alt="search" /></Link>
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
              <Link href="/" onClick={handleClose}>الرئيسية</Link>
              <Link href="/about" onClick={handleClose}>من نحــن!</Link>
              <Link href="/vision" onClick={handleClose}>الرؤية</Link>
              <Link href="/message" onClick={handleClose} >الرسالة</Link>
              <Link href="/values" onClick={handleClose} >القيم</Link>
              <Link href="/programs" onClick={handleClose}>البرامج الخيرية</Link>
              <Link href="/blogs" onClick={handleClose} >المدونة</Link>
            </div>
          </div>
        </div>
      </header>
     
  );
}