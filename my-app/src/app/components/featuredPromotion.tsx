"use client";

import Link from "next/link";
import Image from "next/image";

export default function FeaturedPromotion() {
  return (
    <div className="featuredPromotion flex flex-col items-start px-[25px] gap-[14px]">
      <div className="flex items-center gap-2">
        <span className="bg-black text-white px-3 py-1 text-sm font-semibold">
          Featured Promotion
        </span>
      </div>
      
      <h3>M63 Whatsminer + One-Click Hosting</h3>
      
      <div className="w-[80px] h-[2px] dividerLine"></div>
      
      {/* M63 Whatsminer Showcase */}
      <div className="w-full my-[20px] border border-black relative flex flex-col items-center justify-center overflow-hidden">
        <div className="overlayDark absolute opacity-10"></div>
        <div className="relative p-6 w-full flex items-center justify-center">
          <Image
            src="/MetaLuman.jpg"
            alt="M63 Whatsminer - Hydro-cooled ASIC Miner"
            width={600}
            height={400}
            className="object-contain max-h-[300px] w-auto"
            priority
          />
        </div>
        <img
          className="absolute left-[-40px] z-1 top-[-20px]"
          src="https://terra-pin-crypto.vercel.app/images/Dot-Image.png"
          alt="dot-image"
        />
        <img
          className="absolute right-[-40px] z-1 bottom-[-20px]"
          src="https://terra-pin-crypto.vercel.app/images/Dot-Image.png"
          alt="dot-image"
        />
      </div>
      
      <div className="space-y-4 flex flex-col items-start justify-start">
        <p>
          Terrapin Crypto Solutions, in partnership with Meta-Luban, is offering exclusive access to the high-performance, hydro-cooled M63 Whatsminer — now available with seamless hosting in our Texas-based mining facility powered by renewable energy.
        </p>
        
        <p>
          With up to 470 TH/s hashrate (372 TH/s standard), daily BTC payouts to your wallet, and no noise, heat, or residential electrical strain, our One-Click Mining Service is the easiest way to start or scale your Bitcoin mining journey — without the hassle.
        </p>
        
        <div>
          <h4 className="font-bold text-lg mb-3">
            Why Choose Terrapin x Meta-Luban?
          </h4>
          
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="font-bold mt-1">•</span>
              <span>Professionally hosted in Texas, USA with 98%+ uptime</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold mt-1">•</span>
              <span>$0.068/kWh electricity rate — no hidden hosting or service fees</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold mt-1">•</span>
              <span>No coin restrictions — you receive 100% of your mined BTC daily</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold mt-1">•</span>
              <span>Full install, overclocking, and remote support included</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold mt-1">•</span>
              <span>You only pay for the miner and logistics (shipping, customs, install, etc.)</span>
            </li>
          </ul>
        </div>
        
        <p>
          Whether you're a first-time miner or scaling a commercial operation, this is a fully managed, plug-and-play solution built for efficiency, transparency, and long-term profitability.
        </p>
        
        <Link 
          href="/store/m63" 
          className="bg-black margin-top-[20px] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-black hover:border hover:border-black transition-colors mt-4"
        >
           Learn More & Reserve Your Unit
        </Link>
      </div>
    </div>
  );
}
