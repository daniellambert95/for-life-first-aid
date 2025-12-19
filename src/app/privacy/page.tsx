import Link from "next/link";

export const metadata = {
    title: "Privacy Policy | For Life First Aid",
    description: "Privacy policy for For Life First Aid",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-16 sm:px-8 sm:py-20">
                <Link
                    href="/"
                    className="inline-flex items-center text-[#66bb6a] hover:text-[#5aaa5e] mb-8 transition-colors"
                >
                    ← Back to Home
                </Link>

                <h1 className="text-4xl sm:text-5xl font-bold text-[#66bb6a] mb-8">
                    Privacy Policy
                </h1>

                <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            1. Data Controller
                        </h2>
                        <p>
                            For Life First Aid is the data controller responsible for your personal data.
                            If you have any questions about this privacy policy or how we handle your data,
                            please contact us at:
                        </p>
                        <ul className="list-none space-y-2 ml-0">
                            <li>Email: cathyvard@gmail.com</li>
                            <li>Phone: 086 896 1087</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            2. What Data We Collect
                        </h2>
                        <p>When you submit our contact form, we collect:</p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Your name</li>
                            <li>Your email address</li>
                            <li>Your phone number (optional)</li>
                            <li>Your message or inquiry</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            3. Why We Collect This Data
                        </h2>
                        <p>
                            We collect this information solely to respond to your inquiries and provide
                            information about our first aid training courses. The legal basis for processing
                            your data is your consent, which you provide when submitting the contact form.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            4. How We Use Your Data
                        </h2>
                        <p>Your personal data is used to:</p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Respond to your inquiries</li>
                            <li>Provide information about our courses</li>
                            <li>Process course bookings if requested</li>
                        </ul>
                        <p className="mt-4">
                            We do not use your data for marketing purposes unless you have explicitly
                            requested to receive course updates.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            5. Data Sharing
                        </h2>
                        <p>
                            We do not share, sell, or rent your personal data to third parties. Your
                            information is only accessible to For Life First Aid staff who need it to
                            respond to your inquiry.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            6. Data Retention
                        </h2>
                        <p>
                            We retain your personal data for as long as necessary to respond to your
                            inquiry and fulfill any subsequent course bookings. You may request deletion
                            of your data at any time by contacting us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            7. Your Rights
                        </h2>
                        <p>Under GDPR and Irish data protection law, you have the right to:</p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Access your personal data</li>
                            <li>Rectify inaccurate personal data</li>
                            <li>Request erasure of your personal data</li>
                            <li>Restrict processing of your personal data</li>
                            <li>Object to processing of your personal data</li>
                            <li>Data portability</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                        <p className="mt-4">
                            To exercise any of these rights, please contact us using the details above.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            8. Cookies
                        </h2>
                        <p>
                            This website does not use cookies or tracking technologies. We do not collect
                            any analytics or browsing data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            9. Changes to This Policy
                        </h2>
                        <p>
                            We may update this privacy policy from time to time. Any changes will be
                            posted on this page with an updated revision date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            10. Contact & Complaints
                        </h2>
                        <p>
                            If you have concerns about how we handle your personal data, please contact
                            us first. You also have the right to lodge a complaint with the Data Protection
                            Commission (DPC) in Ireland.
                        </p>
                    </section>

                    <p className="text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200">
                        Last updated: December 2025
                    </p>
                </div>
            </div>
        </div>
    );
}
