import Section from '../components/Section'

export default function Education() {
    const education = [
        {
            id: 1,
            degree: 'Bachelor of Engineering in Computer Science',
            institution: 'Siddaganga Institute of Technology',
            location: 'Tumkur, India',
            duration: '2021 - 2025',
            courses: ['Data Structures', 'Database Systems', 'Web Development', 'Software Engineering']
        },
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