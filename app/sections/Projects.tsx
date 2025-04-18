// app/sections/Projects.tsx
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'E-commerce Platform',
            description: 'A fully functional e-commerce site with cart, checkout, and payment integration.',
            imageUrl: '/images/project1.jpg',
            technologies: ['React', 'Next.js', 'Stripe', 'MongoDB'],
            demoUrl: 'https://example.com/demo1',
            codeUrl: 'https://github.com/yourusername/project1'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates.',
            imageUrl: '/images/project2.jpg',
            technologies: ['React', 'Firebase', 'Tailwind CSS'],
            demoUrl: 'https://example.com/demo2',
            codeUrl: 'https://github.com/yourusername/project2'
        },
        {
            id: 3,
            title: 'Personal Blog',
            description: 'A blog platform with markdown support and comment system.',
            imageUrl: '/images/project3.jpg',
            technologies: ['Next.js', 'GraphQL', 'PostgreSQL'],
            demoUrl: 'https://example.com/demo3',
            codeUrl: 'https://github.com/yourusername/project3'
        },
        {
            id: 4,
            title: 'Weather App',
            description: 'A weather application that displays forecast data for any location.',
            imageUrl: '/images/project4.jpg',
            technologies: ['JavaScript', 'OpenWeather API', 'CSS'],
            demoUrl: 'https://example.com/demo4',
            codeUrl: 'https://github.com/yourusername/project4'
        },
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
                        imageUrl={project.imageUrl}
                        technologies={project.technologies}
                        demoUrl={project.demoUrl}
                        codeUrl={project.codeUrl}
                    />
                ))}
            </div>
        </Section>
    )
}