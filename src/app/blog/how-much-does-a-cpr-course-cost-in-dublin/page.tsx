import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How Much Does a CPR Course Cost in Dublin? (2026 Guide) | For Life First Aid",
    description: "Find out how much a CPR course costs in Dublin in 2026. Learn what affects the price, what to look for in a quality course, and what is included in our PHECC-certified training.",
    keywords: ["CPR course cost Dublin", "how much does CPR course cost", "CFR course price Ireland", "CPR training Dublin 2026", "PHECC course fee", "first aid course Dublin price"],
    alternates: {
        canonical: "https://www.cardiacfirstrespondercourse.ie/blog/how-much-does-a-cpr-course-cost-in-dublin",
    },
    openGraph: {
        title: "How Much Does a CPR Course Cost in Dublin? (2026 Guide) | For Life First Aid",
        description: "Find out how much a CPR course costs in Dublin in 2026. Learn what affects the price and what is included in a quality PHECC-certified course.",
        type: "article",
        locale: "en_IE",
        siteName: "For Life First Aid",
        publishedTime: "2025-05-01T00:00:00.000Z",
        authors: ["Cathy Vard"],
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How Much Does a CPR Course Cost in Dublin? (2026 Guide)",
    "description": "Find out how much a CPR course costs in Dublin in 2026. Learn what affects the price, what to look for in a quality course, and what is included in our PHECC-certified training.",
    "author": {
        "@type": "Person",
        "name": "Cathy Vard",
        "url": "https://www.cardiacfirstrespondercourse.ie/#instructor"
    },
    "publisher": {
        "@type": "Organization",
        "name": "For Life First Aid",
        "url": "https://www.cardiacfirstrespondercourse.ie",
        "logo": "https://www.cardiacfirstrespondercourse.ie/assets/4_life_logo.webp"
    },
    "datePublished": "2025-05-01",
    "dateModified": "2025-05-01",
    "url": "https://www.cardiacfirstrespondercourse.ie/blog/how-much-does-a-cpr-course-cost-in-dublin",
    "inLanguage": "en-IE",
    "mainEntityOfPage": "https://www.cardiacfirstrespondercourse.ie/blog/how-much-does-a-cpr-course-cost-in-dublin"
};

export default function HowMuchDoesCPRCourseCost() {
    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20">

                <Link
                    href="/blog"
                    className="inline-flex items-center text-[#66bb6a] hover:text-[#5aaa5e] mb-8 transition-colors"
                >
                    Back to Blog
                </Link>

                <p className="text-sm text-gray-500 mb-4">Published 1 May 2025 · For Life First Aid</p>

                <h1 className="text-4xl sm:text-5xl font-bold text-[#66bb6a] mb-6 leading-tight">
                    How Much Does a CPR Course Cost in Dublin? (2026 Guide)
                </h1>

                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    If you are considering learning CPR, one of the first questions you will have is: how much does a CPR course cost in Dublin? Prices can vary depending on the provider, certification, and course quality — so here is what you need to know.
                </p>

                <hr className="border-gray-200 mb-10" />

                <div className="prose prose-lg max-w-none space-y-10 text-gray-700">

                    {/* Average cost */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Average Cost of CPR Courses in Dublin</h2>
                        <p>In Dublin, most CPR or Cardiac First Responder (CFR) courses cost between <strong>€80 and €100 per person</strong>.</p>
                        <p className="mt-3">This usually includes:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>CPR training</li>
                            <li>AED (defibrillator) training</li>
                            <li>Certification</li>
                        </ul>
                    </section>

                    {/* What affects the price */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Affects the Price?</h2>
                        <p>Several factors can influence the cost of a CPR course:</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">1. Certification Type</h3>
                        <p>
                            PHECC-certified courses may cost slightly more — but they are widely recognised and trusted by employers across Ireland. Read more about{" "}
                            <Link href="/blog/how-long-does-cpr-certificate-last" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how long a CFR certificate lasts
                            </Link>
                            .
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">2. Class Size</h3>
                        <p>Large classes tend to cost less but offer less personal attention. Smaller classes provide higher quality, more hands-on practice — which matters when you are learning a life-saving skill.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">3. Instructor Experience</h3>
                        <p>Experienced instructors — such as qualified paramedics or healthcare professionals — may charge slightly more but often provide better, more confident training.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">4. Course Duration and Content</h3>
                        <p>A short basic course will cost less than comprehensive training that includes real-life scenarios, practical sessions, and coverage of choking, stroke, and heart attack response.</p>
                    </section>

                    {/* Cheap vs value */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cheap vs Value: What Really Matters?</h2>
                        <p>While it is tempting to choose the cheapest option, consider:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Will you get enough hands-on practice?</li>
                            <li>Will you feel confident in a real emergency?</li>
                            <li>Is the certification recognised by employers?</li>
                        </ul>
                        <div className="mt-4 p-4 bg-gray-50 border-l-4 border-[#66bb6a] rounded-r">
                            <p className="font-semibold text-gray-900">When it comes to life-saving skills, quality matters more than price.</p>
                        </div>
                    </section>

                    {/* Why small classes */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Small Classes Make a Big Difference</h2>
                        <p>Many CPR courses run large groups to keep costs down — but smaller classes offer:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>More one-to-one instruction</li>
                            <li>More time practising CPR on manikins</li>
                            <li>Greater confidence by the end of the course</li>
                        </ul>
                        <p className="mt-3">This is especially important if you have never done CPR before.</p>
                    </section>

                    {/* Common questions */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Questions</h2>

                        <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Are cheaper courses worse?</h3>
                        <p>Not always — but they often involve larger groups and less practical time per person.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Is certification included in the price?</h3>
                        <p>Usually yes — but always check before booking. Our course includes PHECC certification valid for two years.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Is it worth paying more?</h3>
                        <p>If it improves your confidence and ability to act in a real emergency — absolutely.</p>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gray-50 rounded-lg p-6 sm:p-8 border-l-4 border-[#66bb6a]">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">CPR Course Pricing in Dublin</h2>
                        <p className="mb-4">
                            Our{" "}
                            <Link href="/#course-content" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                Cardiac First Responder course
                            </Link>{" "}
                            is priced at <strong>€85 per person</strong> and includes everything you need to get certified.
                        </p>
                        <ul className="list-disc ml-6 space-y-2 mb-6">
                            <li>
                                <Link href="/blog/how-to-perform-cpr" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                    Hands-on CPR practice
                                </Link>{" "}
                                for adults, children, and infants
                            </li>
                            <li>
                                <Link href="/blog/how-to-use-a-defibrillator" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                    AED (defibrillator) training
                                </Link>{" "}
                                with real equipment
                            </li>
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
                        <p className="mb-3">A CPR course is a small investment that could one day save a life.</p>
                        <p className="mb-3">
                            For around €80 to €100, you gain skills that are invaluable in an emergency.
                        </p>
                        <p>
                            If you are looking for high-quality, hands-on training in a small group setting,{" "}
                            <Link href="/#contact" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                book your Cardiac First Responder course today
                            </Link>
                            . Learn the skills, build confidence, and be ready when it matters most.
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
