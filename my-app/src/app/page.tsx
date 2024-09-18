"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import Header from "./components/header";
import { useState, useEffect, useCallback } from "react";
import Footer from "./components/footer";
import GlobalButton from "./components/globalbutton";
import Link from "next/link";
import LoadingComponent from "./components/loadingComponent";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { teardownTraceSubscriber } from "next/dist/build/swc";

export default function Home() {

  const [showPopup, setShowPopup] = useState(false);
  const [articleImage, setArticleImage] = useState("");
  const [articleName, setArticleName] = useState("News In Article");
  const [articleLink, setArticleLink] = useState("/");
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { address } = useAccount();

  const ADMINADRESS = "0xDcFD8d5BD36667D16aDDD211C59BCdE1A9c4e23B";
const { open } = useWeb3Modal();

const handleConnect = () => {
  open();
};

  useEffect(() => {
    console.log("Address princple", address)
    if (address === ADMINADRESS) {
      setIsAdmin(true);
    }

    if (!address) {
      setIsAdmin(false);
    }
 
    console.log("Loggin the address again ", address)
  }, [address]);
  useEffect(() => {
    console.log("Admin princple", isAdmin)

    if (!isAdmin) {
      console.log("Not admin", isAdmin)
    }

  }, [isAdmin])

  useEffect(() => {
    // Set loading to true before fetching data
    setLoading(true);
    // Fetch saved article data on component mount
    fetch('/api/article')
      .then(response => response.json())
      .then(data => {
        console.log("Data", data)
        setArticleImage(data.image.url);
        setArticleName(data.image.alt);
        setArticleLink(data.image.link);
      })
      .catch(error => {
        console.error('Error fetching article data:', error);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {

    console.log("Loading princple", loading)
  },[loading])
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setArticleImage(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleSave = useCallback(() => {
    if (!isAdmin) {

      console.log("Logging Admin", isAdmin)
      console.log(articleImage, articleName, articleLink)
      return

    } 

    
    // Save article data to the server
    fetch('/api/article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: articleImage, name: articleName, link: articleLink }),
    }).then(() => setShowPopup(false));
  }, [articleImage, articleName, articleLink]);


  return (
    <div className="overflow-hidden relative">
      <Navbar 
      handleConnect={handleConnect}
      />
      <Header />

      <div className=" mainWrapper mt-[100px] pb-[100px] flex flex-col items-start justify-start max-w-[1000px] m-auto border-l-[0.5px]  border-r-[0.5px]  border-b-[0.5px] border-black gap-[100px]">
        <div className="flex flex-col items-start  px-[25px] gap-[14px]">
          <h3>About Us</h3>
          <div className="w-[80px] h-[2px] dividerLine"></div>
          <p>
         Terrapin Crypto Solutions, our mission is to empower individuals and businesses with advanced cryptocurrency consulting, blockchain solutions, and real-time transaction processing. Starting with Bitcoin mining, we have grown to offer a comprehensive suite of services including cryptocurrency consulting, blockchain development, and Web3 solutions
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-black hover:border hover:border-black transition-colors">
            Book A Call
          </button>

          <div className="my-[20px] flex flex-col items-start justify-start gap-[10px]">
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className={`${isAdmin ? " border-2  border-dashed border-gray-300" : ""} py-4 cursor-pointer`}
            >
              {loading ? (
                <LoadingComponent />
              ) : (
                <Image
                  src={articleImage}
                alt="newsarticle"
                width={500}
                height={300}
                objectFit="cover"
                />
              )}
              {isAdmin && (
              <p className="text-center mt-2 text-gray-500">Drag and drop a new image here</p>
              )}
            </div>
            <Link href="/">
              <p>{articleName}</p>
            </Link>
            {isAdmin && (
            <button
              onClick={() => setShowPopup(true)}
              className= "bg-black text-white px-2 py-1 rounded-md hover:bg-transparent hover:text-black hover:border hover:border-black transition-colors"
            >
              Edit Article
            </button>
            )}
          </div>

        {/* ... rest of the component ... */}

        {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md">
            <h3 className="font-bold mb-2">Edit Article</h3>
            <input
              type="text"
              value={articleName}
              onChange={(e) => setArticleName(e.target.value)}
              placeholder="Article Name"
              className="block w-full mb-2 p-1 border rounded"
            />
            <input
              type="text"
              value={articleLink}
              onChange={(e) => setArticleLink(e.target.value)}
              placeholder="Article Link"
              className="block w-full mb-2 p-1 border rounded"
            />
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition-colors"
            >
              Save
            </button>
            <button
              onClick={() => setShowPopup(false)}
              className="ml-2 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}



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
            <span className="w-[5px] h-[5px] bg-black rounded-full"></span>
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
              Terrance Crypto, is the visionary founder. His expertise in environmental science and successful career in options and stock trading have been instrumental in shaping the company’s trajectory.
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
                      <p>30 minutes</p>
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
