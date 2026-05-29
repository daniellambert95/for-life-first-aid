import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "First Aid Course Dublin: What to Expect & How to Book | For Life First Aid",
    description: "Looking for a first aid course in Dublin? Learn what a quality first aid course covers, how long it takes, and how to book a PHECC-certified course in Dundrum, Dublin.",
    keywords: ["first aid course Dublin", "first aid training Dublin", "first aid Dublin", "CPR course Dublin", "PHECC first aid Dublin", "cardiac first responder Dublin", "community first responder Dublin", "first aid certificate Dublin"],
    alternates: {
        canonical: "https://www.cardiacfirstrespondercourse.ie/blog/first-aid-course-dublin",
    },
    openGraph: {
        title: "First Aid Course Dublin: What to Expect & How to Book | For Life First Aid",
        description: "Looking for a first aid course in Dublin? Learn what a quality first aid course covers, how long it takes, and how to book a PHECC-certified course in Dundrum, Dublin.",
        type: "article",
        locale: "en_IE",
        siteName: "For Life First Aid",
        publishedTime: "2025-05-15T00:00:00.000Z",
        authors: ["Cathy Vard"],
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "First Aid Course Dublin: What to Expect & How to Book",
    "description": "Looking for a first aid course in Dublin? Learn what a quality first aid course covers, how long it takes, and how to book a PHECC-certified course in Dundrum, Dublin.",
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
    "datePublished": "2025-05-15",
    "dateModified": "2025-05-15",
    "url": "https://www.cardiacfirstrespondercourse.ie/blog/first-aid-course-dublin",
    "inLanguage": "en-IE",
    "mainEntityOfPage": "https://www.cardiacfirstrespondercourse.ie/blog/first-aid-course-dublin"
};

export default function FirstAidCourseDublin() {
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

                <p className="text-sm text-gray-500 mb-4">Published 15 May 2025 · For Life First Aid</p>

                <h1 className="text-4xl sm:text-5xl font-bold text-[#66bb6a] mb-6 leading-tight">
                    First Aid Course Dublin: What to Expect & How to Book
                </h1>

                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    Searching for a first aid course in Dublin? Whether you want to protect your family, satisfy a workplace requirement, or simply feel more prepared, this guide walks you through what a good first aid course covers, how to choose one, and where to book in Dublin.
                </p>

                <hr className="border-gray-200 mb-10" />

                <div className="prose prose-lg max-w-none space-y-10 text-gray-700">

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Do a First Aid Course in Dublin?</h2>
                        <p>Cardiac arrest can happen anywhere — at home, on the street, in a workplace, or at a sporting event. In Ireland, survival rates for out-of-hospital cardiac arrest are significantly higher when a bystander steps in before the ambulance arrives.</p>
                        <p className="mt-3">A first aid course gives you the knowledge and confidence to be that person. You do not need any medical background — just a willingness to learn.</p>
                        <p className="mt-3">Common reasons people book a first aid course in Dublin include:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Peace of mind for their family, especially with young children or elderly relatives</li>
                            <li>Workplace health and safety requirements</li>
                            <li>Sports clubs, community groups, and schools seeking trained responders</li>
                            <li>Personal development and confidence in emergencies</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Does a First Aid Course in Dublin Cover?</h2>
                        <p>The content varies by course type, but a quality first aid course should cover the core life-saving skills you are most likely to need in a real emergency.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">CPR (Cardiopulmonary Resuscitation)</h3>
                        <p>
                            You will learn{" "}
                            <Link href="/blog/how-to-perform-cpr" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how to perform CPR
                            </Link>{" "}
                            on adults, children, and infants — including chest compression technique, depth, rate, and rescue breaths.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">AED Use (Defibrillator)</h3>
                        <p>
                            AEDs are now widely available across Dublin in shopping centres, sports facilities, and public buildings. A first aid course will teach you{" "}
                            <Link href="/blog/how-to-use-a-defibrillator" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how to use a defibrillator
                            </Link>{" "}
                            confidently — they are designed to be used by anyone, with no medical training required.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Recognising a Cardiac Emergency</h3>
                        <p>
                            Many people cannot tell the difference between a{" "}
                            <Link href="/blog/heart-attack-vs-cardiac-arrest" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                heart attack and a cardiac arrest
                            </Link>
                            . A first aid course will help you recognise the signs of each and respond correctly.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Choking Response</h3>
                        <p>You will learn how to help a choking adult, child, or infant — including back blows and abdominal thrusts.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Stroke Recognition</h3>
                        <p>Using the FAST method (Face, Arms, Speech, Time), you will learn to spot the signs of a stroke and know when to call 999.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">What to Do if Someone Collapses</h3>
                        <p>
                            From checking for danger to calling for help and starting CPR, our guide on{" "}
                            <Link href="/blog/what-to-do-if-someone-collapses" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                what to do if someone collapses
                            </Link>{" "}
                            walks through the exact steps a first aid course will teach you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Certification Will I Get?</h2>
                        <p>In Ireland, the most recognised first aid certification for cardiac emergencies is the <strong>PHECC Cardiac First Responder (CFR)</strong> certificate, awarded by the Pre-Hospital Emergency Care Council.</p>
                        <p className="mt-3">This is a nationally recognised, regulator-approved qualification that:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Is accepted by employers across Ireland</li>
                            <li>Meets occupational health and safety requirements</li>
                            <li>Is valid for two years before renewal is required</li>
                        </ul>
                        <p className="mt-3">
                            Read more about{" "}
                            <Link href="/blog/how-long-does-cpr-certificate-last" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how long a CFR certificate lasts in Ireland
                            </Link>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long Is a First Aid Course in Dublin?</h2>
                        <p>A Cardiac First Responder course typically takes around 3 to 3.5 hours. This is enough time to cover all the core content with plenty of hands-on practice — without taking up a full day.</p>
                        <p className="mt-3">Courses run on weekdays and weekends to suit different schedules.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much Does a First Aid Course Cost in Dublin?</h2>
                        <p>
                            Most quality first aid courses in Dublin cost between €80 and €100. For more detail, read our guide on{" "}
                            <Link href="/blog/how-much-does-a-cpr-course-cost-in-dublin" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how much a CPR course costs in Dublin
                            </Link>
                            .
                        </p>
                        <p className="mt-3">When comparing courses, look beyond price — small class sizes and hands-on training matter more than saving €10.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes a Good First Aid Course?</h2>
                        <p>Not every course is the same. Before booking, look for:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li><strong>PHECC certification</strong> — the nationally recognised standard in Ireland</li>
                            <li><strong>Small class sizes</strong> — ideally 6 or fewer, so you get enough hands-on practice time</li>
                            <li><strong>Practical training</strong> — manikins, real AED equipment, and emergency scenarios</li>
                            <li><strong>An experienced instructor</strong> — someone who makes the course approachable and confidence-building</li>
                        </ul>
                        <p className="mt-3">
                            For a full checklist, read our guide on{" "}
                            <Link href="/blog/best-cpr-courses-in-dublin" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                what to look for in a CPR course in Dublin
                            </Link>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Questions</h2>

                        <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Do I need any experience to do a first aid course?</h3>
                        <p>No. First aid courses are designed for complete beginners. There is no prior knowledge required — just a willingness to learn.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Is a first aid course worth doing?</h3>
                        <p>
                            Yes — and we have written a full piece on{" "}
                            <Link href="/blog/is-a-cardiac-first-responder-course-worth-it" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                whether a Cardiac First Responder course is worth it
                            </Link>
                            . The short answer: knowing what to do in the first few minutes of a cardiac emergency can be the difference between life and death.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Where in Dublin are courses held?</h3>
                        <p>
                            Our courses are held at{" "}
                            <Link href="/#location" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                Dundrum Town Centre, Dublin
                            </Link>
                            , which is easily accessible by Luas, bus, and car.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Can I book a course for a group or workplace?</h3>
                        <p>Yes. Group and corporate bookings are welcome. Contact us to arrange a session that suits your team.</p>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gray-50 rounded-lg p-6 sm:p-8 border-l-4 border-[#66bb6a]">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Book a First Aid Course in Dundrum, Dublin</h2>
                        <p className="mb-4">
                            Our{" "}
                            <Link href="/#course-content" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                PHECC-certified Cardiac First Responder course
                            </Link>{" "}
                            runs in small groups of up to six people — so you get plenty of practice time and personal feedback.
                        </p>
                        <ul className="list-disc ml-6 space-y-2 mb-6">
                            <li>CPR for adults, children, and infants</li>
                            <li>Hands-on AED training with real equipment</li>
                            <li>Choking, stroke, and heart attack response</li>
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

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
                        <p className="mb-3">
                            A first aid course is one of the most practical things you can do for yourself, your family, or your workplace. In Dublin, there are good options available — but the key is to choose a course that is PHECC certified, hands-on, and taught in small groups.
                        </p>
                        <p>
                            If you are ready to take the next step,{" "}
                            <Link href="/#contact" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                get in touch to book your place
                            </Link>{" "}
                            on our next available course in Dundrum, Dublin.
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
