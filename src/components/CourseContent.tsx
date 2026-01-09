import Image from "next/image";

export default function CourseContent() {
    return (
        <section id="course-content" className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                {/* Two Column Layout for Course Content and Image */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20 mb-16 lg:mb-24">
                    {/* Text Content - appears first on mobile/tablet, first on desktop */}
                    <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-8 sm:mb-10 text-[#66bb6a]">
                            Course <span className="text-[#4db6ac]">Content:</span>
                        </h2>
                        <ul className="space-y-4 sm:space-y-5">
                            {[
                                "CPR (cardiopulmonary resuscitation) adults, children and infants.",
                                "AED (Automated external defibrillator )",
                                "Heart Attack v Cardiac Arrest",
                                "Administration of Aspirin",
                                "Choking: Adults, children and Infants",
                                "Stroke management.",
                                "Recovery position."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 sm:gap-4">
                                    <span className="text-gray-600 text-base sm:text-lg">•</span>
                                    <span className="text-gray-600 text-sm sm:text-base md:text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image - appears second on mobile/tablet, second on desktop */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <Image
                            src="/assets/machine.webp"
                            alt="AED Machine"
                            width={500}
                            height={500}
                            className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Full Width Course Details Section */}
                <div id="details" className="w-full mb-16 lg:mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-8 sm:mb-10 text-[#66bb6a]">
                        Course <span className="text-[#4db6ac]">Details:</span>
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg max-w-5xl">
                        The Cardiac first responder course is approx 3.5 hours long. The course is instructor and video led, it is very interactive and engaging . Students will get lots of practical work using our training manikins and Automated External Defibrillators. Classes are very small max six people ensuring you get the highest level of supervised training at all times.
                    </p>
                </div>

                {/* Certificate Renewal Section */}
                <div className="w-full">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-8 sm:mb-10 text-[#66bb6a]">
                        Certificate <span className="text-[#4db6ac]">Renewal</span>
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg max-w-5xl">
                        All Pre-Hospital Emergency Care Council (PHECC) Cardiac First Responder (CFR) certificates are valid for two years. If your CFR certificate has expired or is due for renewal, you must complete a refresher course to remain certified.
                    </p>
                </div>
            </div>
        </section>
    );
}
