interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
}

export default function ProjectCard({
    title,
    description,
    technologies,

}: ProjectCardProps) {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div className="relative aspect-video">
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

            </div>
        </div>
    )
}