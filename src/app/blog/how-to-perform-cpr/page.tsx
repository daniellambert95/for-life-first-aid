import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How to Perform CPR Step by Step (Adults, Children & Infants) | For Life First Aid",
    description: "A complete step-by-step guide to performing CPR on adults, children, and infants. Learn the correct technique, compression depth, rate, and when to use an AED.",
    keywords: ["how to perform CPR", "CPR step by step", "CPR adults children infants", "hands-only CPR", "cardiac arrest first aid", "AED use", "first aid Dublin", "PHECC CFR"],
    alternates: {
        canonical: "https://www.cardiacfirstrespondercourse.ie/blog/how-to-perform-cpr",
    },
    openGraph: {
        title: "How to Perform CPR Step by Step (Adults, Children & Infants) | For Life First Aid",
        description: "A complete step-by-step guide to performing CPR on adults, children, and infants. Learn the correct technique, compression depth, rate, and when to use an AED.",
        type: "article",
        locale: "en_IE",
        siteName: "For Life First Aid",
        publishedTime: "2025-04-01T00:00:00.000Z",
        authors: ["Cathy Vard"],
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Perform CPR Step by Step (Adults, Children & Infants)",
    "description": "A complete step-by-step guide to performing CPR on adults, children, and infants. Learn the correct technique, compression depth, rate, and when to use an AED.",
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
    "datePublished": "2025-04-01",
    "dateModified": "2025-04-01",
    "url": "https://www.cardiacfirstrespondercourse.ie/blog/how-to-perform-cpr",
    "inLanguage": "en-IE",
    "mainEntityOfPage": "https://www.cardiacfirstrespondercourse.ie/blog/how-to-perform-cpr"
};

export default function HowToPerformCPR() {
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

                <p className="text-sm text-gray-500 mb-4">Published by For Life First Aid</p>

                <h1 className="text-4xl sm:text-5xl font-bold text-[#66bb6a] mb-6 leading-tight">
                    How to Perform CPR Step by Step (Adults, Children &amp; Infants)
                </h1>

                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    Knowing how to perform CPR (Cardiopulmonary Resuscitation) can mean the difference between life and death. In an emergency, CPR helps keep oxygen flowing to the brain and vital organs until professional help arrives. This step-by-step guide will show you exactly what to do — whether the person is an adult, child, or infant.
                </p>

                <hr className="border-gray-200 mb-10" />

                <div className="prose prose-lg max-w-none space-y-10 text-gray-700">

                    {/* When to perform CPR */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">When Should You Perform CPR?</h2>
                        <p>CPR is needed when someone is:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Unresponsive</li>
                            <li>Not breathing normally</li>
                            <li>Showing signs of cardiac arrest — no movement, no response</li>
                        </ul>
                        <div className="mt-4 p-4 bg-gray-50 border-l-4 border-[#66bb6a] rounded-r">
                            <p className="font-semibold text-gray-900 mb-1">Important</p>
                            <p>
                                Gasping or irregular breathing is not normal breathing — start CPR immediately. Learn more about recognising cardiac arrest in our{" "}
                                <Link
                                    href="/#faq"
                                    className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                                >
                                    frequently asked questions
                                </Link>
                                .
                            </p>
                        </div>
                    </section>

                    {/* Step 1 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Call Emergency Services</h2>
                        <p>Before starting CPR:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Call <strong>999 or 112</strong></li>
                            <li>Ask someone nearby to locate a defibrillator (AED) if one is available</li>
                        </ul>
                        <p className="mt-3">Early emergency response greatly increases survival chances.</p>
                    </section>

                    {/* Step 2 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Start Chest Compressions (Adults)</h2>
                        <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">Hand position:</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Place the heel of one hand in the centre of the chest</li>
                            <li>Place your other hand on top and interlock your fingers</li>
                        </ul>
                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Compressions:</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Push hard and fast</li>
                            <li>Depth: about 5 to 6 cm</li>
                            <li>Rate: 100 to 120 compressions per minute</li>
                        </ul>
                        <p className="mt-3">Let the chest fully rise between compressions.</p>
                    </section>

                    {/* Step 3 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Add Rescue Breaths (If Trained)</h2>
                        <p>After every 30 compressions:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Tilt the head back and lift the chin</li>
                            <li>Pinch the nose shut</li>
                            <li>Give 2 breaths, about 1 second each</li>
                        </ul>
                        <p className="mt-4 font-semibold text-gray-900">Repeat: 30 compressions, then 2 breaths</p>
                        <p className="mt-3">
                            If you are not confident giving rescue breaths, perform hands-only CPR — it still saves lives. You can read more in our{" "}
                            <Link
                                href="/#faq"
                                className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                            >
                                FAQ on whether compression-only CPR is effective
                            </Link>
                            .
                        </p>
                    </section>

                    {/* CPR for Children */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">CPR for Children (1 Year to Puberty)</h2>
                        <p>The process is similar to adult CPR, but with slight adjustments:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Use one hand instead of two, depending on the size of the child</li>
                            <li>Compress to about one third of the chest depth</li>
                            <li>Maintain the same rhythm — 100 to 120 compressions per minute</li>
                        </ul>
                        <p className="mt-3">Be firm but controlled — children still need effective compressions to maintain circulation.</p>
                    </section>

                    {/* CPR for Infants */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">CPR for Infants (Under 1 Year)</h2>
                        <p>Infant CPR requires extra care and a different technique:</p>
                        <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">Compressions:</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Use two fingers in the centre of the chest</li>
                            <li>Compress to about one third of the chest depth</li>
                        </ul>
                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Breaths:</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Cover both the mouth and nose with your mouth</li>
                            <li>Give gentle puffs of air</li>
                        </ul>
                        <p className="mt-3">Continue with 30 compressions followed by 2 breaths, the same as for adults.</p>
                    </section>

                    {/* Step 4 - AED */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Use a Defibrillator (AED) as Soon as Possible</h2>
                        <p>
                            If an AED is available, use it immediately alongside CPR. As covered in our{" "}
                            <Link
                                href="/#course-content"
                                className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                            >
                                Cardiac First Responder course
                            </Link>
                            , AED use is a core skill that anyone can learn.
                        </p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Turn it on immediately</li>
                            <li>Follow the voice instructions</li>
                            <li>Attach the pads as shown on the device</li>
                        </ul>
                        <p className="mt-3">
                            The AED will only deliver a shock if one is needed — it is safe to use. See our{" "}
                            <Link
                                href="/#faq"
                                className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                            >
                                FAQ for a full explanation of how a defibrillator works
                            </Link>
                            .
                        </p>
                    </section>

                    {/* Why CPR matters */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why CPR Is So Important</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                Brain damage can begin in as little as{" "}
                                <Link
                                    href="/#faq"
                                    className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                                >
                                    4 minutes of cardiac arrest
                                </Link>
                            </li>
                            <li>CPR keeps oxygen flowing to the brain and vital organs</li>
                            <li>A defibrillator is often needed to restart the heart</li>
                        </ul>
                        <p className="mt-3">CPR buys time — but acting fast is critical.</p>
                    </section>

                    {/* Common concerns */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Concerns About CPR</h2>

                        <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Can I do CPR wrong?</h3>
                        <p>
                            It is always better to try than do nothing. In a cardiac arrest situation, you cannot make things worse by attempting CPR. Read more in our{" "}
                            <Link
                                href="/#faq"
                                className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                            >
                                frequently asked questions
                            </Link>
                            .
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Can CPR break ribs?</h3>
                        <p>It can happen, especially in adults — but saving a life is far more important than the risk of a rib injury.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Do I need training?</h3>
                        <p>
                            While anyone can attempt CPR, training gives you the confidence to act quickly and correctly. Our{" "}
                            <Link
                                href="/#course-content"
                                className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                            >
                                Cardiac First Responder Course
                            </Link>{" "}
                            covers CPR for adults, children, and infants using hands-on practice with training manikins.
                        </p>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gray-50 rounded-lg p-6 sm:p-8 border-l-4 border-[#66bb6a]">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Learn CPR the Right Way</h2>
                        <p className="mb-4">
                            Reading is helpful — but real confidence comes from hands-on training. On our{" "}
                            <Link
                                href="/#course-content"
                                className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                            >
                                Cardiac First Responder Course
                            </Link>
                            , you will learn:
                        </p>
                        <ul className="list-disc ml-6 space-y-2 mb-6">
                            <li>CPR for adults, children, and infants</li>
                            <li>How to use a defibrillator (AED)</li>
                            <li>How to respond to choking, stroke, and heart attack</li>
                            <li>Real-life emergency scenarios using training manikins</li>
                        </ul>
                        <ul className="space-y-2 mb-6 text-gray-700">
                            <li><strong>Certification:</strong> PHECC certified, valid for two years</li>
                            <li><strong>Duration:</strong> Approx. 3.5 hours</li>
                            <li>
                                <strong>Class size:</strong>{" "}
                                <Link
                                    href="/#details"
                                    className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                                >
                                    Small groups, max 6 people
                                </Link>
                            </li>
                            <li>
                                <strong>Location:</strong>{" "}
                                <Link
                                    href="/#location"
                                    className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                                >
                                    Dundrum, Dublin
                                </Link>
                            </li>
                            <li>
                                <strong>Fee:</strong>{" "}
                                <Link
                                    href="/#about"
                                    className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                                >
                                    €85
                                </Link>{" "}
                                (certification valid for 2 years)
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
                        <p className="mb-3">CPR is one of the most important life-saving skills anyone can learn.</p>
                        <p className="mb-3">
                            In an emergency, you will not have time to think — you will rely on what you know. Taking a few hours to learn CPR could one day help you save a friend, a loved one, or even a stranger.
                        </p>
                        <p>
                            If you want to feel confident handling a real emergency,{" "}
                            <Link
                                href="/#contact"
                                className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                            >
                                get in touch
                            </Link>{" "}
                            or{" "}
                            <Link
                                href="/#about"
                                className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                            >
                                learn more about the course
                            </Link>
                            . Small groups, expert instruction, and hands-on practice — everything you need to be ready when it matters most.
                        </p>
                    </section>

                </div>

                <hr className="border-gray-200 mt-12 mb-8" />

                <Link
                    href="/"
                    className="inline-flex items-center text-[#66bb6a] hover:text-[#5aaa5e] transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
