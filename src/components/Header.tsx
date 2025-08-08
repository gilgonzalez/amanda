import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Header = ({ currentPage = 'inicio' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(currentPage);
  const navRef = useRef<HTMLElement>(null);
  const [underlineProps, setUnderlineProps] = useState({ width: 80, left: 0 }); // Ancho inicial
  const [isInitialized, setIsInitialized] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '/', key: 'inicio' },
    { name: 'Servicios', href: '/servicios', key: 'servicios' },
    { name: 'Sobre mí', href: '/sobre-mi', key: 'sobre-mi' },
    { name: 'Casos de éxito', href: '/casos-exito', key: 'casos-exito' },
    { name: 'Blog', href: '/blog', key: 'blog' },
  ];

  useEffect(() => {
    setActiveItem(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const updateUnderline = () => {
      if (navRef.current) {
        const activeLink = navRef.current.querySelector(`[data-page="${activeItem}"]`) as HTMLElement;
        if (activeLink) {
          const navRect = navRef.current.getBoundingClientRect();
          const linkRect = activeLink.getBoundingClientRect();
          const newProps = {
            width: Math.max(linkRect.width, 60), // Ancho mínimo de 60px
            left: linkRect.left - navRect.left
          };
          setUnderlineProps(newProps);
          setIsInitialized(true);
        }
      }
    };

    // Pequeño delay para asegurar que el DOM esté listo
    const timer = setTimeout(updateUnderline, 100);
    
    window.addEventListener('resize', updateUnderline);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateUnderline);
    };
  }, [activeItem]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">AC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-800">
                Amanda Cabello Pino
              </h1>
              <p className="text-sm text-primary-600">Abogada Especialista</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden lg:flex items-center space-x-8 relative">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                data-page={item.key}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeItem === item.key
                    ? 'text-primary-700'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Animated Underline - siempre visible */}
            <motion.div
              className="absolute bottom-0 h-0.5 bg-gradient-to-r from-primary-600 to-complementary-500 rounded-full"
              initial={{ width: 80, x: 0, opacity: 0 }}
              animate={{
                width: underlineProps.width,
                x: underlineProps.left,
                opacity: isInitialized ? 1 : 0
              }}
              transition={{
                width: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8
                },
                x: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8
                },
                opacity: {
                  duration: 0.3
                }
              }}
            />
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/contacto"
              className="bg-gradient-to-r from-complementary-500 to-complementary-600 text-white px-6 py-2.5 rounded-full font-medium hover:from-complementary-600 hover:to-complementary-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Contacta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-primary-700 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}></span>
              <span className={`block w-5 h-0.5 bg-primary-700 mt-1 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-5 h-0.5 bg-primary-700 mt-1 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden overflow-hidden"
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <div className="py-4 space-y-2 border-t border-primary-100">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === item.key
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-primary-100">
              <a
                href="/contacto"
                className="block w-full text-center bg-gradient-to-r from-complementary-500 to-complementary-600 text-white px-6 py-3 rounded-lg font-medium hover:from-complementary-600 hover:to-complementary-700 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacta
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;