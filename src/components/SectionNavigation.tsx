import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  label: string;
}

const SectionNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const sections: Section[] = [
    { id: 'hero', label: 'Inicio' },
    { id: 'service', label: 'Servicios' },
    { id: 'why-choose', label: '¿Por qué elegir?' }
  ];

  // Detectar la sección activa basada en el scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar una vez al montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navegar a una sección específica
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="fixed left-6 top-24 z-50 lg:top-1/2 lg:transform lg:-translate-y-1/2">
      <div className="flex flex-col space-y-3 lg:space-y-4">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Círculo principal */}
            <div
              className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-primary-600 border-primary-600 shadow-lg'
                  : 'bg-transparent border-slate-400 hover:border-primary-400'
              }`}
            />
            
            {/* Tooltip con el nombre de la sección - solo en desktop */}
            <div className="absolute left-8 px-3 py-1 bg-slate-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none hidden lg:block">
              {section.label}
              {/* Flecha del tooltip */}
              <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-slate-800"></div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default SectionNavigation;