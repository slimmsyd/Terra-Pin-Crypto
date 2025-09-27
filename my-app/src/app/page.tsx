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
  const DEVADDRESS = "EUy7RKJsBoG81yheHS7YCD8wyfJbp6CD7XB2DScoSZEs"
  const { open } = useWeb3Modal();

  const handleConnect = () => {
    open();
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    console.log("Address princple", address);
    if (address === ADMINADRESS || address === (DEVADDRESS as unknown as `0x${string}`)) {
      setIsAdmin(true);
    }

    if (!address) {
      setIsAdmin(false);
    }

    console.log("Loggin the address again ", address);
  }, [address]);
  useEffect(() => {
    console.log("Admin princple", isAdmin);

    if (!isAdmin) {
      console.log("Not admin", isAdmin);
    }
  }, [isAdmin]);

  useEffect(() => {
    // Set loading to true before fetching data
    setLoading(true);
    // Fetch saved article data on component mount
    fetch("/api/article")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data", data);
        setArticleImage(data.image.url);
        setArticleName(data.image.alt);
        setArticleLink(data.image.link);
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log("Loading princple", loading);
  }, [loading]);
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === "string") {
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
      console.log("Logging Admin", isAdmin);
      console.log(articleImage, articleName, articleLink);
      return;
    }

    // Save article data to the server
    fetch("/api/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: articleImage,
        name: articleName,
        link: articleLink,
      }),
    }).then(() => setShowPopup(false));
  }, [articleImage, articleName, articleLink]);



  return (
    <div className="overflow-hidden relative">
      <Navbar handleConnect={handleConnect}
      scrollToSection={scrollToSection}
      />
      <Header onClick={() => scrollToSection("pricingSection")} />

      <div className=" mainWrapper mt-[100px] pb-[100px] flex flex-col items-start justify-start max-w-[1000px] m-auto border-l-[0.5px]  border-r-[0.5px]  border-b-[0.5px] border-black gap-[100px]">
        <div id="aboutUsSection" className="flex flex-col items-start  px-[25px] gap-[14px]">
          <h3>About Us</h3>
          <div className="w-[80px] h-[2px] dividerLine"></div>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-2">Company Overview</h4>
              <p>
                Terrapin Crypto Solutions, LLC is a Delaware-registered company that stands at the cutting edge of the cryptocurrency and blockchain industry. Founded on January 23, 2024, we are headquartered in Fort Washington, Maryland, with our registered office in Wilmington, Delaware. While our operations are centered in the Washington, D.C. metropolitan area, we serve clients across the U.S. and internationally.
              </p>
              <p className="mt-4">
                The name "Terrapin" was chosen out of respect for the Algonquin Native Americans indigenous to Maryland. The terrapin turtle symbolizes perseverance and resilience — core values of our mission to lead with innovation and excellence in the rapidly evolving blockchain space.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Founder: Sulaman Shah</h4>
              <p>
                Sulaman Shah is the founder and CEO of Terrapin Crypto Solutions, LLC — a Bitcoin-focused company driving decentralized infrastructure, environmental sustainability, and blockchain innovation.
              </p>
              <p className="mt-2">
                In 2024, Terrapin began mining Bitcoin with a 100% carbon-neutral footprint, with over 70% of its hashrate powered by hydropower.
              </p>
              <p className="mt-2">
                Sulaman serves as the exclusive North American ambassador for Meta-Luban, offering clients top-tier access to ASIC sales, hosting, repairs, and mining site development from leading global manufacturers.
              </p>
              <p className="mt-2">
                He brings a strong academic background in Environmental Science and Biological Research, applying scientific precision to his investment and mining strategies. His passion for sound money began in middle school, buying gold and silver — forming the basis of a lifelong commitment to financial sovereignty.
              </p>
              <p className="mt-2">
                Sulaman advises the U.S. Senate on Bitcoin and blockchain technology use cases and economic implications, and is actively involved in multiple advisory roles:
              </p>
              <ul className="mt-2 ml-4 space-y-1">
                <li><strong>Bitcoin Timber</strong> – Renewable-powered mining sawmill in Guyana</li>
                <li><strong>Carbon Country</strong> – Eco-aligned mining venture</li>
                <li><strong>Bitcoin District</strong> – A grassroots Bitcoin education hub in Washington, D.C.</li>
              </ul>
              <p className="mt-2">
                Sulaman has traveled to over 20 countries across 4 continents, speaks fluent French, and is a lifelong Eagle Scout and Vigil Honor recipient. His ongoing research includes bee-integrated mining, blockchain solutions for developing regions, and tech for social/environmental impact.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Featured Clients & Collaborations</h4>
              <ul className="space-y-1">
                <li><strong>U.S. Senate</strong> — Blockchain and Bitcoin economic advising</li>
                <li><strong>District Lemonade</strong> — Crypto integration consulting</li>
                <li><strong>Bluey Hair Salon</strong> — Education workshops for crypto onboarding</li>
                <li><strong>Washington Development Company</strong> — Blockchain consulting and strategy</li>
              </ul>
            </div>
          </div>
          <button
            onClick={() => scrollToSection("pricingSection")}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-black hover:border hover:border-black transition-colors"
          >
            Book A Call
          </button>

          {/* <div
            id="newsSection"
            className="my-[20px] flex flex-col items-start justify-start gap-[10px]"
          >
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className={`${
                isAdmin ? " border-2  border-dashed border-gray-300" : ""
              } py-4 cursor-pointer relative`}
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
                  className="relative z-10"
                />
              )}
              {isAdmin && (
                <p className="text-center mt-2 text-gray-500">
                  Drag and drop a new image here
                </p>
              )}

              <img
                className="absolute left-[-40px] z-1 top-[-20px]"
                src="https://terra-pin-crypto.vercel.app/images/Dot-Image.png"
                alt="dot-image"
              />
            </div>
            <Link href="/">
              <p>{articleName}</p>
            </Link>
            {isAdmin && (
              <button
                onClick={() => setShowPopup(true)}
                className="bg-black text-white px-2 py-1 rounded-md hover:bg-transparent hover:text-black hover:border hover:border-black transition-colors"
              >
                Edit Article
              </button>
            )}
          </div> */}

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

        <div
          id="servicesSection"
          className="flex flex-col items-start gap-[14px]"
        >
          <div className="flex flex-col items-start gap-[14px  px-[25px]">
            <h3>Our Services</h3>
            <p>What we offer</p>
            <div className="w-[80px] h-[2px] dividerLine"></div>
          </div>

          <ImageSlider />


          <div
            id="aboutFounderSection"
            className="flex flex-col items-start my-[100px]  px-[25px] gap-[14px]"
          >
            <h3>Founder</h3>
            <div className="w-[80px] h-[2px] dividerLine"></div>

            <div className="relative">
              <p>
                Sulaman Shah is the founder and CEO of Terrapin Crypto Solutions, LLC, a Bitcoin-focused company advancing decentralized infrastructure, environmental sustainability, and blockchain innovation. With expertise in Environmental Science and Biological Research, Sulaman brings scientific precision to his investment and mining strategies, having traveled to over 20 countries across 4 continents, which brings a global perspective to Terrapin Crypto Solutions.
                <br /> <br />
                In 2024, Terrapin began mining Bitcoin with a 100% carbon-neutral footprint, with over 70% of its hashrate powered by hydropower. Sulaman's journey began in 2019 with options and stock trading, where he achieved notable success that allowed him to acquire the company's first ASIC (Application-Specific Integrated Circuit) miner on March 16, 2024, marking the start of our Bitcoin mining operations.
                <br /> <br />
                Through a strategic partnership with Meta-Luban, Sulaman serves as the exclusive North American ambassador, providing clients with top-tier access to ASIC sales, hosting, repairs, and mining site development from leading manufacturers. His early interest in sound money began with buying gold and silver in middle school—shaping a lifelong commitment to financial sovereignty and long-term value.
                <br /> <br />
                Sulaman advises the U.S. Senate on the capabilities, use cases, and economic benefits of Bitcoin and blockchain technology for American constituents and businesses. He also advises Bitcoin Timber, a renewable-powered mining sawmill in Guyana; Carbon Country, an eco-aligned mining venture; and contributes to Bitcoin District, a grassroots Bitcoin education and community hub in the Washington, D.C. metro area.
                <br /> <br />
                A dedicated advocate for inclusion and sustainability, Sulaman is an Eagle Scout, Vigil Honor recipient, and fluent in French. His ongoing research explores Bitcoin in developing regions, bee-integrated mining models, and broader applications of blockchain for environmental and social impact.
              </p>
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

            <Link
              href="https://calendly.com/ceo-terrapincrypto/30min?back=1&month=2024-09"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-black hover:border hover:border-black transition-colors"
            >
              Book A Call
            </Link>

            <div className="my-[20px] w-[100%] border-r-2 overflow-hidden relative flex flex-col items-center justify-center">
              <div className="overlayDark absolute"></div>

              <img
                className="border-r-2 h-[500px] w-full object-cover md:object-[center_-250px] object-center"
                src="/SullyFounder.jpg"
                alt="newsarticle"
              />
            </div>
          </div>
          <div
            id="pricingSection"
            className="flex flex-col items-start  px-[25px] gap-[14px]"
          >
         
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      src: "/images/mining_machines.png",
      name: "Bitcoin Mining",
      description:
        "Dedicated to supporting the Bitcoin network by processing transactions in real time.",
    },
    {
      src: "/images/AI_one.png",
      name: "Crypto Consultation",
      description:
        "Cryptocurrency Consulting: Expert guidance on cryptocurrency investments, security, and blockchain integration.",
    },
    {
      src: "/images/Eth_Logo.png",
      name: "Web3 Consultation",
      description:
        "Comprehensive support for users at all levels, from beginners to advanced, covering privacy, security, and advanced blockchain applications.",
    },
    {
      src: "/images/Bitcoin_Logo.png",
      name: "Blockchain Development",
      description:
        " Custom blockchain applications, token development, and other tailored solutions.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  return (
    <div className="relative w-full overflow-hidden my-[100px]">
      <div
        className={`flex transition-transform duration-300 ease-in-out ${
          isMobile ? "" : "gap-[10px]"
        }`}
        style={{
          transform: `translateX(-${
            currentIndex * (isMobile ? 100 : 100 / 3)
          }%)`,
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className={`${
              isMobile ? "w-full" : "w-auto"
            } h-[500px] relative flex-shrink-0 group`}
          >
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-10 absolute bg-black/50 top-0 left-0 w-full h-full items-center justify-center flex">
              <span className="text-[20px] font-bold text-white">
                {service.description}{" "}
              </span>
            </div>

            <Image
              className="h-[100%] servicesImage object-cover"
              src={service.src}
              alt={`Slide ${index + 1}`}
              width={500}
              height={500}
            />

            <div className="flex p-[10px] items-end justify-end absolute bottom-0 text-white">
              <p className="mt-2 text-center font-semibold">{service.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute clickBtns left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute clickBtns right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
}
