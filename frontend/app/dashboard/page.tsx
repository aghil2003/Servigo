"use client";


import { useEffect, useState, useRef } from 'react';
import { Bannercontainer } from "@/components/userdashboard/Bannercontainer";
import { ServiceBookingGuideContainer } from "@/components/userdashboard/ServiceBookingGuide";
import { Footer } from '@/components/userdashboard/footer';

export default function DashboardPage() {
  const [isSticky, setIsSticky] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Detect screen size once and on resize
  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Tailwind's 'lg'
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Handle sticky scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (isLargeScreen && window.scrollY >= 540) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLargeScreen]);

  // Measure banner height only when sticky is true
  useEffect(() => {
    if (isSticky && bannerRef.current) {
      const rafId = requestAnimationFrame(() => {
        setBannerHeight(bannerRef.current!.offsetHeight);
      });

      return () => cancelAnimationFrame(rafId);
    }
  }, [isSticky]);

  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        backgroundImage: "linear-gradient(to bottom, #fdfeff 1%, #deeaf9 99%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Bannercontainer with conditional sticky for large screens */}
      <div
        ref={bannerRef}
        className={`w-full max-w-[1200px] mx-auto z-10 transition-all duration-300 ${
          isSticky ? 'fixed bottom-0 left-0 right-0' : 'relative'
        }`}
      >
        <Bannercontainer />
      </div>

      {/* Offset space only for large screens when sticky is active */}
      {isSticky && isLargeScreen && (
        <div style={{ height: `${bannerHeight}px` }} />
      )}

      <div className="relative z-20 w-full max-w-[full] mx-auto">
        <ServiceBookingGuideContainer />
        <Footer />
      </div>
    </div>
  );
}