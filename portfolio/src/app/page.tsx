'use client'
import styles from "@/app/home.module.css"
import React from "react";


export default function Home() {

        const [activeTab, setActiveTab] = React.useState <number>(1);

        const handleTabChange = (tabIndex: number) => {
            setActiveTab(tabIndex);
        };

        return (
            <div className={styles.detailsContainer}>
                <div className={styles.tabs}>
                    {["FIRST TAB", "SECOND TAB", "THIRD TAB", "FOURTH TAB", "FIFTH TAB", "SIXTH TAB"].map((tab, index) => {
                        const tabIndex = index + 1;
                        return (

                                <label key={tabIndex} htmlFor={`tab${tabIndex}`} className={styles.label}>
                                    {tab}
                                    <input
                                        type="radio"
                                        id={`tab${tabIndex}`}
                                        name="tab"
                                        className={styles.radioInput}
                                        checked={activeTab === tabIndex}
                                        onChange={() => handleTabChange(tabIndex)}
                                    />
                                </label>
                        );
                    })}
                    <div
                        className={styles.marker}
                        style={{transform: `translateY(calc(calc(50% / 6) * ${activeTab - 1}))`}}
                    >
                        <div className={styles.top}></div>
                        <div className={styles.bottom}></div>
                    </div>
                </div>
            </div>
        );
    };


