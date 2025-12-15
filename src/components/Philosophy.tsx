import Image from "next/image";

export default function Philosophy() {
    return (
        <section id="philosophy" className="bg-white">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col lg:flex-row items-stretch lg:min-h-[600px]">
                    {/* Text Content - appears first on mobile/tablet, first on desktop */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-12 order-1">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-[#66bb6a]">
                            Philosophy
                        </h2>
                        <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
                            Our aim is to create a very relaxed environment, so you have the most enjoyable experience while learning these very important life saving skills. We give our total commitment to delivering you the best training, so when you finish the course you will have confidence in your ability to save a life!
                        </p>
                    </div>

                    {/* Image - appears second on mobile/tablet, second on desktop */}
                    <div className="w-full lg:w-1/2 order-2">
                        <Image
                            src="/assets/machine_2.webp"
                            alt="CPR Training Equipment"
                            width={1200}
                            height={1200}
                            className="w-full h-full object-cover min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
