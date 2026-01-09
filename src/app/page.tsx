import Navbar from "@/components/Navbar";
import SecondaryNav from "@/components/SecondaryNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CourseContent from "@/components/CourseContent";
import Testimonials from "@/components/Testimonials";
import Philosophy from "@/components/Philosophy";
import InstructorBio from "@/components/InstructorBio";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.cardiacfirstrespondercourse.ie/#organization",
        "name": "For Life First Aid",
        "url": "https://www.cardiacfirstrespondercourse.ie",
        "logo": "https://www.cardiacfirstrespondercourse.ie/assets/4_life_logo.webp",
        "description": "PHECC Certified Cardiac First Responder training provider in Dublin, Ireland",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Unit CSA 2.5, Building 9, Sandyford Rd, Dundrum Town Centre",
          "addressLocality": "Dundrum",
          "addressRegion": "Dublin",
          "postalCode": "D16 H7E2",
          "addressCountry": "IE"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+353-86-896-1087",
          "email": "cathyvard@gmail.com",
          "contactType": "Customer Service",
          "areaServed": "IE",
          "availableLanguage": "English"
        },
        "sameAs": []
      },
      {
        "@type": "Course",
        "@id": "https://www.cardiacfirstrespondercourse.ie/#course",
        "name": "Cardiac First Responder Course",
        "description": "PHECC Certified Cardiac First Responder Course covering CPR, AED use, choking management, and emergency response skills",
        "provider": {
          "@id": "https://www.cardiacfirstrespondercourse.ie/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "85",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01"
        },
        "courseCode": "CFR",
        "educationalCredentialAwarded": "PHECC Cardiac First Responder Certification",
        "timeRequired": "P1D",
        "coursePrerequisites": "None",
        "courseWorkload": "PT4H",
        "inLanguage": "en-IE",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "location": {
            "@type": "Place",
            "name": "Dundrum Town Centre",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Unit CSA 2.5, Building 9, Sandyford Rd",
              "addressLocality": "Dundrum",
              "addressRegion": "Dublin",
              "postalCode": "D16 H7E2",
              "addressCountry": "IE"
            }
          }
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.cardiacfirstrespondercourse.ie/#website",
        "url": "https://www.cardiacfirstrespondercourse.ie",
        "name": "For Life First Aid",
        "description": "PHECC Certified Cardiac First Responder training in Dublin",
        "publisher": {
          "@id": "https://www.cardiacfirstrespondercourse.ie/#organization"
        },
        "inLanguage": "en-IE"
      },
      {
        "@type": "Person",
        "@id": "https://www.cardiacfirstrespondercourse.ie/#instructor",
        "name": "Cathy Vard",
        "jobTitle": "First Aid Instructor",
        "telephone": "+353-86-896-1087",
        "email": "cathyvard@gmail.com",
        "worksFor": {
          "@id": "https://www.cardiacfirstrespondercourse.ie/#organization"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.cardiacfirstrespondercourse.ie/#service",
        "serviceType": "First Aid Training",
        "provider": {
          "@id": "https://www.cardiacfirstrespondercourse.ie/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Ireland"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "First Aid Training Courses",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cardiac First Responder Course",
                "description": "PHECC Certified CFR training"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Navbar />
        <SecondaryNav />
        <Hero />
        <About />
        <CourseContent />
        <Testimonials />
        <Philosophy />
        {/* <InstructorBio /> */}
        <Location />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
