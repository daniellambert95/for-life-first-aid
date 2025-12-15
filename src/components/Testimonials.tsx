export default function Testimonials() {
    const testimonials = [
        "Very informative, easy to process, Cathy is well trained and very professional",
        "Excellent course - by far the best I've done!",
        "Cathy is a clear and excellent instructor - Great session",
        "Highly enjoyable course, very clear content, videos very enjoyable, suitable amount of practical content. Would highly recommend",
        "Cathy was fantastic - very clear and extremely knowledgeable",
        "Very clear, concise: Instruction was informative & excellent. I was rusty and am delighted with the class"
    ];

    return (
        <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-[--background-light]">
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#66bb6a] text-center mb-12 sm:mb-16 lg:mb-20">
                    What Our Students Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <p className="text-gray-600 italic leading-relaxed text-sm sm:text-base">
                                "{testimonial}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
