// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import { Bannercontainer } from "@/components/userdashboard/Bannercontainer";
// import { ServiceBookingGuideContainer } from "@/components/userdashboard/ServiceBookingGuide";
// import { ServiceContainer } from '@/components/userdashboard/Servicescontainer';

// export default function DashboardPage() {
//   const [isSticky, setIsSticky] = useState(false);
//   const [bannerHeight, setBannerHeight] = useState(0);
//   const bannerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Set the banner height when the component mounts
//     if (bannerRef.current) {
//       setBannerHeight(bannerRef.current.offsetHeight);
//     }

//     const handleScroll = () => {
//       // Make the banner sticky after scrolling past 540px
//       if (window.scrollY >= 540) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup event listener when the component unmounts
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="relative bg-zircon-gradient">
//       {/* Bannercontainer which becomes sticky after scrolling past 540px */}
//       <div
//   ref={bannerRef}
//   className={`w-full z-10 transition-all duration-300 ${
//     isSticky ? "fixed bottom-0 left-0" : "relative"
//   }`}
// >
//   <Bannercontainer />
// </div>

//       {/* ServiceBookingGuideContainer with dynamic margin-top */}
//       <div
//   className="relative z-20 space-y-0"
//   style={{ marginTop: `${bannerHeight}px` }}
// >
//   <ServiceBookingGuideContainer />
//   <ServiceContainer />
// </div>

//     </div>
//   );
// }



// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import { Bannercontainer } from "@/components/userdashboard/Bannercontainer";
// import { ServiceBookingGuideContainer } from "@/components/userdashboard/ServiceBookingGuide";
// import { ServiceContainer } from '@/components/userdashboard/Servicescontainer';

// export default function DashboardPage() {
//   const [isSticky, setIsSticky] = useState(false);
//   const bannerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (bannerRef.current) {
//         const offsetTop = bannerRef.current.getBoundingClientRect().top;
//         setIsSticky(window.scrollY >= offsetTop + 540); // adjust threshold if needed
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="relative bg-zircon-gradient">
//       {/* Bannercontainer that sticks to top after scroll */}
//       <div
//         ref={bannerRef}
//         className={`w-full z-10 transition-all duration-300 ${
//           isSticky ? "fixed top-0 left-0" : "relative"
//         }`}
//       >
//         <Bannercontainer />
//       </div>

//       {/* Offset space to preserve layout when banner is fixed */}
//       {isSticky && <div className="h-[540px] md:h-[600px]" />}

//       <div className="relative z-20">
//         <ServiceBookingGuideContainer />
//         <ServiceContainer />
//       </div>
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';
// import { Bannercontainer } from "@/components/userdashboard/Bannercontainer";
// import { ServiceBookingGuideContainer } from "@/components/userdashboard/ServiceBookingGuide";
// import { ServiceContainer } from '@/components/userdashboard/Servicescontainer';

// export default function DashboardPage() {
//   const [hasScrolled, setHasScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setHasScrolled(window.scrollY > 50); // Customize threshold
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="relative bg-zircon-gradient">
//       {/* Sticky banner with animation on scroll */}
//       <div
//         className={`sticky top-0 z-10 transition-all duration-300 ${
//           hasScrolled
//             ? 'bg-white/80 shadow-lg backdrop-blur-md'
//             : 'bg-transparent'
//         }`}
//       >
//         <Bannercontainer />
//       </div>

//       {/* Main content */}
//       <div className="relative z-20">
//         <ServiceBookingGuideContainer />
//         <ServiceContainer />
//       </div>
//     </div>
//   );
// }



'use client';

import { useEffect, useState, useRef } from 'react';
import { Bannercontainer } from "@/components/userdashboard/Bannercontainer";
import { ServiceBookingGuideContainer } from "@/components/userdashboard/ServiceBookingGuide";
import { ServiceContainer } from '@/components/userdashboard/Servicescontainer';
import { Footer } from '@/components/userdashboard/footer'

export default function DashboardPage() {
  const [isSticky, setIsSticky] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Tailwind's 'lg' = 1024px
    };

    updateScreenSize(); // Initial check
    window.addEventListener('resize', updateScreenSize);

    const handleScroll = () => {
      if (isLargeScreen && window.scrollY >= 540) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }

    return () => {
      window.removeEventListener('resize', updateScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLargeScreen]);

  return (
    <div className="relative min-h-screen w-full"
    style={{
      backgroundImage: "linear-gradient(to bottom, #fdfeff 1%, #deeaf9 99%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
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
        <ServiceContainer />
         <Footer/>
      </div>
    </div>
  );
}
