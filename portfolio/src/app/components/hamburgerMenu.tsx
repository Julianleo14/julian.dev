import headerStyles from '@/app/header.module.css'
import React, {useState} from "react";

export default function HamburgerMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div className={headerStyles.hamburgerContainer}>
            <div className={headerStyles.hamburgerMenu}>
                <input type="checkbox"
                       role="button"
                       aria-label="Display the menu"
                       className={headerStyles.menuIcon}
                       onChange={toggleMenu}
                />

            </div>
            <div className={headerStyles.hamburgerMenuModal}
            style={{display:isMenuOpen ? "block" : "none"}}>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/experience">EXPERIENCE</a></li>
                    <li><a>PROJECTS</a></li>
                </ul>
            </div>
        </div>
)
}