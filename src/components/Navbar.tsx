import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-white font-bold text-xl">
                            Health
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="nav-link">
                                Home
                            </Link>
                            <Link href="/about" className="nav-link">
                                About
                            </Link>
                            <Link href="/calculators" className="nav-link">
                                Calculators
                            </Link>
                            <Link href="/contact" className="nav-link">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/" className="nav-link">
                        Home
                    </Link>
                    <Link href="/about" className="nav-link">
                        About
                    </Link>
                    <Link href="/blog" className="nav-link">
                        Blog
                    </Link>
                    <Link href="/contact" className="nav-link">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
