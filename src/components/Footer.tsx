import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#66bb6a] to-[#4db6ac] text-white py-12 sm:py-16">
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-10 sm:mb-12">
                    {/* Logo & Description */}
                    <div className="space-y-4">
                        <Image
                            src="/assets/4_life_logo.webp"
                            alt="For Life First Aid Logo"
                            width={150}
                            height={60}
                            className="brightness-0 invert h-14 sm:h-16 w-auto"
                        />
                        <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-sm">
                            Providing life-saving CPR and first aid training to help you respond confidently in medical emergencies.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4">Contact Information</h3>
                        <div className="space-y-3 text-white/90 text-sm sm:text-base">
                            <p>
                                <span className="font-semibold">Instructor:</span> Cathy Vard
                            </p>
                            <p>
                                <span className="font-semibold">Phone:</span>{" "}
                                <a href="tel:0868961087" className="hover:text-white transition-colors">
                                    086 896 1087
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold">Email:</span>{" "}
                                <a href="mailto:cathyvard@gmail.com" className="hover:text-white transition-colors">
                                    cathyvard@gmail.com
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold">Location:</span> Dundrum D16H7E2, Dublin
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4">Quick Links</h3>
                        <nav className="flex flex-col space-y-3 text-white/90 text-sm sm:text-base">
                            <Link href="#about" className="hover:text-white transition-colors">
                                About
                            </Link>
                            <Link href="#course-content" className="hover:text-white transition-colors">
                                Course Content
                            </Link>
                            <Link href="#details" className="hover:text-white transition-colors">
                                Course Details
                            </Link>
                            <Link href="#testimonials" className="hover:text-white transition-colors">
                                Testimonials
                            </Link>
                            <Link href="#location" className="hover:text-white transition-colors">
                                Location
                            </Link>
                            <Link href="#contact" className="hover:text-white transition-colors">
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 pt-6 sm:pt-8 space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/80">
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                            <p>
                                &copy; {new Date().getFullYear()} For Life First Aid. All rights reserved.
                            </p>
                            <span className="hidden sm:inline">·</span>
                            <Link href="/privacy" className="hover:text-white transition-colors underline">
                                Privacy Policy
                            </Link>
                        </div>
                        <p>
                            PHECC Approved Cardiac First Responder Course
                        </p>
                    </div>
                    <div className="text-center">
                        <a
                            href="https://www.siteandsight.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white/70 hover:text-white transition-colors"
                        >
                            Web design by Site&Sight
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
