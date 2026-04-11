import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About For Life First Aid | PHECC Certified First Aid Training Dublin",
    description: "Learn about For Life First Aid and our instructor Cathy Vard. We provide PHECC certified Cardiac First Responder courses in Dundrum, Dublin. Small groups, hands-on training.",
    keywords: ["about For Life First Aid", "Cathy Vard instructor", "PHECC certified trainer Dublin", "first aid instructor Dundrum", "cardiac first responder trainer"],
    alternates: {
        canonical: "https://www.cardiacfirstrespondercourse.ie/about",
    },
    openGraph: {
        title: "About For Life First Aid | PHECC Certified First Aid Training Dublin",
        description: "Learn about For Life First Aid and our instructor Cathy Vard. PHECC certified Cardiac First Responder courses in Dundrum, Dublin.",
        type: "website",
        locale: "en_IE",
        siteName: "For Life First Aid",
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "url": "https://www.cardiacfirstrespondercourse.ie/about",
    "name": "About For Life First Aid",
    "description": "For Life First Aid provides PHECC certified Cardiac First Responder training in Dundrum, Dublin, led by certified instructor Cathy Vard.",
    "mainEntity": {
        "@type": "Person",
        "@id": "https://www.cardiacfirstrespondercourse.ie/#instructor",
        "name": "Cathy Vard",
        "jobTitle": "PHECC Certified First Aid Instructor",
        "worksFor": {
            "@type": "EducationalOrganization",
            "name": "For Life First Aid",
            "url": "https://www.cardiacfirstrespondercourse.ie"
        },
        "telephone": "+353-86-896-1087",
        "email": "cathyvard@gmail.com"
    }
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Hero */}
            <div className="bg-gradient-to-r from-[#66bb6a] to-[#4db6ac] text-white py-16 sm:py-20">
                <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors text-sm"
                    >
                        ← Back to Home
                    </Link>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">About For Life First Aid</h1>
                    <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                        Providing life-saving CPR and first aid training to help you respond confidently in medical emergencies.
                    </p>
                </div>
            </div>

            {/* Mission */}
            <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#66bb6a] mb-6">What We Do</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-5">
                    If a friend, loved one, work colleague, or a member of the public stopped breathing or collapsed in front of you — would you know how to help? If someone was choking, having a cardiac arrest, heart attack, or stroke, what would you do?
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-5">
                    At For Life First Aid, we run the <strong>PHECC-approved Cardiac First Responder (CFR) course</strong> — a hands-on, practical training programme designed to give you the skills and confidence to act in those critical first minutes.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Our courses are kept intentionally small — a maximum of six people — so every participant gets personal attention and real hands-on practice with training manikins and AED trainers.
                </p>

                <div className="mt-10 p-6 bg-gray-50 border-l-4 border-[#66bb6a] rounded-r-lg">
                    <p className="text-xl italic text-[#66bb6a] font-light leading-relaxed">
                        "Providing you with life-saving skills so you can respond to medical emergencies."
                    </p>
                </div>
            </div>

            {/* Instructor */}
            <div className="bg-gray-50 py-16 sm:py-20">
                <div className="max-w-5xl mx-auto px-6 sm:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="w-full lg:w-2/5 flex justify-center">
                            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] border-4 border-[#66bb6a] rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/assets/Cathy-Miller.webp"
                                    alt="Cathy Vard - PHECC Certified First Aid Instructor"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-3/5">
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#66bb6a] mb-2">Meet Your Instructor</h2>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Cathy Vard</h3>

                            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                                <p>
                                    Cathy is a PHECC certified First Aid Instructor with extensive experience in emergency care education. She brings both professionalism and a genuine passion for empowering everyday people with essential first aid skills.
                                </p>
                                <p>
                                    Her teaching approach is interactive, engaging, and focused on building real confidence — so that when an emergency happens, you act without hesitation.
                                </p>
                                <p>
                                    With class sizes capped at just six people, Cathy ensures every participant masters the skills they need through personalised coaching and hands-on practice.
                                </p>
                            </div>

                            <div className="mt-8 space-y-2 text-gray-700">
                                <p>
                                    <span className="font-semibold">Phone:</span>{" "}
                                    <a href="tel:+353868961087" className="text-[#66bb6a] hover:text-[#4db6ac] transition-colors underline">
                                        086 896 1087
                                    </a>
                                </p>
                                <p>
                                    <span className="font-semibold">Email:</span>{" "}
                                    <a href="mailto:cathyvard@gmail.com" className="text-[#66bb6a] hover:text-[#4db6ac] transition-colors underline">
                                        cathyvard@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Summary */}
            <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#66bb6a] mb-8">The Course</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { label: "Certification", value: "PHECC Cardiac First Responder, valid 2 years" },
                        { label: "Duration", value: "Approx. 3.5 hours" },
                        { label: "Class size", value: "Max 6 people" },
                        { label: "Location", value: "Dundrum Town Centre, Dublin" },
                        { label: "Fee", value: "€85 (€50 deposit at booking)" },
                        { label: "Prerequisites", value: "None — open to everyone" },
                    ].map(({ label, value }) => (
                        <div key={label} className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                            <p className="text-sm font-semibold text-[#66bb6a] uppercase tracking-wide mb-1">{label}</p>
                            <p className="text-gray-700">{value}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/contact"
                        className="inline-block bg-[#66bb6a] hover:bg-[#5aaa5e] text-white font-semibold px-8 py-3 rounded transition-colors text-center"
                    >
                        Book Your Place
                    </Link>
                    <Link
                        href="/#course-content"
                        className="inline-block border-2 border-[#66bb6a] text-[#66bb6a] hover:bg-[#66bb6a] hover:text-white font-semibold px-8 py-3 rounded transition-colors text-center"
                    >
                        View Course Content
                    </Link>
                </div>
            </div>
        </div>
    );
}
