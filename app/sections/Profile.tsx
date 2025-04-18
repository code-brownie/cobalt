import Image from 'next/image'

export default function Profile() {
  return (
    <section id="profile" className="min-h-screen flex items-center bg-white dark:bg-black relative">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I&apos;m <span className="inline-block relative">
                Your Name
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Full Stack Developer & Designer
            </p>
            <p className="text-lg mb-8">
              I build exceptional digital experiences with clean, efficient code and thoughtful design.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-black dark:border-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-black dark:border-white">
              
              <Image 
                src="/images/profile-placeholder.jpg" 
                alt="Your Name"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}