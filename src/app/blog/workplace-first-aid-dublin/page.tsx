import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Workplace First Aid Dublin: Training, Requirements & How to Book | For Life First Aid",
    description: "Does your Dublin workplace need first aid training? Learn about Irish health and safety requirements, what a workplace first aid course covers, and how to get your team certified.",
    keywords: ["workplace first aid Dublin", "first aid at work Dublin", "occupational first aid Dublin", "first aid training for employees Dublin", "PHECC workplace first aid", "corporate first aid course Dublin", "first aid course Dublin", "CFR workplace Dublin"],
    alternates: {
        canonical: "https://www.cardiacfirstrespondercourse.ie/blog/workplace-first-aid-dublin",
    },
    openGraph: {
        title: "Workplace First Aid Dublin: Training, Requirements & How to Book | For Life First Aid",
        description: "Does your Dublin workplace need first aid training? Learn about Irish health and safety requirements, what a workplace first aid course covers, and how to get your team certified.",
        type: "article",
        locale: "en_IE",
        siteName: "For Life First Aid",
        publishedTime: "2025-05-29T00:00:00.000Z",
        authors: ["Cathy Vard"],
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Workplace First Aid Dublin: Training, Requirements & How to Book",
    "description": "Does your Dublin workplace need first aid training? Learn about Irish health and safety requirements, what a workplace first aid course covers, and how to get your team certified.",
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
    "datePublished": "2025-05-29",
    "dateModified": "2025-05-29",
    "url": "https://www.cardiacfirstrespondercourse.ie/blog/workplace-first-aid-dublin",
    "inLanguage": "en-IE",
    "mainEntityOfPage": "https://www.cardiacfirstrespondercourse.ie/blog/workplace-first-aid-dublin"
};

export default function WorkplaceFirstAidDublin() {
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

                <p className="text-sm text-gray-500 mb-4">Published 29 May 2025 · For Life First Aid</p>

                <h1 className="text-4xl sm:text-5xl font-bold text-[#66bb6a] mb-6 leading-tight">
                    Workplace First Aid Dublin: Training, Requirements & How to Book
                </h1>

                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    Every workplace in Ireland has a legal obligation to have first aid provision in place. If you are an employer or health and safety officer in Dublin looking to get staff trained, this guide covers what the law requires, what a workplace first aid course includes, and how to get your team certified.
                </p>

                <hr className="border-gray-200 mb-10" />

                <div className="prose prose-lg max-w-none space-y-10 text-gray-700">

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Do Irish Workplaces Have to Provide First Aid?</h2>
                        <p>Yes. Under the <strong>Safety, Health and Welfare at Work (General Application) Regulations 2007</strong>, Irish employers are required to ensure that adequate first aid equipment and a sufficient number of trained first aiders are available in the workplace.</p>
                        <p className="mt-3">The Health and Safety Authority (HSA) provides guidance on what "adequate" means for different workplace types. The key factors are:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>The number of employees on site</li>
                            <li>The nature of the work and associated risks</li>
                            <li>Whether the workplace operates across multiple shifts</li>
                            <li>The proximity to emergency services</li>
                        </ul>
                        <p className="mt-3">For many offices and low-risk workplaces, having one or two employees trained in cardiac first response — alongside a stocked first aid kit — meets the requirement. For higher-risk environments, a higher ratio of trained first aiders is expected.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Workplace First Aid Course?</h2>
                        <p>A workplace first aid course trains employees to respond to medical emergencies on site — before an ambulance arrives. The most relevant certification for cardiac emergencies in Irish workplaces is the <strong>PHECC Cardiac First Responder (CFR)</strong> qualification.</p>
                        <p className="mt-3">A CFR course covers:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>
                                <Link href="/blog/how-to-perform-cpr" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                    CPR
                                </Link>{" "}
                                for adults, children, and infants
                            </li>
                            <li>
                                <Link href="/blog/how-to-use-a-defibrillator" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                    AED (defibrillator) use
                                </Link>
                            </li>
                            <li>Recognising and responding to{" "}
                                <Link href="/blog/heart-attack-vs-cardiac-arrest" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                    heart attack and cardiac arrest
                                </Link>
                            </li>
                            <li>Choking response for adults and children</li>
                            <li>Stroke recognition using the FAST method</li>
                            <li>
                                What to do{" "}
                                <Link href="/blog/what-to-do-if-someone-collapses" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                    if a colleague collapses
                                </Link>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why the CFR Certificate Is the Right Choice for Most Dublin Workplaces</h2>
                        <p>There are different levels of first aid certification available in Ireland. For the majority of Dublin office and retail environments, a PHECC CFR certificate is the most practical option because:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>It is a nationally recognised, regulator-approved qualification</li>
                            <li>It is completed in a single session of around 3.5 hours — minimal disruption to the workday</li>
                            <li>It focuses on the emergencies most likely to occur in any workplace: cardiac arrest, choking, and collapse</li>
                            <li>It is valid for two years, with a short refresher course required for renewal</li>
                        </ul>
                        <p className="mt-3">
                            For more detail on the certification,{" "}
                            <Link href="/blog/cfr-course-dublin" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                read our full guide to CFR courses in Dublin
                            </Link>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Workplace First Aid Training Matters Beyond Compliance</h2>
                        <p>Legal requirements aside, the case for workplace first aid training in Dublin is straightforward: cardiac arrest can happen to anyone, at any age, in any setting — including an office, a school staffroom, or a retail floor.</p>
                        <p className="mt-3">In Ireland, the average ambulance response time in an urban area is around 8 to 12 minutes. Survival rates for cardiac arrest drop by approximately 10% for every minute without CPR. A trained colleague who starts CPR immediately can double or triple a person&apos;s chance of survival.</p>
                        <p className="mt-3">
                            Read more about{" "}
                            <Link href="/blog/is-a-cardiac-first-responder-course-worth-it" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                why a Cardiac First Responder course is worth it
                            </Link>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Many Staff Need to Be First Aid Trained?</h2>
                        <p>The HSA does not set a single mandatory ratio for all workplaces — it depends on the risk assessment for your specific environment. As a general guideline:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li><strong>Low-risk workplaces</strong> (offices, retail): at least one trained first aider per 50 employees</li>
                            <li><strong>Higher-risk workplaces</strong> (construction, manufacturing): a higher ratio is expected</li>
                            <li><strong>Multi-shift operations:</strong> at least one trained first aider should be present on every shift</li>
                        </ul>
                        <p className="mt-3">Training more than the minimum is always a sensible approach — absences, shift changes, and staff turnover mean that relying on a single person is a risk.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much Does Workplace First Aid Training Cost in Dublin?</h2>
                        <p>
                            A PHECC CFR course costs €85 per person. For groups or team bookings, contact us to discuss dates and availability.{" "}
                            <Link href="/blog/how-much-does-a-cpr-course-cost-in-dublin" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                Read our full guide on CPR course costs in Dublin
                            </Link>{" "}
                            for more context on what to expect.
                        </p>
                        <p className="mt-3">Compared to the cost of a day&apos;s training elsewhere, a 3.5-hour course that delivers a two-year PHECC qualification represents strong value — both financially and in terms of staff confidence.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long Is the Certification Valid?</h2>
                        <p>
                            A PHECC CFR certificate is valid for <strong>two years</strong>. After that, a refresher course is required to renew it.{" "}
                            <Link href="/blog/how-long-does-cpr-certificate-last" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                Read more about how long a CFR certificate lasts in Ireland
                            </Link>
                            .
                        </p>
                        <p className="mt-3">We recommend keeping a record of your staff&apos;s certification dates so renewals can be scheduled before certificates lapse.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Questions</h2>

                        <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Can the course be run at our workplace?</h3>
                        <p>Our courses are currently held at Dundrum Town Centre, Dublin. Group bookings can be arranged to suit your team — contact us to discuss scheduling.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Do employees need any prior training?</h3>
                        <p>No. The CFR course is designed for complete beginners. No medical background is required.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Is PHECC certification accepted by the HSA?</h3>
                        <p>PHECC is the statutory pre-hospital emergency care regulator in Ireland. A PHECC CFR certificate is a nationally recognised qualification that is accepted by employers and regulatory bodies across Ireland.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">How do we book as a group?</h3>
                        <p>
                            Contact us via the{" "}
                            <Link href="/#contact" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                booking form
                            </Link>{" "}
                            or call <a href="tel:+353868961087" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">+353-86-896-1087</a> to discuss availability.
                        </p>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gray-50 rounded-lg p-6 sm:p-8 border-l-4 border-[#66bb6a]">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Your Team First Aid Certified in Dublin</h2>
                        <p className="mb-4">
                            Our{" "}
                            <Link href="/#course-content" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                PHECC-certified Cardiac First Responder course
                            </Link>{" "}
                            runs in small groups of up to six — ideal for team bookings where everyone gets proper hands-on practice.
                        </p>
                        <ul className="list-disc ml-6 space-y-2 mb-6">
                            <li>CPR for adults, children, and infants</li>
                            <li>Hands-on AED training with real equipment</li>
                            <li>Choking, stroke, and heart attack response</li>
                            <li>Nationally recognised PHECC certification</li>
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
                                    €85 per person
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
                            Workplace first aid training is both a legal obligation and a genuine investment in your team&apos;s safety. In a cardiac emergency, a trained colleague who acts immediately is the single most important factor in survival.
                        </p>
                        <p>
                            If you are looking to get your Dublin team first aid certified,{" "}
                            <Link href="/#contact" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                get in touch today
                            </Link>{" "}
                            to discuss group bookings and availability.
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
