'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [consentChecked, setConsentChecked] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
                setConsentChecked(false);
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="bg-white">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col lg:flex-row items-stretch lg:min-h-[700px]">
                    {/* Form Content - appears first on mobile/tablet, first on desktop */}
                    <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24 order-1">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 text-[#66bb6a]">
                            Contact Us
                        </h2>

                        <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                            Have questions or want to book a course? Send us a message!
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <input
                                type="hidden"
                                name="access_key"
                                value="YOUR_WEB3FORMS_ACCESS_KEY"
                            />

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66bb6a] focus:border-transparent outline-none transition-all"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66bb6a] focus:border-transparent outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone (optional)
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66bb6a] focus:border-transparent outline-none transition-all"
                                    placeholder="086 896 1087"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66bb6a] focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Tell us about your inquiry..."
                                />
                            </div>

                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="consent"
                                    required
                                    checked={consentChecked}
                                    onChange={(e) => setConsentChecked(e.target.checked)}
                                    className="mt-1 h-4 w-4 text-[#66bb6a] border-gray-300 rounded focus:ring-[#66bb6a]"
                                />
                                <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                                    I agree to the processing of my personal data as described in the{' '}
                                    <Link href="/privacy" className="text-[#66bb6a] hover:text-[#5aaa5e] underline">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting' || !consentChecked}
                                className="w-full bg-[#66bb6a] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#5aaa5e] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-600 text-center font-medium">
                                    Message sent successfully! We'll get back to you soon.
                                </p>
                            )}

                            {status === 'error' && (
                                <p className="text-red-600 text-center font-medium">
                                    Something went wrong. Please try again or email us directly.
                                </p>
                            )}
                        </form>

                        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                            <p className="text-sm sm:text-base text-gray-600">
                                Or reach us directly:
                            </p>
                            <p className="text-sm sm:text-base text-gray-600 mt-2">
                                <a href="tel:0868961087" className="hover:text-[#66bb6a] transition-colors">
                                    086 896 1087
                                </a>
                                {' · '}
                                <a href="mailto:cathyvard@gmail.com" className="hover:text-[#66bb6a] transition-colors">
                                    cathyvard@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Image - appears second on mobile/tablet, second on desktop */}
                    <div className="w-full lg:w-1/2 order-2 relative min-h-[400px] lg:min-h-[700px]">
                        <Image
                            src="/assets/image_5.webp"
                            alt="Hands holding heart with heartbeat"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
