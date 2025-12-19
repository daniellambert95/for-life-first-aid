import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="bg-[--background-light]">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col lg:flex-row items-stretch lg:min-h-[600px]">
                    {/* Image - appears first on desktop, second on mobile/tablet */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <Image
                            src="/assets/baby_image.webp"
                            alt="Infant CPR Training"
                            width={1200}
                            height={1200}
                            className="w-full h-full object-cover min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]"
                        />
                    </div>

                    {/* Text Content - appears first on mobile/tablet, second on desktop */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-12 order-1 lg:order-2">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-[#66bb6a]">
                            What we Do
                        </h2>
                        <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
                            If a friend, loved one, work colleague or a member of the public, stopped breathing, or collapsed in front of you, would you know how to help them? If someone was choking, having a cardiac arrest, heart attack, or stroke, what would you do?
                        </p>
                        <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
                            In this CFR ( Cardiac First Responder ) PHECC approved course you will learn how to manage all these life threatening emergencies.
                        </p>

                        {/* Quote Box */}
                        <div className="my-4 sm:my-6 md:my-8 italic text-[#66bb6a] text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-relaxed font-light">
                            <blockquote>
                                "Providing you with life saving skills so you can respond to medical emergencies"
                            </blockquote>
                        </div>

                        {/* Course Fee & Certification */}
                        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white rounded-lg border-l-4 border-[#66bb6a]">
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                                The course fee is <span className="font-semibold text-[#66bb6a]">€85</span> which includes PHECC (Pre Hospital Emergency Care Council) Certification valid for two years.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
