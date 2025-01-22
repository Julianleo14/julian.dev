'use client'
import styles from "@/app/home.module.css"
import React from "react";
import Image from "next/image";


export default function Home() {


    return (
        <div className={styles.homeContainer}>
            <section className={styles.homeAbout}>
                <article className={styles.homeAbout_title}>
                    <Image className={styles.profilePic}
                           src={'/profile.jpg'}
                           alt={"Profile picture"}
                           width={50}
                           height={50}
                           sizes="100vw"
                    />
                    <h2>-About Me-</h2>
                </article>
                <article className={styles.homeAbout_text}>
                    Front-End Developer with experience in React, Next.js, and TypeScript. I enjoy solving
                    challenges, creating user-friendly applications, and constantly learning new technologies. My focus
                    is on clean code, modern design, and delivering high-quality results.

                </article>
            </section>
            <section className={styles.homeCards}>
                Aquí van las cards
            </section>
        </div>

    );
};


