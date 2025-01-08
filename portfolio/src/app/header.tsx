import './header.css';
import {FaInfoCircle, FaLink} from 'react-icons/fa';

export default function MyHeader() {
    return (
        <div className="header_container">
            <div className="header_title">
                <h1>Julian Garcia</h1>
                <h2>&lt; Frontend Developer /&gt;</h2>
            </div>
            <ul className="header_menu">
                <li><a href="/"> HOME</a></li>
                <li><a href="/experience"> EXPERIENCE</a></li>
                <li><a>PROJECTS</a></li>
            </ul>
            <div className="header_info" tabIndex={0}>
                <FaInfoCircle size={25} color="white"/>
                {/* Tooltip */}
                <div className="tooltip">
                    <p>Techs and libraries in this component:</p>
                    <ul>
                        <li>React, TypeScript, CSS (Flexbox), HTML, <a href="https://react-icons.github.io/react-icons/"
                                                                   target="_blank" rel="noopener noreferrer">
                            React-Icons <FaLink size={10} color="white"/>
                        </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}
