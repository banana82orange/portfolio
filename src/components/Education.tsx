import { education } from '../data/mockData';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-purple-600 dark:text-purple-400 text-lg mb-2">🎓 Education</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            My Academic Journey
          </h2>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 animate-fadeInUp border-l-4 border-purple-600 dark:border-purple-400"
              style={{ animationDelay: `${edu.id * 0.1}s` }}
            >
              {/* Badge */}
              <div className="inline-block px-4 py-1 bg-purple-600 dark:bg-purple-500 text-white text-sm rounded-full mb-4">
                {edu.badge}
              </div>

              {/* Date */}
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{edu.date}</p>

              {/* Institution */}
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {edu.institution}
              </h3>

              {/* Degree */}
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {edu.degree}
              </p>

              {/* Type */}
              <p className="text-purple-600 dark:text-purple-400 font-semibold">
                {edu.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
