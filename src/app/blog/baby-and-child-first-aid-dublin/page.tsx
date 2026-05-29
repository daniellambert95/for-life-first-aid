import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Baby & Child First Aid in Dublin: CPR, Choking & AED | For Life First Aid",
    description: "Learn what to do if a baby or child collapses, chokes, or goes into cardiac arrest. A practical guide for parents in Dublin — and how to get certified.",
    keywords: ["baby first aid Dublin", "child first aid Dublin", "infant CPR Dublin", "first aid course for parents Dublin", "baby choking Dublin", "child CPR Dublin", "paediatric first aid Dublin", "first aid course Dublin"],
    alternates: {
        canonical: "https://www.cardiacfirstrespondercourse.ie/blog/baby-and-child-first-aid-dublin",
    },
    openGraph: {
        title: "Baby & Child First Aid in Dublin: CPR, Choking & AED | For Life First Aid",
        description: "Learn what to do if a baby or child collapses, chokes, or goes into cardiac arrest. A practical guide for parents in Dublin — and how to get certified.",
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
    "headline": "Baby & Child First Aid in Dublin: CPR, Choking & AED",
    "description": "Learn what to do if a baby or child collapses, chokes, or goes into cardiac arrest. A practical guide for parents in Dublin — and how to get certified.",
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
    "url": "https://www.cardiacfirstrespondercourse.ie/blog/baby-and-child-first-aid-dublin",
    "inLanguage": "en-IE",
    "mainEntityOfPage": "https://www.cardiacfirstrespondercourse.ie/blog/baby-and-child-first-aid-dublin"
};

export default function BabyAndChildFirstAidDublin() {
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
                    Baby & Child First Aid in Dublin: CPR, Choking & What to Do in an Emergency
                </h1>

                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    For any parent, carer, or childcare worker, knowing what to do in a paediatric emergency is one of the most important skills you can have. This guide covers infant and child CPR, choking response, and how to get properly trained in Dublin.
                </p>

                <hr className="border-gray-200 mb-10" />

                <div className="prose prose-lg max-w-none space-y-10 text-gray-700">

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Parents and Carers Should Learn First Aid</h2>
                        <p>Emergencies involving babies and children are rare — but when they happen, every second counts. The most common paediatric emergencies that first aid training prepares you for include:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li><strong>Choking</strong> — a leading cause of injury in infants and toddlers</li>
                            <li><strong>Cardiac arrest</strong> — less common in children than adults, but survival depends entirely on immediate CPR</li>
                            <li><strong>Drowning or near-drowning</strong> — requires immediate rescue breathing and CPR</li>
                            <li><strong>Unresponsiveness</strong> — from seizures, allergic reactions, or other causes</li>
                        </ul>
                        <p className="mt-3">In all of these situations, what you do in the first two to three minutes makes the greatest difference — long before an ambulance can arrive.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">CPR for Infants and Children: How It Differs from Adults</h2>
                        <p>
                            The principles of CPR are the same across all age groups, but the technique changes for infants and children. Our full guide on{" "}
                            <Link href="/blog/how-to-perform-cpr" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how to perform CPR
                            </Link>{" "}
                            covers adults, children, and infants in detail. Here is a quick overview of the key differences:
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Infant CPR (Under 1 Year)</h3>
                        <ul className="list-disc ml-6 space-y-2 mt-2">
                            <li>Use two fingers (not the heel of your hand) for chest compressions</li>
                            <li>Compress the chest by about 4 cm — roughly one third of the chest depth</li>
                            <li>Cover both the mouth and nose with your mouth for rescue breaths</li>
                            <li>Give 30 compressions to every 2 rescue breaths (same ratio as adults)</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Child CPR (1 Year to Puberty)</h3>
                        <ul className="list-disc ml-6 space-y-2 mt-2">
                            <li>Use one or two hands depending on the size of the child</li>
                            <li>Compress the chest by about 5 cm</li>
                            <li>Cover the mouth only for rescue breaths (pinch the nose)</li>
                            <li>30 compressions to 2 rescue breaths</li>
                        </ul>

                        <div className="bg-gray-50 border-l-4 border-[#66bb6a] rounded p-4 mt-4">
                            <p className="text-sm font-medium text-gray-800">For children and infants, give 5 rescue breaths <em>before</em> starting chest compressions — this differs from adult CPR, where compressions come first.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do If a Baby or Child Is Choking</h2>
                        <p>Choking is one of the most frightening emergencies a parent can face. It can happen in seconds — often during feeding or play. Knowing what to do immediately can prevent a tragedy.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">If an Infant Is Choking</h3>
                        <ol className="list-decimal ml-6 space-y-2 mt-2">
                            <li>Hold the baby face-down along your forearm, supporting their head</li>
                            <li>Give up to 5 firm back blows between the shoulder blades with the heel of your hand</li>
                            <li>Turn the baby face-up and give up to 5 chest thrusts using two fingers on the centre of the chest</li>
                            <li>Check the mouth after each set — only remove an object if you can clearly see it</li>
                            <li>Call 999 if the obstruction does not clear, or if the baby becomes unresponsive</li>
                        </ol>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">If a Child Is Choking</h3>
                        <ol className="list-decimal ml-6 space-y-2 mt-2">
                            <li>Encourage them to cough if they can — an effective cough is the best way to clear an airway</li>
                            <li>If they cannot cough or are not shifting the obstruction, give up to 5 back blows between the shoulder blades</li>
                            <li>If that does not work, give up to 5 abdominal thrusts (Heimlich manoeuvre)</li>
                            <li>Alternate between back blows and abdominal thrusts</li>
                            <li>Call 999 if the blockage does not clear, or if the child loses consciousness</li>
                        </ol>

                        <div className="bg-gray-50 border-l-4 border-[#66bb6a] rounded p-4 mt-4">
                            <p className="text-sm font-medium text-gray-800">Never perform abdominal thrusts on an infant — use chest thrusts only. A first aid course will give you hands-on practice with both techniques so you can respond calmly under pressure.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do If a Child Collapses</h2>
                        <p>
                            The same sequence applies as for an adult collapse — check for danger, check for response, call for help, and start CPR if they are not breathing normally. Our guide on{" "}
                            <Link href="/blog/what-to-do-if-someone-collapses" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                what to do if someone collapses
                            </Link>{" "}
                            covers the full step-by-step sequence.
                        </p>
                        <p className="mt-3">For children, remember:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Give 5 initial rescue breaths before starting CPR</li>
                            <li>AEDs can be used on children — most modern AEDs have a paediatric setting or paediatric pads</li>
                            <li>If paediatric pads are not available, standard adult pads can be used on children over 8 years old</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Can You Use a Defibrillator on a Child?</h2>
                        <p>
                            Yes. AEDs can and should be used on children in cardiac arrest. Most AEDs now have a paediatric mode or smaller paediatric pads for use on children under 8. Our guide on{" "}
                            <Link href="/blog/how-to-use-a-defibrillator" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                how to use a defibrillator
                            </Link>{" "}
                            explains this in detail.
                        </p>
                        <p className="mt-3">The key message: do not hesitate to use an AED on a child. The device will assess the heart rhythm and only deliver a shock if it is needed.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Should Do a Baby and Child First Aid Course in Dublin?</h2>
                        <p>A first aid course that includes infant and child CPR is valuable for anyone who spends time around young children:</p>
                        <ul className="list-disc ml-6 space-y-2 mt-3">
                            <li>Parents and grandparents</li>
                            <li>Childminders and au pairs</li>
                            <li>Creche and preschool staff</li>
                            <li>School staff and teachers</li>
                            <li>Sports coaches working with youth teams</li>
                            <li>Anyone expecting a new baby</li>
                        </ul>
                        <p className="mt-3">You do not need any medical background. The skills are straightforward to learn — and a good course will leave you feeling calm and prepared rather than overwhelmed.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Questions</h2>

                        <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Does the CFR course cover infant and child CPR?</h3>
                        <p>Yes. Our PHECC-certified Cardiac First Responder course covers CPR for adults, children, and infants — as well as choking response for all age groups.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">How long does the course take?</h3>
                        <p>Approximately 3.5 hours. It is designed to be completed in a single session, with plenty of hands-on practice time.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Do I need experience to attend?</h3>
                        <p>No experience is required. The course is designed for complete beginners and is suitable for anyone, regardless of background.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Where is the course held?</h3>
                        <p>
                            Our courses are held at{" "}
                            <Link href="/#location" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                Dundrum Town Centre, Dublin
                            </Link>
                            , accessible by Luas, bus, and car.
                        </p>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gray-50 rounded-lg p-6 sm:p-8 border-l-4 border-[#66bb6a]">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Certified in Dundrum, Dublin</h2>
                        <p className="mb-4">
                            Our{" "}
                            <Link href="/#course-content" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                PHECC-certified Cardiac First Responder course
                            </Link>{" "}
                            covers infant and child CPR, choking response, AED use, and more — in a small group of up to six people.
                        </p>
                        <ul className="list-disc ml-6 space-y-2 mb-6">
                            <li>CPR for adults, children, and infants</li>
                            <li>Choking response for all age groups</li>
                            <li>Hands-on AED training with real equipment</li>
                            <li>Stroke and heart attack recognition</li>
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
                            No parent wants to think about their child in a medical emergency — but being prepared is one of the most loving things you can do. A few hours of first aid training can give you the confidence and skills to act calmly when it matters most.
                        </p>
                        <p>
                            If you are looking for a first aid course in Dublin that covers infant and child CPR,{" "}
                            <Link href="/#contact" className="text-[#66bb6a] hover:text-[#5aaa5e] underline underline-offset-2">
                                book your place today
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
