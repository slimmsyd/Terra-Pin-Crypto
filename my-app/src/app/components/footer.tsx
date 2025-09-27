"use client"
import Video from "./video"
import { useCallback } from "react";

export default function Footer()
 { 
  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "auto" });
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

      <div className = "bg-transparent flex flex-col gap-[10px] text-white w-full min-h-[25vh] relative z-50 items-center justify-end py-[20px]">
        <div className="flex items-center mb-4">
          <img src="/LogoBlack.png" alt="logo" className="h-8 filter invert" />
        </div>
        
        {/* Contact Information */}
        <div className="flex flex-col items-center gap-2 mb-4 text-sm">
          <div className="flex flex-wrap justify-center gap-4 text-center">
            <span>Email: info@terrapincrypto.us</span>
            <span>HQ: Fort Washington, MD</span>
          </div>
          <p className="text-center text-xs mt-2 opacity-90">
            Let us know your needs, and we'll connect you with the right team member.
          </p>
        </div>
        
        <div className="flex gap-[10px]">
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
    </div>
 


        </footer>
        
    )

 }