"use client";

import { useState, useEffect } from "react";

import {
    useAccount,
    useBalance,
    useSendTransaction,
    usePrepareTransactionRequest,
    useSignMessage,
    useWaitForTransactionReceipt,
    useWriteContract,
  } from "wagmi";
  
  import { useWeb3Modal } from "@web3modal/wagmi/react";

interface NavbarProps {
  handleConnect: () => void;
}

export default function Navbar({ handleConnect }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isConnected, address } = useAccount();
  const [connectedAddress, setConnectedAddress] = useState<string | undefined>(
    undefined
  );
  const { open } = useWeb3Modal();


  const truncateAddress = (address: string) => {
    return `${address.slice(0, 5)}...`;
  };

  useEffect(() => {
    if (isConnected && address) {
      const truncatedAddress = truncateAddress(address);
      setConnectedAddress(truncatedAddress);
      console.log("Connected address:", truncatedAddress);
    }
  }, [isConnected, address]);

  return (
    <nav className={`${isScrolled ? "bg-black" : ""}  w-full h-[50px]  z-50`}>
      <div className="flex items-start justify-between w-full  p-4 mx-auto">
        <div className="flex items-center">
          <img src="/Terra_Pin_Logo.png" alt="logo" />
        </div>


        <div className="flex items-center gap-[10px]">
          <button
          onClick={handleConnect}
          className="bg-transparent border border-black text-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors">
            {address ? connectedAddress : "Connect Wallet"}
          </button>

          <button className="bg-black hidden md:flex text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-black hover:border hover:border-black transition-colors">
            Book A Call
          </button>
        </div>
      </div>
    </nav>
  );
}
