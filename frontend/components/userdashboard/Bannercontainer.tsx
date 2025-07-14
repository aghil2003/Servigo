
'use client';
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef,useState } from "react";



export function Bannercontainer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 60, damping: 10 };

  // Bumble effect using sinusoidal oscillation added to scroll transforms
  const oscillate = (progress, xAmp, yAmp, freq = 10) => {
    const oscillatingX = useTransform(progress, v => xAmp * Math.sin(freq * v * Math.PI));
    const oscillatingY = useTransform(progress, v => yAmp * Math.sin(freq * v * Math.PI));
    return [oscillatingX, oscillatingY];
  };

  const [oscX1, oscY1] = oscillate(scrollYProgress, 10, 8);
  const [oscX2, oscY2] = oscillate(scrollYProgress, 12, 10);
  const [oscX3, oscY3] = oscillate(scrollYProgress, 8, 6);

  const x1 = useTransform(scrollYProgress, [0, 0.3], [0, 120]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, 500]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.3], [-12, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const x2 = useTransform(scrollYProgress, [0, 0.3], [0, -110]);
  const y2 = useTransform(scrollYProgress, [0, 0.3], [0, 580]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.3], [10, 0]);
  const scale2 = useTransform(scrollYProgress, [0, 0.3], [1, 0.96]);

  const x3 = useTransform(scrollYProgress, [0, 0.3], [0, -110]);
  const y3 = useTransform(scrollYProgress, [0, 0.3], [0, 490]);
  const rotate3 = useTransform(scrollYProgress, [0, 0.3], [0, 0]);
  const scale3 = useTransform(scrollYProgress, [0, 0.3], [1, 0.97]);



  return (
    <div>
      <div ref={ref} className="relative w-full h-[540px]">

        <motion.div
  className="absolute w-8 h-8 rounded-full top-[50px] left-[150px] backdrop-blur-sm"
  style={{
    background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.5), rgba(59, 130, 246, 0.4))",
    boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
    border: "1px solid rgba(255,255,255,0.6)"
  }}
  animate={{ y: [0, -20, 0], scale: [1, 1.2, 1], opacity: [0.8, 0.9, 0.6] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
/>

<motion.div
  className="absolute w-6 h-6 rounded-full top-[120px] left-[400px] backdrop-blur-sm"
  style={{
    background: "radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.4), rgba(96, 165, 250, 0.3))",
    boxShadow: "0 0 12px rgba(96, 165, 250, 0.3)",
    border: "1px solid rgba(255,255,255,0.5)"
  }}
  animate={{ y: [0, -15, 0], scale: [1, 1.3, 1], opacity: [0.6, 0.8, 0.6] }}
  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
/>

<motion.div
  className="absolute w-7 h-7 rounded-full top-[200px] left-[700px] backdrop-blur-sm"
  style={{
    background: "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3), rgba(37, 99, 235, 0.4))",
    boxShadow: "0 0 10px rgba(37, 99, 235, 0.3)",
    border: "1px solid rgba(255,255,255,0.4)"
  }}
  animate={{ y: [0, -25, 0], scale: [1, 1.1, 1], opacity: [0.6, 0.85, 0.6] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
/>

        <motion.div
          style={{
            x: useSpring(useTransform([x1, oscX1], ([base, osc]) => base + osc), springConfig),
            y: useSpring(useTransform([y1, oscY1], ([base, osc]) => base + osc), springConfig),
            rotate: rotate1,
            scale: scale1
          }}
          className="absolute top-[90px] left-[70px] border-8 border-white rounded shadow-2xl z-10"
        >
          <Image src="/image/banner1.jpg" alt="Banner 1" width={225} height={225} />
        </motion.div>

        <motion.div
          style={{
            x: useSpring(useTransform([x2, oscX2], ([base, osc]) => base + osc), springConfig),
            y: useSpring(useTransform([y2, oscY2], ([base, osc]) => base + osc), springConfig),
            rotate: rotate2,
            scale: scale2
          }}
          className="absolute top-[20px] right-[100px] border-8 border-white rounded shadow-2xl z-10"
        >
          <Image src="/image/banner2.jpg" alt="Banner 2" width={150} height={170} />
        </motion.div>

        <div className="absolute top-[90px] ml-[340px] rounded-lg z-0">
          <h1 className="text-[48px] ml-[70px] font-poppins font-bold leading-tight text-gray-800">"Book with Ease.</h1>
          <h1 className="text-[48px] ml-[10px] font-poppins font-bold leading-tight text-gray-800">Relax with confidence."</h1>
          <div>
            <div className="text-[32px] font-bebas font-semibold text-blue-700 mt-2 mb-2 ml-[190px]">SERVIGO</div>
            <div className="ml-[120px] text-[18px] text-gray-600 mb-6 font-opensans">Your trusted home service partner</div>
          </div>
          <button className="font-poppins font-semibold ml-[190px] px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 hover:scale-105 transition duration-300">
            <a href="/services" className="hover:text-gray-400">Get started</a>
          </button>
        </div>

        <div className="absolute top-[370px] left-[200px]">
          <div>vidoe</div>
          <button>about</button>
        </div>

        <motion.div
          style={{
            x: useSpring(useTransform([x3, oscX3], ([base, osc]) => base + osc), springConfig),
            y: useSpring(useTransform([y3, oscY3], ([base, osc]) => base + osc), springConfig),
            rotate: rotate3,
            scale: scale3
          }}
          className="absolute top-[250px] right-[100px] border-8 border-white rounded shadow-2xl z-10"
        >
          <Image src="/image/banner3.jpg" alt="Banner 3" width={300} height={300} />
        </motion.div>
      </div>

      {/* Below banner */}
      <div className="bg-[#deeaf9] h-[500px] w-full flex justify-around items-start pt-10 relative z-0">
        <div className="relative bg-[#c1dbf4] w-[900px] h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/bagroundBanner.jpg"
              alt="Background"
              fill
              className="object-cover object-top pointer-events-none opacity-10"
            />
          </div>

          <div className="absolute top-[70px] left-[250px] border-8 border-white rounded z-15">
            <Image src="/image/banner4.jpg" alt="Banner 4" width={280} height={225} />
          </div>

          <div className="absolute top-[180px] left-[50px]">
            <p className="text-[18px] font-poppins font-bold text-left break-words leading-tight">Consult With Our</p>
            <p className="ml-[35px] text-[18px] font-poppins font-bold text-left break-words leading-tight">Team →</p>
          </div>

          <div className="absolute top-[320px] left-[10px]">
            <div className="text-[40px] font-medium leading-tight z-0 font-bebas">SERVIGO</div>
            <div className="text-[20px] font-medium ml-1 text-left break-words leading-snug font-opensans">
              Your trusted home service partner
            </div>
          </div>

          <div className="absolute top-[10px] right-[200px] border-8 border-white rounded z-10">
            <Image src="/image/banner5.jpg" alt="Banner 5" width={130} height={225} />
          </div>
        </div>
      </div>
    </div>
  );
}
