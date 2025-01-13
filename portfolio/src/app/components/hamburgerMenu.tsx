import headerStyles from '@/app/header.module.css'
import {IoMdClose, IoMdMenu} from 'react-icons/io'

export default function HamburgerMenu() {
    return (
        <div className={headerStyles.hamburgerContainer}>
            <div className={headerStyles.hamburgerMenu}>
                <IoMdMenu className={headerStyles.hamburgerIcon}/>
                <IoMdClose className={headerStyles.hamburgerClose}/>
            </div>
            <div className={headerStyles.hamburgerMenuModal}>
                Aqui va el menú
            </div>
        </div>
    )
}