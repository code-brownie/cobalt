'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navigation = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Interests', href: '#interests' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <header
            className={`fixed w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md dark:bg-black' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/">
                            <span className="text-2xl font-bold">Your Name</span>
                        </Link>
                    </div>

                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            type="button"
                            className="rounded-md p-2 inline-flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    <nav className="hidden md:flex space-x-10">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-base font-medium hover:text-gray-500 dark:hover:text-gray-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-900 divide-y-2 divide-gray-50 dark:divide-gray-700">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <Link href="/">
                                    <span className="text-2xl font-bold">Your Name</span>
                                </Link>
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        className="rounded-md p-2 inline-flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="text-base font-medium hover:text-gray-700 dark:hover:text-gray-300"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}