import Section from '../components/Section'

export default function About() {
    return (
        <Section
            id="about"
            title="About Me"
            subtitle="Get to know me better"
            className="bg-gray-50 dark:bg-gray-900"
        >
            <div className="max-w-3xl mx-auto">
                <p className="text-lg mb-6">
                    Hello! I&apos;m Aman Kumar, a passionate developer with expertise in building modern web applications.
                    I enjoy solving complex problems and creating intuitive, dynamic user experiences.
                </p>

                <p className="text-lg mb-6">
                    With over X years of experience in web development, I&apos;ve worked on a variety of projects ranging
                    from small business websites to complex enterprise applications. My approach combines technical
                    excellence with creative problem-solving.
                </p>

                <p className="text-lg mb-6">
                    When I&apos;m not coding, you can find me hiking in nature, reading about new technologies, or
                    experimenting with photography. I believe in continuous learning and always strive to improve my
                    skills and stay updated with the latest industry trends.
                </p>

                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-4 bg-white dark:bg-black rounded-lg shadow-sm">
                        <div className="text-3xl font-bold">X+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white dark:bg-black rounded-lg shadow-sm">
                        <div className="text-3xl font-bold">Y+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white dark:bg-black rounded-lg shadow-sm">
                        <div className="text-3xl font-bold">Z+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white dark:bg-black rounded-lg shadow-sm">
                        <div className="text-3xl font-bold">∞</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Cup of Coffee</div>
                    </div>
                </div>
            </div>
        </Section>
    )
}