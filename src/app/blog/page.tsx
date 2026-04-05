import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "First Aid Blog | For Life First Aid",
    description: "Practical first aid guides and advice from For Life First Aid. Learn CPR, how to use an AED, and what to do in a cardiac emergency.",
    alternates: {
        canonical: "https://www.cardiacfirstrespondercourse.ie/blog",
    },
    openGraph: {
        title: "First Aid Blog | For Life First Aid",
        description: "Practical first aid guides and advice from For Life First Aid.",
        type: "website",
        locale: "en_IE",
        siteName: "For Life First Aid",
    },
};

const posts = [
    {
        href: "/blog/how-to-perform-cpr",
        title: "How to Perform CPR Step by Step (Adults, Children & Infants)",
        description:
            "A complete step-by-step guide to performing CPR on adults, children, and infants — including hand position, compression depth, rescue breaths, and when to use an AED.",
    },
    {
        href: "/blog/what-to-do-if-someone-collapses",
        title: "What To Do If Someone Collapses (Step-by-Step Guide for Bystanders)",
        description:
            "If someone suddenly collapses in front of you, knowing what to do in those first few minutes can save a life. Learn exactly how to respond — even with no medical training.",
    },
];

export default function BlogIndex() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20">

                <Link
                    href="/"
                    className="inline-flex items-center text-[#66bb6a] hover:text-[#5aaa5e] mb-8 transition-colors"
                >
                    Back to Home
                </Link>

                <h1 className="text-4xl sm:text-5xl font-bold text-[#66bb6a] mb-4 leading-tight">
                    First Aid Blog
                </h1>
                <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                    Practical guides to help you recognise and respond to cardiac emergencies — written by the team at For Life First Aid.
                </p>

                <div className="space-y-6">
                    {posts.map((post) => (
                        <Link
                            key={post.href}
                            href={post.href}
                            className="block border border-gray-200 rounded-lg p-6 hover:border-[#66bb6a] hover:shadow-sm transition-all"
                        >
                            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#66bb6a]">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">{post.description}</p>
                            <span className="inline-block mt-4 text-sm font-medium text-[#66bb6a]">
                                Read article
                            </span>
                        </Link>
                    ))}
                </div>

                <hr className="border-gray-200 mt-12 mb-8" />

                <Link
                    href="/"
                    className="inline-flex items-center text-[#66bb6a] hover:text-[#5aaa5e] transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
