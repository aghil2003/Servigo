"use client";

import { useEffect, useState, useRef } from 'react';
import { Bannercontainer } from "@/components/userdashboard/Bannercontainer";
import { ServiceBookingGuideContainer } from "@/components/userdashboard/ServiceBookingGuide";
import { Footer } from '@/components/userdashboard/footer';
import ChatModal from "@/components/modal/chat";
import { MessageCircle } from "lucide-react";

export default function DashboardPage() {
  const [isSticky, setIsSticky] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

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
      <div
        ref={bannerRef}
        className={`w-full max-w-[1200px] mx-auto z-10 transition-all duration-300 ${
          isSticky ? 'fixed bottom-0 left-0 right-0' : 'relative'
        }`}
      >
        <Bannercontainer />
      </div>

      {isSticky && isLargeScreen && (
        <div style={{ height: `${bannerHeight}px` }} />
      )}

      <div className="relative z-20 w-full mx-auto">
        <ServiceBookingGuideContainer />
        <Footer />
      </div>

     {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
          aria-label="Open Chat"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
         <ChatModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}