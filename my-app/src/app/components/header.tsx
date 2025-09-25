"use client";

import { useState } from "react";
import Video from "./video";

interface HeaderProps {
  onClick: () => void;
}

export default function  Header({ onClick }: HeaderProps) {
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
        <div className="max-w-[950px] m-auto">
          <h1 className="text-white text-[28px] md:text-[65px] font-bold z-50">
            Washington D.C's Blockchain & Mining Experts:
          </h1>
          <p className="text-white text-[16px] md:text-[18px]">
            Bridging innovation and sustainability. Terrapin is ensuring you are a global player in Bitcoin,
            Blockchain, and Web3{" "}
          </p>

          <button
            className="mt-[20px] bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors hover:border-transparent"
            onClick={onClick}
          >
            Get In TouchSulaman Shah is the founder and CEO of Terrapin Crypto Solutions, LLC, a Bitcoin-focused company advancing decentralized infrastructure, environmental sustainability, and blockchain innovation. In 2024, Terrapin began mining Bitcoin with a 100% carbon-neutral footprint, with over 70% of its hashrate powered by hydropower.

Through a strategic partnership with Meta-Luban, Sulaman serves as the exclusive North American ambassador, providing clients with top-tier access to ASIC sales, hosting, repairs, and mining site development from leading manufacturers.

With a foundation in Environmental Science and Biological Research, Sulaman brings scientific precision to his investment and mining strategies. His early interest in sound money began with buying gold and silver in middle school—shaping a lifelong commitment to financial sovereignty and long-term value.

Sulaman advises the U.S. Senate on the capabilities, use cases, and economic benefits of Bitcoin and blockchain technology for American constituents and businesses.

He also advises Bitcoin Timber, a renewable-powered mining sawmill in Guyana; Carbon Country, an eco-aligned mining venture; and contributes to Bitcoin District, a grassroots Bitcoin education and community hub in the Washington, D.C. metro area.

A dedicated advocate for inclusion and sustainability, Sulaman is an Eagle Scout, Vigil Honor recipient, and fluent in French. His ongoing research explores Bitcoin in Developing regions, bee-integrated mining models, and broader applications of blockchain for environmental and social impact.
          </button>
        </div>
      </div>
    </div>
  );
}
