'use client';
import { useEffect, useState } from "react";
import "@/app/globals.css";
import "../header.css";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
    const [menuState, setMenuState] = useState(false);
    const path = usePathname();

    const onClickMenu = () => {
        setMenuState(prev => !prev);
    };

    useEffect(() => {
        setMenuState(false); // Cierra el menú cuando cambia la ruta
    }, [path]);

    return (
        <nav onClick={onClickMenu} role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>

                {/* Aplica la clase en función del estado */}
                <ul className={menuState ? "menuOp" : "menuCl"} id="menu">
                    <a href="//localhost:3000/about" target="_blank" rel="noopener noreferrer">
                        <li>About Me :)</li>
                    </a>
                    <a href="/experience">
                        <li>Experience</li>
                    </a>
                    <a href="/project1">
                        <li>Project 1</li>
                    </a>
                </ul>
            </div>
        </nav>
    );
}
