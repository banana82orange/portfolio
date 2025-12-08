import { skills } from '../data/mockData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-purple-600 dark:text-purple-400 text-lg mb-2">⚡ My Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I am currently the professional when working web development, a Member of Scone and I always -
            them that I am open to Salone in your next most technical expertise, along with expertise in
            React, Angular, and Vue I have extensive and well React and beyond, Use in teaching and in
            collaboration with editors.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group p-6 rounded-2xl bg-white dark:bg-gray-700 hover:bg-purple-50 dark:hover:bg-gray-600 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center animate-fadeInUp"
              style={{ animationDelay: `${skill.id * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {skill.name}
              </h3>

              {/* Proficiency */}
              <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                {skill.proficiency}
              </p>

              {/* Description */}
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
