import { personal, socialLinks } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = ['Home', 'About', 'Skills', 'Portfolio', 'Service', 'Contact'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-gray-300 py-12 px-4 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-white">Jirawat</span>
              <span className="gradient-text pl-2">Kritmasup</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Full Stack Web Developer.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span className="text-gray-400">{personal.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span className="text-gray-400">{personal.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span className="text-gray-400">{personal.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
