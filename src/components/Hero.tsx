import { personal, stats, socialLinks } from '../data/mockData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 animate-fadeInUp text-center lg:text-left">
            <p className="text-purple-600 dark:text-purple-400 text-lg mb-2">
              {personal.role}
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Maximize Your Business
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Potential</span> with Custom Web
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Development <span className="gradient-text">Solutions!</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Take your business to the next level with custom web development solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                Let's Start →
              </button>
              <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors duration-200">
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
                  aria-label={social.name}
                >
                  <span className="text-2xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              {/* Statistics Badges */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 animate-float">
                <p className="text-3xl font-bold gradient-text">{stats.projectsCompleted}+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <p className="text-3xl font-bold gradient-text">{stats.yearsExperience}+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Experience</p>
              </div>

              {/* Profile Image Circle */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-blue-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800 flex items-center justify-center">
                  <img
                    src="/profile.jpg"
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
