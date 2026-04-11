import type { Metadata } from "next";
import ContactForm from "@/components/Contact";
import Navbar from "@/components/Navbar";
import SecondaryNav from "@/components/SecondaryNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Contact Us | For Life First Aid — Book a CPR Course in Dublin",
    description: "Get in touch with For Life First Aid to book a PHECC certified Cardiac First Responder course in Dundrum, Dublin. Call, email, or send us a message.",
    keywords: ["contact For Life First Aid", "book CPR course Dublin", "first aid course enquiry", "cardiac first responder booking Dublin"],
    alternates: {
        canonical: "https://www.cardiacfirstrespondercourse.ie/contact",
    },
    openGraph: {
        title: "Contact Us | For Life First Aid — Book a CPR Course in Dublin",
        description: "Get in touch to book a PHECC certified Cardiac First Responder course in Dundrum, Dublin. Call, email, or send us a message.",
        type: "website",
        locale: "en_IE",
        siteName: "For Life First Aid",
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": "https://www.cardiacfirstrespondercourse.ie/contact",
    "name": "Contact For Life First Aid",
    "description": "Contact For Life First Aid to book a PHECC certified Cardiac First Responder course in Dundrum, Dublin.",
    "mainEntity": {
        "@type": "EducationalOrganization",
        "name": "For Life First Aid",
        "url": "https://www.cardiacfirstrespondercourse.ie",
        "telephone": "+353-86-896-1087",
        "email": "cathyvard@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Unit CSA 2.5, Building 9, Sandyford Rd, Dundrum Town Centre",
            "addressLocality": "Dundrum",
            "addressRegion": "Dublin",
            "postalCode": "D16 H7E2",
            "addressCountry": "IE"
        }
    }
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <SecondaryNav />
            <div className="min-h-screen bg-white">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
                <ContactForm />
            </div>
            <Footer />
        </>
    );
}
