import Section from '../components/Section'

export default function Experience() {
    const experiences = [
        {
            id: 1,
            role: 'Full Stack Developer',
            company: 'StackLane',
            duration: 'March 2023 - Present',
            description: 'Learned Various Technologies and worked on various projects.',
            technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
        },

    ]

    return (
        <Section
            id="experience"
            title="Work Experience"
            subtitle="My professional journey"
        >
            <div className="max-w-4xl mx-auto">
                <div className="space-y-12">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 relative">
                            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-black dark:bg-white"></div>
                            <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">{exp.duration}</div>
                            <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                            <div className="text-gray-700 dark:text-gray-300 mb-3">{exp.company}</div>
                            <p className="mb-4">{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-sm rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}