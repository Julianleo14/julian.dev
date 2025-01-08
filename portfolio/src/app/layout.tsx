import type {Metadata} from "next";
import {nunito} from "@/app/fonts/font";
import "./globals.css";
import MyHeader from "@/app/header";
import Home from "@/app/page";

export const metadata: Metadata = {
    title: "Julian's Portfolio",
    description: "Front end portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${nunito.className} antialiased`}>
        <header>
            <MyHeader/>
        </header>
        <main>
            {children}
        </main>
        <footer>

        </footer>
        </body>
        </html>
    );
}
