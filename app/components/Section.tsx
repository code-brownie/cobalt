import React from 'react'

interface SectionProps {
    id: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({
    id,
    title,
    subtitle,
    children,
    className = ''
}: SectionProps) {
    return (
        <section id={id} className={`py-16 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
                    {subtitle && (
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </div>
                {children}
            </div>
        </section>
    )
}