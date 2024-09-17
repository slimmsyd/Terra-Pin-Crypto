"use client";

import { useState } from "react";
import Video from "./video";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center relative mt-[50px]  w-full h-[80vh]">
      <div className="overlayDark absolute"></div>
      <div className="absolute video-bg w-[100vw]">
        <Video
          src="/terraPin.mp4"
          type="video/mp4"
          width="100%"
          height="100%"
          controls={false}
          autoPlay={true}
          loop={true}
          muted={true} // Ensure the video is muted for autoplay to work
          className="relative h-[80vh]"
        />
      </div>

      <div className="flex flex-col items-center  text-center justify-center relative z-50">
        <div
        className = "max-w-[950px] m-auto"
        >

<h1 className="text-white text-[28px] md:text-[65px] font-bold z-50">
            Ensuring you are a global leader in Bitcoin, Blockchain, and Web3
          </h1>
          <p className="text-white text-[16px] md:text-[18px]">
            Terra Pin is a decentralized social media platform that allows users
            to connect with each other and share their thoughts and ideas.
          </p>

          <button
          className="mt-[20px] bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}
