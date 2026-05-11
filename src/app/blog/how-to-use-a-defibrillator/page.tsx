import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How to Use a Defibrillator (AED) – A Simple Guide Anyone Can Follow | For Life First Aid",
    description: "Learn how to use a defibrillator (AED) step by step. AEDs are designed for complete beginners — no medical training required. Find out what to do in a cardiac emergency.",
    keywords: ["how to use a defibrillator", "AED guide", "defibrillator steps", "cardiac arrest first aid", "AED training Dublin", "PHECC CFR", "first aid Ireland"],
    alternates: {
        canonical: "https://www.cardiacfirstrespondercourse.ie/blog/how-to-use-a-defibrillator",
    },
    openGraph: {
        title: "How to Use a Defibrillator (AED) – A Simple Guide Anyone Can Follow | For Life First Aid",
        description: "Learn how to use a defibrillator (AED) step by step. AEDs are designed for complete beginners — no medical training required.",
        type: "article",
        locale: "en_IE",
        siteName: "For Life First Aid",
    },
};

export default function HowToUseADefibrillator() {
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
                    How to Use a Defibrillator (AED) — A Simple Guide Anyone Can Follow
                </h1>

                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    If someone collapses due to cardiac arrest, using a defibrillator (AED) within minutes can dramatically increase their chances of survival. The good news? AEDs are designed for complete beginners — you do not need medical training to use one.
                </p>

                <hr className="border-gray-200 mb-10" />

                <div className="prose prose-lg max-w-none space-y-10 text-gray-700">

                    {/* What is an AED */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Defibrillator (AED)?</h2>
                        <p>An <strong>Automated External Defibrillator (AED)</strong> is a portable device that:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Checks the heart&apos;s rhythm</li>
                            <li>Delivers a shock if needed</li>
                            <li>Helps restart the heart</li>
                        </ul>
                        <p className="mt-3">
                            It will only shock if necessary, so it is completely safe to use. See our{" "}
                            <Link href="/#faq" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                FAQ for a full explanation of how a defibrillator works
                            </Link>
                            .
                        </p>
                    </section>

                    {/* When to use */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">When Should You Use an AED?</h2>
                        <p>Use an AED if someone is:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Unresponsive</li>
                            <li>Not breathing normally</li>
                            <li>Showing signs of cardiac arrest</li>
                        </ul>
                        <div className="mt-4 p-4 bg-gray-50 border-l-4 border-[#66bb6a] rounded-r">
                            <p className="font-semibold text-gray-900">Do not wait — act immediately.</p>
                        </div>
                    </section>

                    {/* Step by step */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step: How to Use an AED</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Turn on the AED</h3>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>Open the lid or press the power button</li>
                                    <li>The device will begin giving voice instructions</li>
                                </ul>
                                <p className="mt-3">Follow these instructions exactly.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Expose the Chest</h3>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>Remove clothing from the chest</li>
                                    <li>Dry the skin if wet</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Attach the Pads</h3>
                                <p>Place pads exactly as shown on the diagrams:</p>
                                <ul className="list-disc ml-6 space-y-2 mt-3">
                                    <li>One pad on the upper right chest</li>
                                    <li>One pad on the lower left side</li>
                                </ul>
                                <p className="mt-3">The AED will show you where to place them.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Let the AED Analyse</h3>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>The device will check the heart rhythm</li>
                                    <li><strong>Do not touch the person</strong> during this time</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Deliver Shock (If Advised)</h3>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>If prompted, press the shock button</li>
                                    <li>Ensure no one is touching the person</li>
                                </ul>
                                <p className="mt-3">The AED will only advise a shock if it is needed.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Resume CPR Immediately</h3>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>Start CPR straight after the shock</li>
                                    <li>Continue until emergency services arrive</li>
                                </ul>
                                <p className="mt-3">
                                    Not sure how to perform CPR? Read our{" "}
                                    <Link href="/blog/how-to-perform-cpr" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                        step-by-step CPR guide
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Why AEDs matter */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why AEDs Are So Important</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                Survival rates drop{" "}
                                <Link href="/#faq" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                    every minute without defibrillation
                                </Link>
                            </li>
                            <li>Using an AED within 3 to 5 minutes can double or triple survival chances</li>
                            <li>CPR alone is often not enough — the heart needs to be restarted</li>
                        </ul>
                    </section>

                    {/* Can anyone use one */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Can Anyone Use a Defibrillator?</h2>
                        <p>Yes — absolutely. AEDs are designed for the general public:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Clear voice instructions</li>
                            <li>Visual guides on the pads</li>
                            <li>Automatic rhythm analysis</li>
                        </ul>
                        <p className="mt-3">
                            You cannot accidentally harm someone by using an AED. Read more in our{" "}
                            <Link href="/#faq" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                frequently asked questions
                            </Link>
                            .
                        </p>
                    </section>

                    {/* Where to find */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Where Can You Find an AED?</h2>
                        <p>AEDs are commonly located in:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Shopping centres</li>
                            <li>Gyms</li>
                            <li>Offices</li>
                            <li>Airports</li>
                            <li>Public buildings</li>
                        </ul>
                        <p className="mt-3">Many are stored in clearly marked wall cabinets. When calling 999 or 112, the operator can also direct you to the nearest AED.</p>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gray-50 rounded-lg p-6 sm:p-8 border-l-4 border-[#66bb6a]">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Build Confidence With Training</h2>
                        <p className="mb-4">
                            While AEDs are simple to use, training helps you stay calm under pressure, act quickly, and combine CPR and AED use effectively. On our{" "}
                            <Link href="/#course-content" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                Cardiac First Responder Course
                            </Link>
                            , you will get hands-on experience using AEDs in real-life scenarios.
                        </p>
                        <ul className="list-disc ml-6 space-y-2 mb-6">
                            <li>AED training with real equipment</li>
                            <li>CPR practice on manikins</li>
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
                                    Dundrum, Dublin
                                </Link>
                            </li>
                            <li>
                                <strong>Fee:</strong>{" "}
                                <Link href="/#about" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
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
                        <p className="mb-3">
                            Using a defibrillator might sound intimidating — but it is actually simple, guided, and safe.
                        </p>
                        <p className="mb-3">
                            In an emergency, you do not need to be perfect — you just need to act.
                        </p>
                        <p>
                            If you want to feel fully confident using an AED and performing CPR,{" "}
                            <Link href="/#contact" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                book your Cardiac First Responder course today
                            </Link>
                            . Hands-on training could make all the difference when it matters most.
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
