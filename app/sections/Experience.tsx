import Section from '../components/Section'

export default function Experience() {
    const experiences = [
        {
            id: 1,
            role: 'Senior Frontend Developer',
            company: 'Tech Company X',
            duration: 'Jan 2023 - Present',
            description: 'Led the development of responsive web applications using React and Next.js. Implemented state management with Redux and optimized performance. Collaborated with designers to create intuitive user interfaces.',
            technologies: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS']
        },
        {
            id: 2,
            role: 'Full Stack Developer',
            company: 'Agency Y',
            duration: 'Mar 2021 - Dec 2022',
            description: 'Developed and maintained multiple client websites and applications. Created RESTful APIs using Node.js and Express. Worked in an agile environment with daily stand-ups and sprint planning.',
            technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'React']
        },
        {
            id: 3,
            role: 'Junior Web Developer',
            company: 'Startup Z',
            duration: 'Jun 2019 - Feb 2021',
            description: 'Assisted in the development of web applications. Implemented UI components and integrated APIs. Participated in code reviews and improved coding practices.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP']
        }
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