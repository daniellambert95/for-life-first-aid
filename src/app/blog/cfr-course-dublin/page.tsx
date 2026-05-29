import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CFR Course Dublin: PHECC Cardiac First Responder Training | For Life First Aid",
    description: "Everything you need to know about a CFR (Cardiac First Responder) course in Dublin — what it covers, how long it takes, how much it costs, and where to book.",
    keywords: ["CFR course Dublin", "cardiac first responder Dublin", "cardiac first responder course Dublin", "PHECC CFR Dublin", "CFR training Dublin", "community first responder course Dublin", "CPR certification Dublin", "first aid course Dublin 2026"],
    alternates: {
        canonical: "https://www.cardiacfirstrespondercourse.ie/blog/cfr-course-dublin",
    },
    openGraph: {
        title: "CFR Course Dublin: PHECC Cardiac First Responder Training | For Life First Aid",
        description: "Everything you need to know about a CFR (Cardiac First Responder) course in Dublin — what it covers, how long it takes, how much it costs, and where to book.",
        type: "article",
        locale: "en_IE",
        siteName: "For Life First Aid",
        publishedTime: "2025-05-20T00:00:00.000Z",
        authors: ["Cathy Vard"],
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "CFR Course Dublin: PHECC Cardiac First Responder Training",
    "description": "Everything you need to know about a CFR (Cardiac First Responder) course in Dublin — what it covers, how long it takes, how much it costs, and where to book.",
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
    "datePublished": "2025-05-20",
    "dateModified": "2025-05-20",
    "url": "https://www.cardiacfirstrespondercourse.ie/blog/cfr-course-dublin",
    "inLanguage": "en-IE",
    "mainEntityOfPage": "https://www.cardiacfirstrespondercourse.ie/blog/cfr-course-dublin"
};

export default function CFRCourseDublin() {
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

                <p className="text-sm text-gray-500 mb-4">Published 20 May 2025 · For Life First Aid</p>

                <h1 className="text-4xl sm:text-5xl font-bold text-[#66bb6a] mb-6 leading-tight">
                    CFR Course Dublin: PHECC Cardiac First Responder Training
                </h1>

                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    A CFR (Cardiac First Responder) course is the most widely recognised first aid qualification for cardiac emergencies in Ireland. If you are looking for a CFR course in Dublin, this guide covers everything you need to know — what it includes, who it is for, and how to book.
                </p>

                <hr className="border-gray-200 mb-10" />

                <div className="prose prose-lg max-w-none space-y-10 text-gray-700">

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a CFR Course?</h2>
                        <p>CFR stands for <strong>Cardiac First Responder</strong>. It is a PHECC-approved (Pre-Hospital Emergency Care Council) qualification that trains ordinary people to respond to cardiac emergencies before an ambulance arrives.</p>
                        <p className="mt-3">A CFR course is not just a CPR class. It covers the full chain of survival for cardiac arrest — from recognising an emergency and calling for help, to performing CPR and using a defibrillator.</p>
                        <p className="mt-3">The CFR qualification is recognised across Ireland and is commonly required for:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Sports coaches and club welfare officers</li>
                            <li>Workplace health and safety roles</li>
                            <li>Schools, creches, and childcare settings</li>
                            <li>Community first responder groups</li>
                            <li>Anyone who wants to be prepared for a cardiac emergency</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Does a CFR Course Cover?</h2>
                        <p>A PHECC Cardiac First Responder course in Dublin covers all the skills you need to respond to a life-threatening emergency.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">CPR for Adults, Children, and Infants</h3>
                        <p>
                            You will learn{" "}
                            <Link href="/blog/how-to-perform-cpr" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how to perform CPR
                            </Link>{" "}
                            correctly on all age groups — with hands-on practice on manikins so you build real confidence, not just theory.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">AED (Defibrillator) Use</h3>
                        <p>
                            Defibrillators are now available in most public buildings across Dublin. You will practise{" "}
                            <Link href="/blog/how-to-use-a-defibrillator" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how to use an AED
                            </Link>{" "}
                            on real training equipment — so that if you ever need to use one, you will not hesitate.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Recognising a Cardiac Arrest vs. a Heart Attack</h3>
                        <p>
                            Understanding the{" "}
                            <Link href="/blog/heart-attack-vs-cardiac-arrest" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                difference between a heart attack and cardiac arrest
                            </Link>{" "}
                            is essential — the response is very different, and time matters.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Choking Response</h3>
                        <p>You will learn the correct technique for helping a choking adult, child, or infant, including back blows and abdominal thrusts.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Stroke Recognition</h3>
                        <p>Using the FAST test (Face, Arms, Speech, Time), you will learn to identify the signs of a stroke quickly and know when to call 999.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">The Chain of Survival</h3>
                        <p>
                            From recognising the emergency to calling for help and handing over to paramedics — the CFR course teaches the full sequence. Our guide on{" "}
                            <Link href="/blog/what-to-do-if-someone-collapses" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                what to do if someone collapses
                            </Link>{" "}
                            covers this step by step.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long Does a CFR Course Take?</h2>
                        <p>A CFR course in Dublin typically takes around 3 to 3.5 hours. It is designed to be completed in a single session — so you do not need to take a full day off work.</p>
                        <p className="mt-3">The course is structured to balance theory and hands-on practice. With small class sizes, everyone gets sufficient time on the manikins and AED equipment.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much Does a CFR Course Cost in Dublin?</h2>
                        <p>
                            A CFR course in Dublin typically costs between €80 and €100. Our course is priced at €85, with a €50 deposit required at the time of booking. For a full breakdown, read our guide on{" "}
                            <Link href="/blog/how-much-does-a-cpr-course-cost-in-dublin" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how much a CPR course costs in Dublin
                            </Link>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long Is a CFR Certificate Valid?</h2>
                        <p>
                            A PHECC Cardiac First Responder certificate is valid for <strong>two years</strong>. After that, a refresher course is required to renew your certification. For more detail, read our guide on{" "}
                            <Link href="/blog/how-long-does-cpr-certificate-last" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how long a CFR certificate lasts in Ireland
                            </Link>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Is a CFR Course Worth Doing?</h2>
                        <p>Yes. Cardiac arrest can happen to anyone — a family member, a colleague, a stranger on the street. When someone goes into cardiac arrest, every minute without CPR reduces the chance of survival by around 10%.</p>
                        <p className="mt-3">A CFR course gives you the skills and the confidence to act immediately while waiting for an ambulance. That window is often the most critical.</p>
                        <p className="mt-3">
                            We have written a full piece on{" "}
                            <Link href="/blog/is-a-cardiac-first-responder-course-worth-it" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                whether a Cardiac First Responder course is worth it
                            </Link>{" "}
                            — including the real-world difference it makes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Questions About CFR Courses in Dublin</h2>

                        <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Do I need any experience to do a CFR course?</h3>
                        <p>No. CFR courses are designed for complete beginners. There are no entry requirements — anyone can attend.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Is a CFR course the same as a CPR course?</h3>
                        <p>A CFR course includes CPR, but it goes further. It also covers AED use, choking response, stroke recognition, and heart attack awareness. It is a more complete qualification than a basic CPR class.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Is a PHECC CFR certificate recognised by employers in Ireland?</h3>
                        <p>Yes. PHECC certification is the nationally recognised standard for pre-hospital emergency care in Ireland. It is accepted by employers, sports organisations, and regulatory bodies.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Where in Dublin are CFR courses held?</h3>
                        <p>
                            Our CFR courses are held at{" "}
                            <Link href="/#location" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                Dundrum Town Centre, Dublin
                            </Link>
                            , easily accessible by Luas, bus, and car. There is also parking available on-site.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Can I book a CFR course for a group?</h3>
                        <p>Yes. We welcome group bookings for workplaces, sports clubs, schools, and community organisations. Contact us to discuss dates and availability.</p>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gray-50 rounded-lg p-6 sm:p-8 border-l-4 border-[#66bb6a]">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Book a CFR Course in Dundrum, Dublin</h2>
                        <p className="mb-4">
                            For Life First Aid runs PHECC-certified{" "}
                            <Link href="/#course-content" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                Cardiac First Responder courses
                            </Link>{" "}
                            in small groups of up to six — so everyone gets hands-on practice time and individual feedback.
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
                            A CFR course is one of the most practical skills you can have. It takes less than half a day, costs less than €100, and gives you the confidence to respond effectively when it matters most.
                        </p>
                        <p>
                            If you are ready to book a CFR course in Dublin,{" "}
                            <Link href="/#contact" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                get in touch today
                            </Link>{" "}
                            to check availability and reserve your place.
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
