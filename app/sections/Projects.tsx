// app/sections/Projects.tsx
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'HackerNews',
            description: 'A News Platform with various features like login, signup, and post creation.',
            technologies: ['React', 'Next.js', 'NeonDB', 'Node.js', 'Hono'
            ],
        }
    ]

    return (
        <Section
            id="projects"
            title="Projects"
            subtitle="Check out some of my recent work"
            className="bg-gray-50 dark:bg-gray-900"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </Section>
    )
}