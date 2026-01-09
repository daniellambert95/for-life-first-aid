import Image from "next/image";

export default function InstructorBio() {
    return (
        <section id="instructor" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
                    {/* Image - First on mobile, First on desktop */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center order-1">
                        <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] aspect-square">
                            {/* Placeholder for instructor photo */}
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#66bb6a] to-[#4db6ac] flex items-center justify-center shadow-lg">
                                <div className="text-center">
                                    <div className="text-white text-6xl sm:text-7xl mb-4">👤</div>
                                    <p className="text-white text-sm sm:text-base font-semibold px-4">
                                        Photo Coming Soon
                                    </p>
                                </div>
                            </div>
                            {/* Uncomment below and replace with actual image path when photo is available */}
                            {/* <Image
                                src="/assets/instructor-photo.jpg"
                                alt="Cathy Vard - First Aid Instructor"
                                fill
                                className="object-cover rounded-full shadow-lg"
                            /> */}
                        </div>
                    </div>

                    {/* Text Content - Second on mobile, Second on desktop */}
                    <div className="w-full lg:w-1/2 order-2">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6 sm:mb-8 text-[#66bb6a]">
                            Meet Your <span className="text-[#4db6ac]">Instructor</span>
                        </h2>

                        <div className="space-y-4 sm:space-y-5">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                                Cathy Vard
                            </h3>

                            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                                Cathy is a certified First Aid Instructor dedicated to providing high-quality,
                                life-saving training. With extensive experience in emergency care education,
                                she brings both professionalism and a genuine passion for empowering others
                                with essential first aid skills.
                            </p>

                            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                                As a PHECC (Pre-Hospital Emergency Care Council) certified instructor, Cathy
                                ensures that every student receives comprehensive, up-to-date training in
                                Cardiac First Response. Her teaching approach is interactive, engaging, and
                                focused on building confidence so you can act decisively in an emergency.
                            </p>

                            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                                With small class sizes limited to just six people, Cathy provides personalized
                                attention and hands-on practice, ensuring every participant masters the
                                critical skills needed to save a life.
                            </p>

                            <div className="pt-4">
                                <p className="text-gray-800 font-semibold text-base sm:text-lg">
                                    Contact Cathy:
                                </p>
                                <p className="text-gray-600 text-sm sm:text-base mt-2">
                                    <span className="font-medium">Phone:</span> +353-86-896-1087
                                </p>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    <span className="font-medium">Email:</span> cathyvard@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
