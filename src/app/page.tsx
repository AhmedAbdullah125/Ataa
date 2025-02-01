import React from 'react';
import Hero from '@/components/home/Hero';
import HomeAbout from '@/components/home/HomeAbout';
import HomeVision from '@/components/home/HomeVision';
import HomeValues from '@/components/home/HomeValues';
import HomeMessage from '@/components/home/HomeMessage';
import HomePrograms from '@/components/home/HomePrograms';
export default function Home() {
  
  return (
    <main className='flex flex-col gap-36'>
      <Hero/>
      <HomeAbout/>
      <HomeVision/>
      <HomeMessage/>
      <HomeValues/>
      <HomePrograms />
    </main>
  );
}
