import Image from "next/image";

export default function Location() {
    return (
        <section id="location" className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/image_3.webp"
                    alt="Dundrum Street View"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* White Gradient Overlay - fades from white on left to transparent on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-40% to-transparent"></div>

            {/* Content */}
            <div className="relative h-full min-h-[600px] lg:min-h-[700px] flex items-center">
                <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-8 sm:mb-10 text-[#66bb6a] italic">
                            Course Location:
                        </h2>

                        <div className="space-y-6 sm:space-y-8 text-gray-600">
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed italic">
                                Course can be run in your own premises, school, office, or at our location in <span className="font-bold text-gray-800">Dundrum.</span>
                            </p>

                            <div className="space-y-4">
                                <p className="text-base sm:text-lg md:text-xl leading-relaxed italic">
                                    Dundrum is accessible via <span className="font-bold text-gray-800">luas</span> green line or <span className="font-bold text-gray-800">Dublin bus.</span>
                                </p>

                                <p className="text-sm sm:text-base md:text-lg italic text-gray-500">
                                    Routes: (14 44 750 S6 74 161 44D)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
