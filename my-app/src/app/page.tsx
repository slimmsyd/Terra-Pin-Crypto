"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import Header from "./components/header";
import { useState } from "react";
import Footer from "./components/footer";
import GlobalButton from "./components/globalbutton";

export default function Home() {
  return (
    <div
      className = "overflow-hidden relative"
    
    >
      <Navbar />
      <Header />

      <div className=" mainWrapper mt-[100px] pb-[100px] flex flex-col items-start justify-start max-w-[1000px] m-auto border-l-[0.5px]  border-r-[0.5px]  border-b-[0.5px] border-black gap-[100px]">
        <div className="flex flex-col items-start  px-[25px] gap-[14px]">
          <h3>About Us</h3>
          <div className="w-[80px] h-[2px] dividerLine"></div>
          <p>
            Terrance Crypto, an MIT spin-off, is a foundation model company
            headquartered in Boston, Massachusetts. Our mission is to ensure
            universally capable general intelligence solves problems at every
            scale.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-black hover:border hover:border-black transition-colors">
            Book A Call
          </button>

          <div className="my-[20px] border-r-2 flex flex-col items-start justify-start gap-[10px]">
            <img
              className="border-r-2"
              src="/images/Newsarticle.png"
              alt="newsarticle"
            />
            <p>News In Article</p>
          </div>
        </div>

        <div className="chatBotPopup w-full relative flex items-center justify-center">
          <div className="absolute w-[80px] h-[80px]">
            <img
              className="absolute animate-spin"
              src="https://terra-pin-crypto.vercel.app/images/Dot-Image.png"
              alt="dot-image"
              style={{ animation: "spin 10s linear infinite" }}
            />
          </div>
          <button className="w-[30px] cursor-pointer h-[30px] border-2 border-black rounded-full flex items-center justify-center">
            <span className = "w-[5px] h-[5px] bg-black rounded-full"></span>
          </button>
        </div>

        <div className="flex flex-col items-start gap-[14px]">
          <div className="flex flex-col items-start gap-[14px  px-[25px]">
            <h3>Our Services</h3>
            <p>What we offer</p>
            <div className="w-[80px] h-[2px] dividerLine"></div>
          </div>

          <ImageSlider />

          <div className="flex flex-col items-center my-[100px]  px-[25px] gap-[14px]">
            <div className="relative w-full mb-[40px] text-center flex items-center justify-center gap-[10px]">
              <div className="absolute  h-ful">
                <img
                  className="absolute animate-spin"
                  src="https://terra-pin-crypto.vercel.app/images/Dot-Image.png"
                  alt="dot-image"
                  style={{ animation: "spin 10s linear infinite" }}
                />

                <h3>About Us</h3>
                <p>Global Citzen</p>
                <div className="w-[full] h-[2px] dividerLine"></div>
              </div>
            </div>
            <p className="text-center">
              While our core operations are based in the DMV (D.C., Maryland,
              Virginia) area, we have expanded our services to include projects
              and consultations outside this region. Our expertise and
              innovative solutions have reached clients across the country and
              internationally. 
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-black hover:border hover:border-black transition-colors">
              Book A Call
            </button>
          </div>

          <div className="flex flex-col items-start my-[100px]  px-[25px] gap-[14px]">
            <h3>Founder</h3>
            <div className="w-[80px] h-[2px] dividerLine"></div>
            <p>
              Terrance Crypto, an MIT spin-off, is a foundation model company
              headquartered in Boston, Massachusetts. Our mission is to ensure
              universally capable general intelligence solves problems at every
              scale.
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-black hover:border hover:border-black transition-colors">
              Book A Call
            </button>

            <div className="my-[20px] w-[100%] border-r-2 overflow-hidden relative w-[100%]flex flex-col items-start justify-start gap-[10px]">
              <div className="overlayDark absolute"></div>

              <img
                className="border-r-2 h-[500px] w-full object-cover"
                src="/SullyFounder.jpg"
                alt="newsarticle"
              />
            </div>
          </div>
          <div className="flex flex-col items-start  px-[25px] gap-[14px]">
            <h3>Let’s curate blockchain solutions</h3>
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Book A Call
            </button>
            <div className="w-[80px] h-[2px] dividerLine"></div>

            <div className="flex flex-row flex-wrap gap-[10px]">
              <div className="pricingCard  h-full bg-transparent">
                <div className="flex flex-col">
                  <h3>Free Consultation</h3>
                  <div className="flex flex-row gap-[5px] items-center">
                    <h2 className="text-[30px] font-bold">$Free /</h2>
                    <div className="flex flex-col gap-[5px]">
                      <p>60 minutes</p>
                    </div>
                  </div>

                  <GlobalButton />
                </div>
                <div className="w-full my-[25px] h-[2px] dividerLine"></div>

                <div className="flex flex-col gap-[10px]">
                  <p className="text-black font-bold">What to expect</p>
                  <p>General Consultation</p>
                  <div className="flex flex-row gap-[10px]">
                    <p>
                      I can provide an overview of Blockchain technology,
                      explain key concepts, and help you understand how it can
                      be applied to your specific use case
                    </p>
                  </div>
                </div>
              </div>

              <div className="pricingCard  h-full bg-transparent">
                <div className="flex flex-col">
                  <h3>Beginner</h3>
                  <div className="flex flex-row gap-[5px] items-center">
                    <h2 className="text-[30px] font-bold">$50 /</h2>
                    <div className="flex flex-col gap-[5px]">
                      <p>60 minutes</p>
                    </div>
                  </div>

                  <GlobalButton />
                </div>
                <div className="w-full my-[25px] h-[2px] dividerLine"></div>

                <div className="flex flex-col gap-[10px]">
                  <p className="text-black font-bold">What to expect</p>
                  <p>General Consultation</p>
                  <div className="flex flex-row gap-[10px]">
                    <p>
                      Market Analysis Wallet Setup and Security Investment
                      Guidance Project Recommendations
                    </p>
                  </div>
                </div>
              </div>

              <div className="pricingCard  h-full bg-transparent">
                <div className="flex flex-col">
                  <h3>Intermediate</h3>
                  <div className="flex flex-row gap-[5px] items-center">
                    <h2 className="text-[30px] font-bold">$100 /</h2>
                    <div className="flex flex-col gap-[5px]">
                      <p>60 minutes</p>
                    </div>
                  </div>

                  <GlobalButton />
                </div>
                <div className="w-full my-[25px] h-[2px] dividerLine"></div>

                <div className="flex flex-col gap-[10px]">
                  <p className="text-black font-bold">What to expect</p>
                  <p>Intermediate Consultation</p>
                  <div className="flex flex-row gap-[10px]">
                    <p>
                      Market Analysis Wallet Setup and Security Investment
                      Guidance Project Recommendations Tokenomics Consultation
                      DeFi Strategies Security Audits
                    </p>
                  </div>
                </div>
              </div>

              <div className="pricingCard  h-full bg-transparent">
                <div className="flex flex-col">
                  <h3>Expert</h3>
                  <div className="flex flex-row gap-[5px] items-center">
                    <h2 className="text-[30px] font-bold">$150 /</h2>
                    <div className="flex flex-col gap-[5px]">
                      <p>90 minutes</p>
                    </div>
                  </div>

                  <GlobalButton />
                </div>
                <div className="w-full my-[25px] h-[2px] dividerLine"></div>

                <div className="flex flex-col gap-[10px]">
                  <p className="text-black font-bold">What to expect</p>
                  <p>Expert Consultation</p>
                  <div className="flex flex-row gap-[10px]">
                    <p>
                      Market Analysis Wallet Setup and Security Investment
                      Guidance Project Recommendations Tokenomics Consultation
                      DeFi Strategies Security Audits Smart Contract Audits
                      Blockchain Development Tokenomics Design Web3 Integration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [
    { src: "/images/mining_machines.png", name: "Bitcoin Mining" },
    { src: "/images/AI_one.png", name: "Crypto Consultation" },
    { src: "/images/Eth_Logo.png", name: "Web3 Consultation" },
    { src: "/images/Bitcoin_Logo.png", name: "Blockchain Development" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  return (
    <div className="relative w-full overflow-hidden mb-[100px]">
      <div
        className="flex transition-transform duration-300 ease-in-out gap-[10px]"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {services.map((services, index) => (
          <div key={index} className="w-auto h-[500px] relative flex-shrink-0 ">
            <Image
              className="h-[100%] servicesImage"
              src={services.src}
              alt={`Slide ${index + 1}`}
              width={500}
              height={500}
              objectFit="cover"
            />
            <div className="flex p-[10px] items-end justify-end absolute bottom-0 text-white">
              <p className="mt-2 text-center font-semibold">{services.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute clickBtns left-2 top-1/2 transform -translate-y-1/2  p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute clickBtns right-2 top-1/2 transform -translate-y-1/2"
      >
        &gt;
      </button>
    </div>
  );
}
