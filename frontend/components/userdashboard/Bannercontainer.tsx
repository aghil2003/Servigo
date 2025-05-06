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

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 200]); 
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, -50]); 
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 500]); 

  return (
    <>
      {/* Banner Section */}
      <div
        ref={ref}
        className="relative w-full h-[540px]"
        style={{
          backgroundImage: "linear-gradient(to bottom, #fdfeff 4%, #deeaf9 96%)",
        }}
      >
        <motion.div
          style={{x: x1, y: y1 }}
          className="absolute top-[20px] left-[20px] border-8 border-white rounded shadow-2xl z-10"
        >
          <Image
            src="/image/banner1.jpg"
            alt="Your Company"
            width={225}
            height={225}
          />
        </motion.div>

        <motion.div
          style={{x: x2, y: y2 }}
          className="absolute top-[20px] right-[100px] border-8 border-white rounded shadow-2xl z-10"
        >
          <Image
            src="/image/banner2.jpg"
            alt="Your Company"
            width={150}
            height={150}
          />
        </motion.div>

        <div className="absolute top-[175px] ml-[70px] rounded-lg z-0">
          <div className="text-[50px] ml-[50px] font-bold text-left break-words">
            "Book with Ease. Relax with confidence."
          </div>
          <div className="text-[50px] font-bold text-left break-words leading-tight">
            SERVIGO – Your trusted home service partner
          </div>

          <button className="mt-6 ml-[510px] px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Get started
          </button>
        </div>

        <div className="absolute top-[420px] left-[200px] text-[50px] font-extrabold z-0">
          SERVIGO
        </div>

        <motion.div
          style={{x:x3, y: y3 }}
          className="absolute top-[315px] right-[100px] border-8 border-white rounded shadow-2xl z-10"
        >
          <Image
            src="/image/banner3.jpg"
            alt="Your Company"
            width={300}
            height={300}
          />
        </motion.div>
      </div>

      {/* Destination Section */}
      <div className="bg-[#deeaf9] h-[500px] w-full flex justify-around items-start pt-20 relative z-0">
        <div className="img1  bg-white rounded shadow-md"></div>
        <div className="img2  bg-white rounded shadow-md"></div>
        <div className="img3  bg-white rounded shadow-md"></div>
      </div>
    </>
  );
}
