import Link from "next/link";

export default function SecondaryNav() {
    return (
        <nav className="bg-white border-b border-gray-200 sticky top-[60px] z-40 hidden md:block">
            <div className="max-w-7xl mx-auto px-5">
                <ul className="flex justify-center gap-12 py-4">
                    <li>
                        <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-[--primary] transition-colors">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#course-content" className="text-sm font-medium text-gray-700 hover:text-[--primary] transition-colors">
                            Course Content
                        </Link>
                    </li>
                    <li>
                        <Link href="#details" className="text-sm font-medium text-gray-700 hover:text-[--primary] transition-colors">
                            Details
                        </Link>
                    </li>
                    <li>
                        <Link href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-[--primary] transition-colors">
                            Testimonials
                        </Link>
                    </li>
                    <li>
                        <Link href="#location" className="text-sm font-medium text-gray-700 hover:text-[--primary] transition-colors">
                            Location
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
