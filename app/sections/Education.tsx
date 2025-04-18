import Section from '../components/Section'

export default function Education() {
    const education = [
        {
            id: 1,
            degree: 'Master of Science in Computer Science',
            institution: 'University Name',
            location: 'City, Country',
            duration: '2020 - 2022',
            description: 'Specialized in Web Technologies and Artificial Intelligence. Completed thesis on "Modern Web Application Architecture".',
            courses: ['Advanced Algorithms', 'Machine Learning', 'Web Systems Architecture', 'Cloud Computing']
        },
        {
            id: 2,
            degree: 'Bachelor of Science in Computer Science',
            institution: 'University Name',
            location: 'City, Country',
            duration: '2016 - 2020',
            description: 'Graduated with honors. Participated in various coding competitions and hackathons.',
            courses: ['Data Structures', 'Database Systems', 'Web Development', 'Software Engineering']
        },
        {
            id: 3,
            degree: 'Web Development Bootcamp',
            institution: 'Coding Academy',
            location: 'Online',
            duration: '2015',
            description: 'Intensive 12-week program focused on modern web development technologies and practices.',
            courses: ['HTML/CSS', 'JavaScript', 'React', 'Node.js']
        }
    ]

    return (
        <Section
            id="education"
            title="Education"
            subtitle="My academic background"
            className="bg-gray-50 dark:bg-gray-900"
        >
            <div className="max-w-4xl mx-auto">
                <div className="space-y-12">
                    {education.map((edu) => (
                        <div
                            key={edu.id}
                            className="bg-white dark:bg-black rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                                    <div className="text-gray-700 dark:text-gray-300">{edu.institution}, {edu.location}</div>
                                </div>
                                <div className="text-sm bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full mt-2 md:mt-0">
                                    {edu.duration}
                                </div>
                            </div>
                            <p className="mb-4">{edu.description}</p>
                            <div>
                                <h4 className="font-medium mb-2">Key Courses:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {edu.courses.map((course, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-sm rounded-full"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}