

const AboutPage = () => {
    return ( 
        <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
            {/* Intro */}
            <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
                <img src="/images/profile.jpg" alt="profile" className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md" />
                <div>
                     <h1 className="text-3xl font-bold text-white mb-2">
                        Hey, I'm Brat! 👋
                    </h1>
                    <p className="text-gray-300 text-lg">
                        I'm a passionate web developer and content creator who loves building fridendly digital experiences and helping others grow into confident, modern developer.
                    </p>
                </div>
            </div>

            {/* Tech Stach */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                🚀 Tech I use
            </h2>
            <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                {[
                    'React',
                    'Next.js',
                    'Vue',
                    'Tailwind CSS',
                    'Node.js',
                    'Laravel',
                    'Prisma',
                    'MongoDB',
                    'PostgreSQL',
                    'Appwrite',
                    'Docker',
                ].map((tech) => (
                    <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">{tech}</li>
                ))}
            </ul>

        </div>
     );
}
 
export default AboutPage;