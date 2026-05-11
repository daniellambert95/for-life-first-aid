import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Is a Cardiac First Responder Course Worth It? | For Life First Aid",
    description: "Thinking about taking a Cardiac First Responder course? Here is why it is worth it — from the confidence it builds to the lives it could help save.",
    keywords: ["is CFR course worth it", "cardiac first responder worth it", "should I do CPR course", "CFR course benefits Ireland", "CPR training Dublin", "PHECC CFR"],
    alternates: {
        canonical: "https://www.cardiacfirstrespondercourse.ie/blog/is-a-cardiac-first-responder-course-worth-it",
    },
    openGraph: {
        title: "Is a Cardiac First Responder Course Worth It? | For Life First Aid",
        description: "Thinking about taking a Cardiac First Responder course? Here is why it is worth it — from the confidence it builds to the lives it could help save.",
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
    "headline": "Is a Cardiac First Responder Course Worth It? (What You Need to Know)",
    "description": "Thinking about taking a Cardiac First Responder course? Here is why it is worth it — from the confidence it builds to the lives it could help save.",
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
    "url": "https://www.cardiacfirstrespondercourse.ie/blog/is-a-cardiac-first-responder-course-worth-it",
    "inLanguage": "en-IE",
    "mainEntityOfPage": "https://www.cardiacfirstrespondercourse.ie/blog/is-a-cardiac-first-responder-course-worth-it"
};

export default function IsACFRCourseWorthIt() {
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
                    Is a Cardiac First Responder Course Worth It? (What You Need to Know)
                </h1>

                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    If you are thinking about taking a Cardiac First Responder (CFR) course, you might be wondering whether it is actually worth it. The short answer is yes — and here is why.
                </p>

                <hr className="border-gray-200 mb-10" />

                <div className="prose prose-lg max-w-none space-y-10 text-gray-700">

                    {/* Save a life */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">You Could Save a Life</h2>
                        <p>Cardiac arrest can happen anywhere — at home, at work, or in public. It can affect people of any age and often happens without warning.</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>It can affect people of any age</li>
                            <li>It often happens suddenly and without warning</li>
                            <li>Immediate action is critical</li>
                        </ul>
                        <p className="mt-3">
                            Knowing{" "}
                            <Link href="/blog/how-to-perform-cpr" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how to perform CPR
                            </Link>{" "}
                            and{" "}
                            <Link href="/blog/how-to-use-a-defibrillator" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how to use a defibrillator
                            </Link>{" "}
                            could allow you to save someone&apos;s life before emergency services arrive.
                        </p>
                    </section>

                    {/* Every second matters */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Every Second Matters</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                Brain damage can begin within{" "}
                                <Link href="/#faq" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                    4 minutes of cardiac arrest
                                </Link>
                            </li>
                            <li>Ambulances may take longer to arrive</li>
                            <li>Survival depends on immediate action from whoever is present</li>
                        </ul>
                        <p className="mt-3">A trained bystander is often the difference between life and death.</p>
                    </section>

                    {/* Confidence */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">You Gain Real Confidence</h2>
                        <p>Many people feel unsure about what to do in an emergency. A CFR course helps you:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Stay calm under pressure</li>
                            <li>Know exactly what steps to take</li>
                            <li>Act quickly without hesitation</li>
                        </ul>
                        <p className="mt-3">Confidence is just as important as knowledge — and it only comes from hands-on practice.</p>
                    </section>

                    {/* Not just for healthcare workers */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">It Is Not Just for Healthcare Workers</h2>
                        <p>You do not need any medical background. CFR courses are ideal for:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Parents</li>
                            <li>Office workers</li>
                            <li>Fitness professionals</li>
                            <li>Teachers</li>
                            <li>Anyone who wants to be prepared</li>
                        </ul>
                        <p className="mt-3">These are skills everyone should have.</p>
                    </section>

                    {/* Career benefit */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">It Can Benefit Your Career</h2>
                        <p>Many workplaces value or require CPR training. Having certification can:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Strengthen your CV</li>
                            <li>Help meet workplace safety requirements</li>
                            <li>Make you a more valuable team member</li>
                        </ul>
                        <p className="mt-3">
                            Read more about{" "}
                            <Link href="/blog/how-long-does-cpr-certificate-last" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how long a CFR certificate lasts
                            </Link>{" "}
                            and what happens when it expires.
                        </p>
                    </section>

                    {/* Affordable */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">It Is Affordable and Valuable</h2>
                        <p>
                            In Dublin, most courses cost around{" "}
                            <Link href="/blog/how-much-does-a-cpr-course-cost-in-dublin" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                €80 to €100
                            </Link>
                            . For a small investment, you gain:
                        </p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Life-saving skills</li>
                            <li>Recognised PHECC certification</li>
                            <li>Confidence to act in a real emergency</li>
                        </ul>
                        <p className="mt-3">It is one of the most valuable skills you can learn.</p>
                    </section>

                    {/* What is covered */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What a CFR Course Includes</h2>
                        <p>
                            A typical{" "}
                            <Link href="/#course-content" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                Cardiac First Responder course
                            </Link>{" "}
                            covers:
                        </p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>CPR for adults, children, and infants</li>
                            <li>AED (defibrillator) use</li>
                            <li>Choking, stroke, and heart attack response</li>
                            <li>Real-life emergency scenarios</li>
                        </ul>
                        <p className="mt-3">Training is practical, interactive, and designed to be easy to follow.</p>
                    </section>

                    {/* Small classes */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Small Classes Make It Better</h2>
                        <p>Smaller groups allow for:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>More hands-on practice per person</li>
                            <li>More instructor support</li>
                            <li>Greater confidence by the end of the course</li>
                        </ul>
                        <p className="mt-3">
                            Read more about{" "}
                            <Link href="/blog/best-cpr-courses-in-dublin" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                what to look for when choosing a CPR course in Dublin
                            </Link>
                            .
                        </p>
                    </section>

                    {/* Common concerns */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Concerns</h2>

                        <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">What if I forget everything?</h3>
                        <p>Practical training helps it stick — and refresher courses keep your skills up to date over time.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Is it difficult?</h3>
                        <p>No — courses are designed for beginners and are easy to follow. No prior experience is needed.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Will I actually use it?</h3>
                        <p>You might never need it — but if you do, it could save a life.</p>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gray-50 rounded-lg p-6 sm:p-8 border-l-4 border-[#66bb6a]">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Learn Life-Saving Skills?</h2>
                        <p className="mb-4">
                            Our{" "}
                            <Link href="/#course-content" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                Cardiac First Responder course
                            </Link>{" "}
                            is designed for people with no prior experience. Small classes, expert instruction, and hands-on practice — everything you need to be ready when it matters most.
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
                        <p className="mb-3">
                            A Cardiac First Responder course is not just another qualification — it is a skill that can make a real difference.
                        </p>
                        <p className="mb-3">
                            You may never need to use it. But if the moment comes, you will be ready.
                        </p>
                        <p>
                            If you want to gain confidence and be prepared for real emergencies,{" "}
                            <Link href="/#contact" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                book your Cardiac First Responder course today
                            </Link>
                            .
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
