"use client"

import Link from "next/link"

interface GlobalButtonProps {
    href: string
}

export default function GlobalButton({ href }: GlobalButtonProps) { 
return ( 
    <Link 
    href={href}
    target="_blank"
    className="mt-[25px] max-w-[190px] flex items-center justify-center bg-black text-white px-4 py-2 rounded-md hover:bg-transparent hover:border hover:border-black hover:text-black transition-all duration-300">
      BOOK A CALL
    </Link>
)


}