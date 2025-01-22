'use client';
import headerStyles from "@/app/header.module.css";
import {usePathname} from "next/navigation";
import Image from "next/image";
import HamburgerMenu from "@/app/components/hamburgerMenu";

export default function MyHeader() {
    const path = usePathname();

    return (
        <>
            {path === "/" ? (
                <div className={headerStyles.header_container_home}>
                    <ul className={headerStyles.header_menu}>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/experience">EXPERIENCE</a></li>
                        <li><a>PROJECTS</a></li>
                    </ul>
                    <div className={headerStyles.header_banner}>
                        <div className={headerStyles.header_title}>
                            <h1>Julian Garcia</h1>
                            <h2>&lt; Frontend Developer /&gt;</h2>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={headerStyles.header_container_general}>
                    <ul className={headerStyles.header_menu}>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/experience">EXPERIENCE</a></li>
                        <li><a>PROJECTS</a></li>
                    </ul>


                </div>
            )}
            <HamburgerMenu/>
        </>
    );
}
