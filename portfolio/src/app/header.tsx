'use client';
import headerStyles from "@/app/header.module.css";
import {usePathname} from "next/navigation";

export default function MyHeader() {


    return (
        <div className={headerStyles.header_container_home}>

            <div className={headerStyles.header_banner}>
                <div className={headerStyles.header_title}>
                    <h1>Julian Garcia</h1>
                    <h2>&lt; FullStack Developer /&gt;</h2>
                </div>
            </div>
        </div>

    );
}
