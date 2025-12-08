import { services } from '../data/mockData';

const Services = () => {
  return (
    <section id="service" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-purple-600 dark:text-purple-400 text-lg mb-2">🎯 My Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            What I Offer
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 shadow-md hover:shadow-2xl hover:shadow-purple-500/50 dark:hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${service.id * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:gap-2 transition-all duration-200"
              >
                Learn More
                <span className="ml-2 group-hover:ml-4 transition-all duration-200">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
