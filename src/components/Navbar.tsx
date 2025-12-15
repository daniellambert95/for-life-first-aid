"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-[#66bb6a] to-[#4db6ac] text-white py-4 sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/assets/4_life_logo_landscape.webp"
                            alt="For Life First Aid Logo"
                            width={120}
                            height={31}
                            className="h-7 md:h-10 w-auto brightness-0 invert"
                        />
                    </Link>

                    {/* Desktop Tagline */}
                    <div className="hidden md:block text-sm tracking-wider font-medium uppercase">
                        THEIR LIFE IN YOUR HANDS
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#course-content" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors">
                                    Course Content
                                </Link>
                            </li>
                            <li>
                                <Link href="#details" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors">
                                    Details
                                </Link>
                            </li>
                            <li>
                                <Link href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors">
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link href="#location" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors">
                                    Location
                                </Link>
                            </li>
                            <li className="mt-4">
                                <Link
                                    href="#contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="bg-white text-[#66bb6a] px-8 py-4 rounded-full font-bold text-center block hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
                                >
                                    Book Now
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
