import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How Long Does a CPR / CFR Certificate Last in Ireland? | For Life First Aid",
    description: "Find out how long a CPR or Cardiac First Responder certificate lasts in Ireland, when you need to renew, and what a refresher course covers.",
    keywords: ["how long does CPR certificate last", "CFR certificate Ireland", "CPR renewal Ireland", "PHECC certification valid", "first aid refresher Dublin", "CFR refresher course"],
    alternates: {
        canonical: "https://www.cardiacfirstrespondercourse.ie/blog/how-long-does-cpr-certificate-last",
    },
    openGraph: {
        title: "How Long Does a CPR / CFR Certificate Last in Ireland? | For Life First Aid",
        description: "Find out how long a CPR or Cardiac First Responder certificate lasts in Ireland, when you need to renew, and what a refresher course covers.",
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
    "headline": "How Long Does a CPR / CFR Certificate Last in Ireland?",
    "description": "Find out how long a CPR or Cardiac First Responder certificate lasts in Ireland, when you need to renew, and what a refresher course covers.",
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
    "url": "https://www.cardiacfirstrespondercourse.ie/blog/how-long-does-cpr-certificate-last",
    "inLanguage": "en-IE",
    "mainEntityOfPage": "https://www.cardiacfirstrespondercourse.ie/blog/how-long-does-cpr-certificate-last"
};

export default function HowLongDoesCPRCertificateLast() {
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
                    How Long Does a CPR / CFR Certificate Last in Ireland?
                </h1>

                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    If you are thinking about taking a CPR or Cardiac First Responder (CFR) course, one of the most common questions is: how long does the certification last? In Ireland, CPR certification follows clear guidelines — especially for PHECC-approved courses.
                </p>

                <hr className="border-gray-200 mb-10" />

                <div className="prose prose-lg max-w-none space-y-10 text-gray-700">

                    {/* How long is it valid */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long Is a CPR / CFR Certificate Valid?</h2>
                        <p>
                            A <strong>PHECC Cardiac First Responder (CFR) certificate</strong> is valid for <strong>2 years from the date of completion</strong>.
                        </p>
                        <p className="mt-3">
                            After this, you will need to complete a refresher course to remain certified.
                        </p>
                    </section>

                    {/* What happens when it expires */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens When Your Certification Expires?</h2>
                        <p>If your certificate expires:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>You are no longer considered certified</li>
                            <li>You may not meet workplace safety requirements</li>
                            <li>Your confidence and skills may fade over time</li>
                        </ul>
                        <p className="mt-3">
                            To stay qualified, you must complete a CFR refresher course. You can{" "}
                            <Link href="/#contact" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                get in touch
                            </Link>{" "}
                            to arrange renewal.
                        </p>
                    </section>

                    {/* Why renewal matters */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why CPR Certification Needs Renewal</h2>
                        <p>CPR is a practical skill that can fade without use. Regular renewal ensures:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>You stay up to date with the latest guidelines</li>
                            <li>Your technique remains correct</li>
                            <li>You maintain confidence in real emergencies</li>
                        </ul>
                        <p className="mt-3">Even small improvements in technique can make a life-saving difference.</p>
                    </section>

                    {/* What is covered */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Covered in a Refresher Course?</h2>
                        <p>A refresher course typically includes:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>
                                <Link href="/blog/how-to-perform-cpr" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                    CPR practice
                                </Link>{" "}
                                for adults, children, and infants
                            </li>
                            <li>
                                <Link href="/blog/how-to-use-a-defibrillator" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                    AED (defibrillator) use
                                </Link>
                            </li>
                            <li>Updates to guidelines</li>
                            <li>Emergency scenario training</li>
                        </ul>
                        <p className="mt-3">It is faster than a full course but just as important.</p>
                    </section>

                    {/* Workplaces */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Do Workplaces Require Valid Certification?</h2>
                        <p>Yes — in many cases. Employers in Ireland often require staff to have:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Up-to-date CPR or First Aid certification</li>
                            <li>Proof of PHECC-approved training</li>
                        </ul>
                        <p className="mt-3">Expired certification may not meet compliance requirements. If you need to arrange training for a group or workplace, you can{" "}
                            <Link href="/#contact" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                get in touch
                            </Link>
                            .
                        </p>
                    </section>

                    {/* Common questions */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Questions</h2>

                        <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Can I renew before it expires?</h3>
                        <p>Yes — and it is often recommended to avoid gaps in certification.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Do I need to redo the full course?</h3>
                        <p>Not always. A refresher course is usually enough if your cert has not been expired too long.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Is CPR still effective if I learned it years ago?</h3>
                        <p>
                            You may remember the basics — but updated training ensures you are doing it correctly and in line with current guidelines. Read our{" "}
                            <Link href="/blog/how-to-perform-cpr" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                step-by-step CPR guide
                            </Link>{" "}
                            to check your knowledge.
                        </p>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gray-50 rounded-lg p-6 sm:p-8 border-l-4 border-[#66bb6a]">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">CPR Certification in Dublin</h2>
                        <p className="mb-4">
                            If you are based in Dublin, you can complete your certification or renewal with our{" "}
                            <Link href="/#course-content" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                PHECC-approved Cardiac First Responder course
                            </Link>
                            . Ideal for beginners and those renewing their certification.
                        </p>
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
                        <p className="mb-3">CPR certification is not something you do once and forget.</p>
                        <p className="mb-3">
                            Keeping your training up to date ensures you are ready to act confidently in a real emergency.
                        </p>
                        <p>
                            Whether you are new to first aid or need to renew,{" "}
                            <Link href="/#contact" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                book your Cardiac First Responder course today
                            </Link>
                            . Stay certified, stay confident — and be ready when it matters most.
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
