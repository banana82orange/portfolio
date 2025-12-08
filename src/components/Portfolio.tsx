import { projects } from '../data/mockData';


const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-purple-600 dark:text-purple-400 text-lg mb-2">💼 My Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Recent Projects
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${project.id * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-600 dark:to-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                >
                  Click to Visit →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
