import Image from "next/image";

export default function Hero() {
    return (
        <header className="relative h-screen max-h-[730px] overflow-hidden bg-white">
            {/* Background Image - Responsive for mobile and desktop */}
            <div className="absolute inset-0 w-full h-full">
                {/* Mobile Background */}
                <Image
                    src="/assets/image_12.webp"
                    alt="CPR Training Background"
                    fill
                    className="object-cover object-center md:hidden"
                    priority
                />
                {/* Desktop Background */}
                <Image
                    src="/assets/image_1.webp"
                    alt="CPR Training Background"
                    fill
                    className="object-cover object-center hidden md:block"
                    priority
                />
                {/* Overlay for better text readability - Mobile only */}
                <div className="absolute inset-0 bg-white/80 md:bg-transparent"></div>
            </div>

            {/* Content Container - Vertically Centered */}
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-5 w-full">
                    <div className="max-w-md md:max-w-lg relative mx-auto md:mx-0 text-center md:text-left">

                        {/* Logo - Bigger, no background */}
                        <div className="mb-8">
                            <Image
                                src="/assets/4_life_logo.webp"
                                alt="For Life First Aid"
                                width={280}
                                height={112}
                                className="h-28 w-auto"
                            />
                        </div>

                        {/* Course Title */}
                        <h1 className="text-3xl md:text-4xl text-gray-600 font-semibold mb-8">
                            Cardiac First Responder <span className="font-normal">Course</span>
                        </h1>

                        {/* PHECC Badge and Logo - Side by side */}
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-8 flex-wrap">
                            <div className="inline-block bg-transparent border-2 border-[#66bb6a] text-[#66bb6a] px-6 py-2 rounded-full font-semibold text-sm">
                                PHECC Certified
                            </div>

                            <Image
                                src="/assets/pre-hospital-emergency-care.webp"
                                alt="Pre-Hospital Emergency Care Council"
                                width={200}
                                height={134}
                                className="h-32 md:h-40 w-auto"
                            />
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center">
                            <a
                                href="#contact"
                                className="inline-block bg-[#66bb6a] hover:bg-[#5aaa5e] text-white px-12 py-5 rounded-full font-bold text-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
                            >
                                Book Your Course Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
