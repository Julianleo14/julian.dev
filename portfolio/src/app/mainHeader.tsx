import homeStyles from '@/app/home.module.css'
import headerStyles from '@/app/header.module.css'


export default function MainHeader() {

    return (
        <div className={homeStyles.homeHeader}>

            <div className={headerStyles.header_container}>
                <ul className={headerStyles.header_menu}>
                    <li><a href="/"> HOME</a></li>
                    <li><a href="/experience"> EXPERIENCE</a></li>
                    <li><a href="/projects">PROJECTS</a></li>
                </ul>
            </div>
                <div>
                    <div className="header_title">
                        <h1>Julian Garcia</h1>
                        <h2>&lt; Frontend Developer /&gt;</h2>
                    </div>
                </div>
        </div>
    )

}