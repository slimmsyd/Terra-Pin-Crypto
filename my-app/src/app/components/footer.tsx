"use client"
import Video from "./video"
import { useCallback } from "react";

export default function Footer()
 { 
  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }, []);

    return ( 
        <footer className="relative">
    <div className="overlayDark absolute "></div>

 
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
          className="relative h-[20vh]"
        />

        
      </div>

      <div className = "bg-transparent flex gap-[10px] text-white w-full h-[20vh] relative z-50 items-end py-[10px] justify-center">
      <button
          className="text-white bg-transparent px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
          onClick={() => scrollToSection("aboutFounderSection")}
        >
          About Founder
        </button>
        <button
          className="text-white bg-transparent px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
          onClick={() => scrollToSection("servicesSection")}
        >
          Services
        </button>
        <button
          className="text-white bg-transparent px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
          onClick={() => scrollToSection("newsSection")}
        >
          News
        </button>
        <button
          className="text-white bg-transparent px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
          onClick={() => scrollToSection("pricingSection")}
        >
          Book A Call
        </button>
    </div>
 


        </footer>
        
    )

 }