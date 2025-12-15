import Image from "next/image";

export default function Contact() {
    return (
        <section id="contact" className="bg-white">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col lg:flex-row items-stretch lg:min-h-[700px]">
                    {/* Text Content - appears first on mobile/tablet, first on desktop */}
                    <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24 order-1">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 sm:mb-12 lg:mb-16 text-[#66bb6a]">
                            Contact Us
                        </h2>

                        <div className="space-y-6 sm:space-y-8 text-gray-600">
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
                                Inquiries/bookings:
                            </p>

                            <div className="space-y-4 sm:space-y-6">
                                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
                                    <a href="tel:0868961087" className="hover:text-[#66bb6a] transition-colors">
                                        Cathy Vard 086 896 1087
                                    </a>
                                </p>

                                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
                                    <a href="mailto:cathyvard@gmail.com" className="hover:text-[#66bb6a] transition-colors underline">
                                        cathyvard@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image - appears second on mobile/tablet, second on desktop */}
                    <div className="w-full lg:w-1/2 order-2 relative min-h-[400px] lg:min-h-[700px]">
                        <Image
                            src="/assets/image_5.webp"
                            alt="Hands holding heart with heartbeat"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
