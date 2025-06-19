'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import searchIcon from '/public/icons/search.svg';
import logoutIcon from '/public/icons/logout.svg';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import Loading from '@/app/loading';
import { motion } from 'framer-motion'
import { toast } from 'sonner';
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
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);

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
      }
    };
    getData();
  }, []);

  function handleToggleSerch() {
    let searchInput = document.getElementById('search');
    searchInput.classList.toggle('hidden')
  }
  const sendSearchRequest = async () => {
    let iputtValue = document.getElementById('search-input').value;
    if (iputtValue) {
      try {
        const response = await axios.get(`${API_BASE_URL}/programs/search?search=${iputtValue}`);
        let data = response.data.data;
        setSearchData(data)
        if (data.length === 0) {
          toast.error('لا يوجد بيانات للبحث')
        }
      } catch (error) {
        console.error('Error retrieving data:', error);
        throw new Error('Could not get data');
      }
    }
    else {
      document.getElementById('search-input').style.border = '1px solid red';
    }
  };
  return (
    <>
      {
        loading ? <Loading /> :
          <header className={`header ${isFixed ? 'fixed-header' : ''} `}>
            <div className="X-overlay hidden" onClick={handleClose}></div>
            <div className="container m-auto flex items-center gap-2 justify-between relative  bg-white">
              <Link scroll={true} href="/"> <Image src={data.footer.logo} alt="logo" className="logo-img" width={100} height={100} /></Link>

              <div className="links">
                <Link scroll={true} href="/" className={pathname === '/' || pathname === '' ? 'active' : ''}>الرئيسية</Link>
                {data.footer.isAbout ? <Link scroll={true} href="/about" className={pathname === '/about' ? 'active' : ''}>من نحــن!</Link> : null}
                {data.footer.isVision ? <Link scroll={true} href="/vision" className={pathname === '/vision' ? 'active' : ''}>الرؤية</Link> : null}
                {data.footer.isMessage ? <Link scroll={true} href="/message" className={pathname === '/message' ? 'active' : ''} >الرسالة</Link> : null}
                {data.footer.isValue ? <Link scroll={true} href="/values" className={pathname === '/values' ? 'active' : ''} >القيم</Link> : null}
                {data.footer.isProgram ? <Link scroll={true} href="/programs" className={pathname === '/programs' ? 'active' : ''}>البرامج الخيرية</Link> : null}
                {data.footer.isBlog ? <Link scroll={true} href="/blogs" className={pathname === '/blogs' ? 'active' : ''} >المدونة</Link> : null}
                <Link scroll={true} href="/achievements" className={pathname === '/achievements' ? 'active' : ''} >أنجازاتنا</Link> 
              </div>
              <div className="access">
                {
                  pathname === '/programs' ?
                    <div scroll={true} href="/login" className='book-link-yellow'><Image src={searchIcon} alt="search" onClick={handleToggleSerch} /></div>
                    : null
                }
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
                  {data.footer.isAbout?<Link scroll={true} href="/about" onClick={handleClose}>من نحــن!</Link>:null}
                  {data.footer.isVision?<Link scroll={true} href="/vision" onClick={handleClose}>الرؤية</Link>:null}
                  {data.footer.isMessage?<Link scroll={true} href="/message" onClick={handleClose} >الرسالة</Link>:null}
                  {data.footer.isValue?<Link scroll={true} href="/values" onClick={handleClose} >القيم</Link>:null}
                  {data.footer.isProgram?<Link scroll={true} href="/programs" onClick={handleClose}>البرامج الخيرية</Link>:null}
                  {data.footer.isBlog?<Link scroll={true} href="/blogs" onClick={handleClose} >المدونة</Link>:null}
                  <Link scroll={true} href="/achievements" onClick={handleClose} >أنجازاتنا</Link>
                </div>
              </div>
            </div>
            {
              pathname === '/programs' ?
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    bounce: 0.2,
                    duration: .2,
                  }}
                  // viewport={{ once: true }}
                  className="container input-container hidden" id='search'>
                  <div className="search-inp-cont">
                    <div className="relative">
                      <input type="text" placeholder='ابحث هنا' id='search-input' onKeyDown={(e) => { if (e.key === 'Enter') { sendSearchRequest() } }} />
                      <button className='search-icon' onClick={sendSearchRequest}>
                        <Image src={searchIcon} alt="search" />
                      </button>
                    </div>

                  </div>
                  {
                    searchData.length > 0 ?
                      <div className="search-result">
                        {
                          searchData.map((item, index) =>
                            <Link href={`/program?id=${item.slug}`} className="single-res" key={index}>
                              <div className="r-side">
                                <h2>{item.main_title}</h2>
                                <h3>{item.name}</h3>
                              </div>
                              <div className="l-side">
                                <div className="img-cont">
                                  {/* <Image src={item.thumbnail} width={100} height={100}></Image> */}
                                </div>
                              </div>
                            </Link>
                          )
                        }
                      </div>
                      : null
                  }
                </motion.div> : null
            }
          </header >
      }
    </>
  );
}