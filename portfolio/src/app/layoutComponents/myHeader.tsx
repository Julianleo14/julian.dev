'use client';
import Image from "next/image";
import MobileMenu from "@/app/layoutComponents/headerMenu/mobileMenu";
import "@/app/globals.css"
import "@/app/layoutComponents/header.css"

export default function MyHeader() {
    return (
        <div
            className="headerContainer"
        >
            <Image src='/julian-garcia-logo.webp'
                   alt="Julian Logo"
                   width={0}
                   height={0}
                   sizes="100vw"
                   style={{width: 'auto', height: '50px'}}/>
            <MobileMenu/>

        </div>
    )
}