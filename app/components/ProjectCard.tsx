import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    demoUrl?: string;
    codeUrl?: string;
}

export default function ProjectCard({
    title,
    description,
    imageUrl,
    technologies,
    demoUrl,
    codeUrl
}: ProjectCardProps) {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div className="relative aspect-video">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-xs rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-4">
                    {demoUrl && (
                        <Link
                            href={demoUrl}
                            className="flex items-center text-sm font-medium hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View Demo
                        </Link>
                    )}
                    {codeUrl && (
                        <Link
                            href={codeUrl}
                            className="flex items-center text-sm font-medium hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            View Code
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}