import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "What To Do If Someone Collapses | For Life First Aid",
    description: "A step-by-step guide for bystanders on what to do if someone collapses. Learn how to check for danger, start CPR, and use an AED to save a life.",
    keywords: ["what to do if someone collapses", "CPR guide", "cardiac arrest bystander", "AED how to use", "first aid Dublin", "PHECC CFR"],
    alternates: {
        canonical: "https://www.cardiacfirstrespondercourse.ie/blog/what-to-do-if-someone-collapses",
    },
    openGraph: {
        title: "What To Do If Someone Collapses | For Life First Aid",
        description: "A step-by-step guide for bystanders on what to do if someone collapses. Learn how to check for danger, start CPR, and use an AED to save a life.",
        type: "article",
        locale: "en_IE",
        siteName: "For Life First Aid",
    },
};

export default function WhatToDoIfSomeoneCollapses() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20">

                <Link
                    href="/"
                    className="inline-flex items-center text-[#66bb6a] hover:text-[#5aaa5e] mb-8 transition-colors"
                >
                    Back to Home
                </Link>

                <p className="text-sm text-gray-500 mb-4">Published by For Life First Aid</p>

                <h1 className="text-4xl sm:text-5xl font-bold text-[#66bb6a] mb-6 leading-tight">
                    What To Do If Someone Collapses (Step-by-Step Guide for Bystanders)
                </h1>

                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    If someone suddenly collapses in front of you, it can be a frightening and overwhelming experience. But knowing what to do in those first few minutes can literally save a life. In this guide, you will learn exactly how to respond step by step — even if you have no medical training.
                </p>

                <hr className="border-gray-200 mb-10" />

                <div className="prose prose-lg max-w-none space-y-10 text-gray-700">

                    {/* Step 1 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Check for Danger</h2>
                        <p>Before helping, quickly look around and make sure the area is safe.</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Are there hazards such as traffic, electricity, or fire?</li>
                            <li>Is it safe for you to approach?</li>
                        </ul>
                        <p className="mt-3">Your safety always comes first.</p>
                    </section>

                    {/* Step 2 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Check for a Response</h2>
                        <p>Gently shake the person&apos;s shoulders and ask loudly:</p>
                        <blockquote className="border-l-4 border-[#66bb6a] pl-4 my-4 italic text-gray-600">
                            &ldquo;Are you okay?&rdquo;
                        </blockquote>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>If they respond — keep them comfortable and monitor them</li>
                            <li>If they do not respond — move to the next step immediately</li>
                        </ul>
                    </section>

                    {/* Step 3 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Call Emergency Services</h2>
                        <p>If the person is unresponsive:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Call <strong>999 or 112</strong> immediately</li>
                            <li>Ask someone nearby to help if possible</li>
                        </ul>
                        <p className="mt-3">The sooner emergency services are on the way, the better the chances of survival.</p>
                    </section>

                    {/* Step 4 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Check Breathing</h2>
                        <p>Look, listen, and feel for normal breathing:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Look for chest movement</li>
                            <li>Listen for breathing sounds</li>
                            <li>Feel for breath on your cheek</li>
                        </ul>
                        <div className="mt-4 p-4 bg-gray-50 border-l-4 border-[#66bb6a] rounded-r">
                            <p className="font-semibold text-gray-900 mb-1">Important</p>
                            <p>
                                Gasping or irregular breathing — known as{" "}
                                <Link
                                    href="/#faq"
                                    className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                                >
                                    agonal breathing
                                </Link>{" "}
                                — is not normal breathing. If they are not breathing normally, treat it as cardiac arrest.
                            </p>
                        </div>
                    </section>

                    {/* Step 5 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 5: Start CPR Immediately</h2>
                        <p>
                            Cardiopulmonary Resuscitation (CPR) keeps blood and oxygen flowing to the brain. As covered in our{" "}
                            <Link
                                href="/#course-content"
                                className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                            >
                                course content
                            </Link>
                            , CPR is one of the core skills taught on the Cardiac First Responder course.
                        </p>
                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-3">How to perform CPR:</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Place hands in the centre of the chest</li>
                            <li>Push hard and fast — 100 to 120 compressions per minute</li>
                            <li>Allow the chest to fully recoil between compressions</li>
                        </ul>
                        <p className="mt-3">
                            Even compression-only CPR is far better than doing nothing. You can read more in our{" "}
                            <Link
                                href="/#faq"
                                className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                            >
                                FAQ
                            </Link>{" "}
                            on whether compression-only CPR is adequate to save a life.
                        </p>
                    </section>

                    {/* Step 6 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 6: Use a Defibrillator (AED) if Available</h2>
                        <p>
                            An Automated External Defibrillator (AED) can restart the heart. It is one of the key topics covered in our{" "}
                            <Link
                                href="/#course-content"
                                className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                            >
                                Cardiac First Responder course
                            </Link>
                            .
                        </p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Turn it on and follow the voice instructions</li>
                            <li>Attach pads to the chest as shown on the device</li>
                            <li>The AED will only deliver a shock if one is needed</li>
                        </ul>
                        <p className="mt-3">
                            Anyone can use an AED — no training required. See our{" "}
                            <Link
                                href="/#faq"
                                className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                            >
                                FAQ
                            </Link>{" "}
                            for a full explanation of what a defibrillator is and how it works.
                        </p>
                    </section>

                    {/* Why speed matters */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Acting Fast Matters</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                Brain damage can begin within{" "}
                                <Link
                                    href="/#faq"
                                    className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                                >
                                    4 minutes of cardiac arrest
                                </Link>
                            </li>
                            <li>Survival chances increase dramatically if CPR is started immediately</li>
                            <li>Using a defibrillator within 3 to 5 minutes significantly improves outcomes</li>
                        </ul>
                        <p className="mt-3">Taking action quickly can double or even triple survival rates.</p>
                    </section>

                    {/* What if not sure */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What If You Are Not Sure?</h2>
                        <p>Many people hesitate because they are afraid of doing something wrong. Here is what our FAQ explains:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>You cannot make things worse by starting CPR</li>
                            <li>If the person is not in cardiac arrest, they will show signs of life</li>
                            <li>Doing nothing is the biggest risk</li>
                        </ul>
                        <p className="mt-3">
                            It is always better to act. Read more in our{" "}
                            <Link
                                href="/#faq"
                                className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2"
                            >
                                frequently asked questions
                            </Link>
                            .
                        </p>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gray-50 rounded-lg p-6 sm:p-8 border-l-4 border-[#66bb6a]">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Learn These Skills Properly</h2>
                        <p className="mb-4">
                            Reading about CPR is helpful — but confidence comes from hands-on practice. On our{" "}
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
                                    Dundrum Town Centre, Dublin
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
                        <p className="mb-3">If someone collapses, every second counts.</p>
                        <p className="mb-3">
                            You do not need to be a healthcare professional to save a life — you just need to be prepared to act. Learning CPR gives you the confidence to step in when it matters most.
                        </p>
                        <p>
                            If you want to feel confident handling real emergencies,{" "}
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
                            . Small classes, expert instruction, and practical training — so you are ready when it counts.
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
