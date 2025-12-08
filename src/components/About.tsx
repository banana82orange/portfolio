import { personal, stats } from '../data/mockData';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left - Image */}
          <div className="flex-1 animate-fadeInUp">
            <div className="relative w-full max-w-md mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about.jpg"
                  alt={personal.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1 animate-fadeInUp">
            <div className="mb-6">
              <p className="text-purple-600 dark:text-purple-400 text-lg mb-2">
                👤 {personal.name}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {personal.title}
              </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {personal.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 rounded-xl bg-purple-50 dark:bg-gray-800">
                <p className="text-3xl font-bold gradient-text mb-1">
                  {stats.projectsCompleted}+
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Projects Completed
                </p>
              </div>
              <div className="p-4 rounded-xl bg-purple-50 dark:bg-gray-800">
                <p className="text-3xl font-bold gradient-text mb-1">
                  {stats.yearsExperience}+
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Years Experience
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-xl">📧</span>
                <span>{personal.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-xl">📱</span>
                <span>{personal.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-xl">📍</span>
                <span>{personal.location}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-8 px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
