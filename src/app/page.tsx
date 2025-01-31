import React from 'react';
import Hero from '@/components/home/Hero';
import HomeAbout from '@/components/home/HomeAbout';
import HomeVision from '@/components/home/HomeVision';
import HomeValues from '@/components/home/HomeValues';
export default function Home() {
  
  return (
    <main>
      <Hero/>
      <HomeAbout/>
      <HomeVision/>
      <HomeValues/>
    </main>
  );
}
