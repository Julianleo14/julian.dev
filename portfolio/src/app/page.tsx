'use client'
import styles from "@/app/home.module.css"
import React from "react";


export default function Home() {

    const [activeTab, setActiveTab] = React.useState <number>(0);
    const tabNames = ["ABOUT ME", "HOBBIES", "SKILLS"]
    const handleTabChange = (tabIndex: number) => {
        setActiveTab(tabIndex);
    };

    return (
        <div>
            Probando 2
        </div>
        // <div className={styles.homeContainer}>
        //     <div className={styles.tabsContainer}>
        //         <section className={styles.tabs}>
        //             {tabNames.map((tab, index) => {
        //                 return (
        //                     <label key={index}
        //                            className={activeTab === index ? styles.labelChecked : styles.label}
        //                     >
        //                         {tab}
        //                         <input
        //                             type="radio"
        //                             id={`tab${index}`}
        //                             name="tab"
        //                             className={styles.radioInput}
        //                             checked={activeTab === index}
        //                             onChange={() => handleTabChange(index)}
        //                         />
        //                     </label>
        //                 );
        //             })}
        //
        //         </section>
        //         <section className={styles.textContainer}> Aqui va el texto</section>
        //
        //     </div>
        //     <div className={styles.profExpect}>
        //         <h1> Professional Expectations</h1>
        //
        //         <p>
        //             Aqui va el texto
        //         </p>
        //     </div>
        // </div>
    );
};


