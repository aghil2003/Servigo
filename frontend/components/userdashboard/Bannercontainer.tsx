
'use client';
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Bannercontainer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Clamp scroll range to 0.3 (30% of the section scroll)
  const x1 = useTransform(scrollYProgress, [0, 0.3], [0, 120], { clamp: true });
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, 500], { clamp: true });
  const rotate1 = useTransform(scrollYProgress, [0, 0.3], [-12, 0], { clamp: true });
  const scale1 = useTransform(scrollYProgress, [0, 0.3], [1, 0.95], { clamp: true });

  const x2 = useTransform(scrollYProgress, [0, 0.3], [0, -110], { clamp: true });
  const y2 = useTransform(scrollYProgress, [0, 0.3], [0, 580], { clamp: true });
  const rotate2 = useTransform(scrollYProgress, [0, 0.3], [10, 0], { clamp: true });
  const scale2 = useTransform(scrollYProgress, [0, 0.3], [1, 0.96], { clamp: true });

  const x3 = useTransform(scrollYProgress, [0, 0.3], [0, -110], { clamp: true });
  const y3 = useTransform(scrollYProgress, [0, 0.3], [0, 490], { clamp: true });
  const scale3 = useTransform(scrollYProgress, [0, 0.3], [1, 0.97], { clamp: true });
  const rotate3 = useTransform(scrollYProgress, [0, 0.3], [0, 0], { clamp: true });

  return (
    <div>
      <div
        ref={ref}
        className="relative w-[100%] h-[540px]"
      >
        <motion.div
          style={{ x: x1, y: y1, rotate: rotate1, scale: scale1 }}
          transition={{ type: "spring", stiffness: 60 }}
          className="absolute top-[90px] left-[70px] border-8 border-white rounded shadow-2xl z-10"
        >
          <Image src="/image/banner1.jpg" alt="Banner 1" width={225} height={225} />
        </motion.div>

        <motion.div
          style={{ x: x2, y: y2, rotate: rotate2, scale: scale2 }}
          transition={{ type: "spring", stiffness: 60 }}
          className="absolute top-[20px] right-[100px] border-8 border-white rounded shadow-2xl z-10"
        >
          <Image src="/image/banner2.jpg" alt="Banner 2" width={150} height={170} />
        </motion.div>

        <div className="absolute top-[90px] ml-[340px] rounded-lg z-0">
          <h1 className="text-[48px] ml-[70px] font-poppins font-bold leading-tight text-gray-800">"Book with Ease.</h1>
          <h1 className="text-[48px] ml-[10px] font-poppins font-bold leading-tight text-gray-800">Relax with confidence."</h1>
          <div className="">
            <div className="text-[32px] font-bebas font-semibold text-blue-700 mt-2 mb-2 ml-[190px]">SERVIGO</div>
            <div className="ml-[120px] text-[18px] text-gray-600 mb-6 font-opensans">Your trusted home service partner</div>
          </div>
          <button className="font-poppins font-semibold ml-[190px] px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 hover:scale-105 transition duration-300">
            Get started
          </button>
        </div>

        <div className="absolute top-[370px] left-[200px] ">
          <div className="text-[50px] font-medium z-0">SERVIGO</div>
          <div className="text-[20px] ml-1 text-left break-words leading-tight">Your trusted home service partner</div>
        </div>

        <motion.div
          style={{ x: x3, y: y3, scale: scale3, rotate: rotate3 }}
          className="absolute top-[250px] right-[100px] border-8 border-white rounded shadow-2xl z-10"
          transition={{ type: "spring", stiffness: 60 }}
        >
          <Image src="/image/banner3.jpg" alt="Banner 3" width={300} height={300} />
        </motion.div>
      </div>

      {/* Below banner info container */}
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
