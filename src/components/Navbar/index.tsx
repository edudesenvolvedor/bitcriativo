"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import imageBrand from "@/assets/images/logo.png";

type Props = {
    children: ReactNode;
};

const Navbar = ({ children }: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasBackground, setHasBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasBackground(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <nav
            className={`z-40 fixed top-0 left-0 w-full transition-all duration-300 p-4 ${
                hasBackground ? "bg-white shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="container flex justify-between items-center py-2">
                <Link href="/" className="text-[#101828] text-2xl flex space-x-2">
                    <Image src={imageBrand} alt={"logo"} width={34} height={34} />

                    <span>Bit <span className={"text-[#FB2C36]"}>Criativo</span></span>
                </Link>
                <div
                    className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all md:flex md:items-center space-x-8 ${
                        isMenuOpen ? "block" : "hidden"
                    }`}
                >
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
                        {children}
                    </ul>

                    <Button>
                        Quero um Orçamento
                    </Button>
                </div>
                <button className="md:hidden text-[#101828] focus:outline-none" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export { Navbar };
