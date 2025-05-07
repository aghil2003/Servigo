'use client';

import { useEffect, useState, useRef } from 'react';
import { Bannercontainer } from "@/components/userdashboard/Bannercontainer";
import { ServiceBookingGuideContainer } from "@/components/userdashboard/ServiceBookingGuide";

export default function DashboardPage() {
  const [isSticky, setIsSticky] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set the banner height when the component mounts
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }

    const handleScroll = () => {
      // Make the banner sticky after scrolling past 540px
      if (window.scrollY >= 540) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-zircon-gradient">
      {/* Bannercontainer which becomes sticky after scrolling past 540px */}
      <div
        ref={bannerRef}
        className={`w-full z-10 transition-all duration-300 ${isSticky ? "fixed bottom-0 left-0" : "relative"}`}
      >
        <Bannercontainer />
      </div>

      {/* ServiceBookingGuideContainer with dynamic margin-top */}
      <div
        className="relative z-20"
        style={{ marginTop: `${bannerHeight}px` }} // Dynamically set margin-top to the height of the banner
      >
        <ServiceBookingGuideContainer />
      </div>
    </div>
  );
}



