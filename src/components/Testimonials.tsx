'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Testimonials() {
    const testimonials = [
        "Very informative, easy to process, Cathy is well trained and very professional",
        "Excellent course - by far the best I've done!",
        "Cathy is a clear and excellent instructor - Great session",
        "Highly enjoyable course, very clear content, videos very enjoyable, suitable amount of practical content. Would highly recommend",
        "Cathy was fantastic - very clear and extremely knowledgeable",
        "Very clear, concise: Instruction was informative & excellent. I was rusty and am delighted with the class",
        "I'm so glad I attended your class. So informative. You're a wonderful teacher..clear, encouraging and inspiring. Thank you",
        "Very comprehensive and beautifully delivered by Cathy",
        "Cathy is a brilliant teacher. Feel very confident after training and completing the course. Highly recommend the training",
        "Excellent teacher - will be telling others to do this life-saving course",
        "I thought Cathy was a very clear instructor. I especially benefited from the CPR instruction and video"
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            slidesToScroll: 1,
            containScroll: 'trimSnaps',
        },
        [
            Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                playOnInit: true,
            }),
        ]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

    const onInit = useCallback(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        onInit();
        onSelect();

        emblaApi.on('reInit', onInit);
        emblaApi.on('reInit', onSelect);
        emblaApi.on('select', onSelect);

        return () => {
            emblaApi.off('reInit', onInit);
            emblaApi.off('reInit', onSelect);
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onInit, onSelect]);

    return (
        <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-[--background-light]">
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#66bb6a] text-center mb-12 sm:mb-16 lg:mb-20">
                    What Our Students Say
                </h2>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex touch-pan-y touch-pinch-zoom -ml-4 sm:-ml-6 lg:-ml-8">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4 sm:pl-6 lg:pl-8 min-w-0"
                                >
                                    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-5 h-5 fill-[#66bb6a]"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 italic leading-relaxed text-sm sm:text-base">
                                            &ldquo;{testimonial}&rdquo;
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#66bb6a] hover:bg-[#66bb6a] hover:text-white transition-all duration-300"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#66bb6a] hover:bg-[#66bb6a] hover:text-white transition-all duration-300"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-8 sm:mt-10" role="tablist" aria-label="Testimonial navigation">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                index === selectedIndex
                                    ? 'bg-[#66bb6a] scale-125'
                                    : 'bg-gray-300 hover:bg-[#66bb6a]/50'
                            }`}
                            role="tab"
                            aria-selected={index === selectedIndex}
                            aria-label={`Go to testimonial group ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
