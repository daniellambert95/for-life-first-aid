import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Heart Attack vs Cardiac Arrest: What's the Difference? | For Life First Aid",
    description: "Heart attacks and cardiac arrests are not the same thing. Learn the key differences, how to recognise each one, and what to do in each situation.",
    keywords: ["heart attack vs cardiac arrest", "difference heart attack cardiac arrest", "cardiac arrest signs", "heart attack symptoms", "CPR cardiac arrest", "first aid Dublin", "PHECC CFR"],
    alternates: {
        canonical: "https://www.cardiacfirstrespondercourse.ie/blog/heart-attack-vs-cardiac-arrest",
    },
    openGraph: {
        title: "Heart Attack vs Cardiac Arrest: What's the Difference? | For Life First Aid",
        description: "Heart attacks and cardiac arrests are not the same thing. Learn the key differences, how to recognise each one, and what to do in each situation.",
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
    "headline": "Heart Attack vs Cardiac Arrest: What's the Difference?",
    "description": "Heart attacks and cardiac arrests are not the same thing. Learn the key differences, how to recognise each one, and what to do in each situation.",
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
    "url": "https://www.cardiacfirstrespondercourse.ie/blog/heart-attack-vs-cardiac-arrest",
    "inLanguage": "en-IE",
    "mainEntityOfPage": "https://www.cardiacfirstrespondercourse.ie/blog/heart-attack-vs-cardiac-arrest"
};

export default function HeartAttackVsCardiacArrest() {
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
                    Heart Attack vs Cardiac Arrest: What&apos;s the Difference?
                </h1>

                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    Many people think a heart attack and cardiac arrest are the same thing — but they are very different medical emergencies. Understanding the difference could help you recognise the signs and take the right action quickly.
                </p>

                <hr className="border-gray-200 mb-10" />

                <div className="prose prose-lg max-w-none space-y-10 text-gray-700">

                    {/* Heart attack */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Heart Attack?</h2>
                        <p>A <strong>heart attack</strong> happens when blood flow to part of the heart is blocked.</p>
                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Common symptoms:</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Chest pain or pressure</li>
                            <li>Pain in the arm, neck, or jaw</li>
                            <li>Shortness of breath</li>
                            <li>Sweating or nausea</li>
                        </ul>
                        <p className="mt-3">The person is usually conscious and breathing.</p>
                    </section>

                    {/* Cardiac arrest */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Cardiac Arrest?</h2>
                        <p>A <strong>cardiac arrest</strong> happens when the heart suddenly stops beating.</p>
                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Signs include:</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Sudden collapse</li>
                            <li>Unresponsive</li>
                            <li>Not breathing normally</li>
                        </ul>
                        <div className="mt-4 p-4 bg-gray-50 border-l-4 border-[#66bb6a] rounded-r">
                            <p className="font-semibold text-gray-900">This is a life-threatening emergency that requires immediate CPR and use of a defibrillator.</p>
                        </div>
                    </section>

                    {/* Comparison table */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Differences</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Heart Attack</th>
                                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Cardiac Arrest</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3 border border-gray-200">Caused by blocked blood flow</td>
                                        <td className="p-3 border border-gray-200">Caused by an electrical problem in the heart</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border border-gray-200">Person is usually awake</td>
                                        <td className="p-3 border border-gray-200">Person is unconscious</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-gray-200">Breathing continues</td>
                                        <td className="p-3 border border-gray-200">Breathing stops or becomes abnormal</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border border-gray-200">Needs urgent medical care</td>
                                        <td className="p-3 border border-gray-200">Needs immediate CPR and AED</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* What to do */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What To Do in Each Situation</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">If Someone Is Having a Heart Attack:</h3>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>Call <strong>999 or 112</strong></li>
                                    <li>Keep them calm and seated</li>
                                    <li>Loosen tight clothing</li>
                                    <li>Be ready to act if they collapse</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">If Someone Goes Into Cardiac Arrest:</h3>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>Call emergency services immediately</li>
                                    <li>
                                        Start{" "}
                                        <Link href="/blog/how-to-perform-cpr" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                            CPR
                                        </Link>
                                    </li>
                                    <li>
                                        Use a{" "}
                                        <Link href="/blog/how-to-use-a-defibrillator" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                            defibrillator (AED)
                                        </Link>{" "}
                                        as soon as possible
                                    </li>
                                </ul>
                                <p className="mt-3">Every second counts. Read our full guide on{" "}
                                    <Link href="/blog/what-to-do-if-someone-collapses" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                        what to do if someone collapses
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How they are connected */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How They Are Connected</h2>
                        <p>A heart attack can sometimes lead to cardiac arrest. This is why recognising symptoms early is so important — acting quickly at the heart attack stage can prevent a situation from becoming worse.</p>
                    </section>

                    {/* Why fast action */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Fast Action Saves Lives</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                Brain damage can begin within{" "}
                                <Link href="/#faq" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                    4 minutes of cardiac arrest
                                </Link>
                            </li>
                            <li>Early CPR keeps blood flowing to the brain</li>
                            <li>Defibrillation can restart the heart</li>
                        </ul>
                        <p className="mt-3">Acting quickly can double or triple survival chances.</p>
                    </section>

                    {/* Misconceptions */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Misconceptions</h2>

                        <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Are they the same thing?</h3>
                        <p>No — but they are closely related. A heart attack is a circulation problem; cardiac arrest is an electrical problem.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Should I do CPR during a heart attack?</h3>
                        <p>Not unless the person becomes unresponsive and stops breathing. If that happens, it has progressed to cardiac arrest — start CPR immediately.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Can a heart attack turn into cardiac arrest?</h3>
                        <p>Yes — and it can happen suddenly. This is why it is important to stay with the person and monitor them closely while waiting for emergency services.</p>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gray-50 rounded-lg p-6 sm:p-8 border-l-4 border-[#66bb6a]">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Learn How to Respond Properly</h2>
                        <p className="mb-4">
                            Knowing the difference is important — but knowing what to do is even more critical. On our{" "}
                            <Link href="/#course-content" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                Cardiac First Responder Course
                            </Link>
                            , you will learn:
                        </p>
                        <ul className="list-disc ml-6 space-y-2 mb-6">
                            <li>How to recognise heart attack symptoms</li>
                            <li>How to respond to cardiac arrest</li>
                            <li>CPR for adults, children, and infants</li>
                            <li>How to use a defibrillator (AED)</li>
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
                            Heart attacks and cardiac arrests are both serious — but they require different responses.
                        </p>
                        <p className="mb-3">
                            Recognising the signs and acting quickly could save someone&apos;s life.
                        </p>
                        <p>
                            If you want to feel confident responding to real emergencies,{" "}
                            <Link href="/#contact" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                get in touch
                            </Link>{" "}
                            or{" "}
                            <Link href="/#about" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                learn more about the course
                            </Link>
                            . Practical training, expert guidance, and the skills to make a real difference.
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
