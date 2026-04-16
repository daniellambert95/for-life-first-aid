import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best CPR Courses in Dublin: What to Look For Before Booking | For Life First Aid",
    description: "Not all CPR courses are the same. Learn what to look for before booking a CPR course in Dublin — certification, class size, practical training, and more.",
    keywords: ["best CPR course Dublin", "CPR course Dublin", "PHECC certified CPR Dublin", "cardiac first responder Dublin", "first aid course Dublin", "CPR training Dublin 2026"],
    alternates: {
        canonical: "https://www.cardiacfirstrespondercourse.ie/blog/best-cpr-courses-in-dublin",
    },
    openGraph: {
        title: "Best CPR Courses in Dublin: What to Look For Before Booking | For Life First Aid",
        description: "Not all CPR courses are the same. Learn what to look for before booking a CPR course in Dublin — certification, class size, practical training, and more.",
        type: "article",
        locale: "en_IE",
        siteName: "For Life First Aid",
    },
};

export default function BestCPRCoursesInDublin() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20">

                <Link
                    href="/blog"
                    className="inline-flex items-center text-[#66bb6a] hover:text-[#5aaa5e] mb-8 transition-colors"
                >
                    Back to Blog
                </Link>

                <p className="text-sm text-gray-500 mb-4">Published by For Life First Aid</p>

                <h1 className="text-4xl sm:text-5xl font-bold text-[#66bb6a] mb-6 leading-tight">
                    Best CPR Courses in Dublin: What to Look For Before Booking
                </h1>

                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    If you are searching for the best CPR course in Dublin, you will quickly realise there are plenty of options. But not all courses are the same — and when it comes to life-saving skills, choosing the right one matters. Here is what to look for before booking.
                </p>

                <hr className="border-gray-200 mb-10" />

                <div className="prose prose-lg max-w-none space-y-10 text-gray-700">

                    {/* 1. Certification */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Choose a Recognised Certification (PHECC)</h2>
                        <p>The most important factor is certification. In Ireland, the gold standard is <strong>PHECC (Pre-Hospital Emergency Care Council)</strong>.</p>
                        <p className="mt-3">A PHECC-certified course ensures:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>A nationally recognised qualification</li>
                            <li>Up-to-date training standards</li>
                            <li>Credibility for workplace compliance</li>
                        </ul>
                        <p className="mt-3">
                            Always check that the course is PHECC approved. Read more about{" "}
                            <Link href="/blog/how-long-does-cpr-certificate-last" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how long a CFR certificate lasts in Ireland
                            </Link>
                            .
                        </p>
                    </section>

                    {/* 2. Class size */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Look for Small Class Sizes</h2>
                        <p>Class size has a huge impact on your learning experience:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Large classes — less hands-on time per person</li>
                            <li>Small classes — more practice and personal feedback</li>
                        </ul>
                        <p className="mt-3">Ideally, choose a course with small groups of 6 people or fewer. This gives you more time practising CPR, more confidence, and better instructor support.</p>
                    </section>

                    {/* 3. Hands-on training */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Hands-On Practical Training</h2>
                        <p>CPR is a physical skill — you need to practise it. A good course should include:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>
                                <Link href="/blog/how-to-perform-cpr" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                    CPR practice
                                </Link>{" "}
                                on training manikins
                            </li>
                            <li>
                                <Link href="/blog/how-to-use-a-defibrillator" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                    AED (defibrillator) practice
                                </Link>{" "}
                                with real equipment
                            </li>
                            <li>Real-life emergency scenarios</li>
                        </ul>
                        <p className="mt-3">Avoid courses that are mostly theory-based — confidence comes from doing, not just reading.</p>
                    </section>

                    {/* 4. Instructor */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Experienced Instructor</h2>
                        <p>The instructor makes a big difference. Look for someone who is:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Certified and experienced</li>
                            <li>Clear and engaging</li>
                            <li>Focused on building your confidence</li>
                        </ul>
                        <p className="mt-3">A great instructor will make the course enjoyable and easy to follow — even if you have never done first aid before.</p>
                    </section>

                    {/* 5. Course length */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Course Length and Content</h2>
                        <p>Most CPR and CFR courses in Dublin are around 3 to 4 hours long and should cover:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>CPR for adults, children, and infants</li>
                            <li>AED use</li>
                            <li>Choking, stroke, and heart attack response</li>
                        </ul>
                        <p className="mt-3">
                            Make sure the course covers all essential life-saving skills. See what is included in our{" "}
                            <Link href="/#course-content" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                Cardiac First Responder course content
                            </Link>
                            .
                        </p>
                    </section>

                    {/* 6. Location */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Location and Convenience</h2>
                        <p>Choose a course that is:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Easy to get to</li>
                            <li>Well connected by public transport</li>
                            <li>In a comfortable learning environment</li>
                        </ul>
                        <p className="mt-3">
                            Our course is based in{" "}
                            <Link href="/#location" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                Dundrum Town Centre, Dublin
                            </Link>
                            , with easy access by Luas, bus, and car.
                        </p>
                    </section>

                    {/* 7. Price vs value */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Price vs Value</h2>
                        <p>
                            Most CPR courses in Dublin cost between €80 and €100. Instead of choosing the cheapest option, ask yourself: will I get enough practice? Will I feel confident after the course? Is the certification recognised?
                        </p>
                        <p className="mt-3">
                            Value matters more than price. Read our full breakdown of{" "}
                            <Link href="/blog/how-much-does-a-cpr-course-cost-in-dublin" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how much a CPR course costs in Dublin
                            </Link>
                            .
                        </p>
                    </section>

                    {/* Common questions */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Questions</h2>

                        <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">What is the best CPR course for beginners?</h3>
                        <p>Look for small classes, hands-on training, and a supportive instructor. No prior experience is needed.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Do I need any experience?</h3>
                        <p>No — CPR courses are designed for complete beginners. Our course welcomes everyone regardless of background.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">How long does certification last?</h3>
                        <p>
                            Typically 2 years before renewal is required. Read more in our guide on{" "}
                            <Link href="/blog/how-long-does-cpr-certificate-last" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how long a CPR certificate lasts in Ireland
                            </Link>
                            .
                        </p>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gray-50 rounded-lg p-6 sm:p-8 border-l-4 border-[#66bb6a]">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">A CPR Course in Dundrum, Dublin</h2>
                        <p className="mb-4">
                            Our{" "}
                            <Link href="/#course-content" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                Cardiac First Responder course
                            </Link>{" "}
                            is designed for people with no prior experience and ticks every box on this list.
                        </p>
                        <ul className="list-disc ml-6 space-y-2 mb-6">
                            <li>CPR for adults, children, and infants</li>
                            <li>Hands-on AED training with real equipment</li>
                            <li>How to respond to choking, stroke, and heart attack</li>
                            <li>Real-life emergency scenarios</li>
                        </ul>
                        <ul className="space-y-2 mb-6 text-gray-700">
                            <li><strong>Certification:</strong> PHECC certified, valid for two years</li>
                            <li><strong>Duration:</strong> Approx. 3.5 hours</li>
                            <li>
                                <strong>Class size:</strong>{" "}
                                <Link href="/#details" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                    Small groups, max 6 people
                                </Link>
                            </li>
                            <li>
                                <strong>Location:</strong>{" "}
                                <Link href="/#location" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                    Dundrum Town Centre, Dublin
                                </Link>
                            </li>
                            <li>
                                <strong>Fee:</strong>{" "}
                                <Link href="/#about" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                    €85
                                </Link>{" "}
                                (€50 deposit required at booking)
                            </li>
                        </ul>
                        <Link
                            href="/#contact"
                            className="inline-block bg-[#66bb6a] hover:bg-[#5aaa5e] text-white font-semibold px-6 py-3 rounded transition-colors"
                        >
                            Book Your Place
                        </Link>
                    </section>

                    {/* Final thoughts */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
                        <p className="mb-3">
                            The best CPR course is not just about ticking a box — it is about gaining the confidence to act in a real emergency.
                        </p>
                        <p className="mb-3">
                            Choosing the right course ensures you leave feeling prepared, capable, and ready to help.
                        </p>
                        <p>
                            If you are looking for high-quality, small-group training,{" "}
                            <Link href="/#contact" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                book your Cardiac First Responder course today
                            </Link>
                            . Learn life-saving skills in a relaxed, supportive environment — and be ready when it matters most.
                        </p>
                    </section>

                </div>

                <hr className="border-gray-200 mt-12 mb-8" />

                <Link
                    href="/blog"
                    className="inline-flex items-center text-[#66bb6a] hover:text-[#5aaa5e] transition-colors"
                >
                    Back to Blog
                </Link>
            </div>
        </div>
    );
}
