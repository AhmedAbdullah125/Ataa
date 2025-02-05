import React from 'react';
import Hero from '@/components/home/Hero';
import HomeAbout from '@/components/home/HomeAbout';
import HomeVision from '@/components/home/HomeVision';
import HomeValues from '@/components/home/HomeValues';
import HomeMessage from '@/components/home/HomeMessage';
import HomePrograms from '@/components/home/HomePrograms';
import HomeBlogs from '@/components/home/HomeBlogs';
export default function Home() {
  
  return (
    <main className='flex flex-col md:gap-36 gap-14'>
      <Hero/>
      <HomeAbout/>
      <HomeVision/>
      <HomeMessage/>
      <HomeValues/>
      <HomePrograms />
      <HomeBlogs />
    </main>
  );
}
