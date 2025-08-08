import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WhyChooseItem {
  id: number;
  title: string;
  shortName: string;
  description: string;
  icon: string;
  details: string[];
  color: string;
  bgColor: string;
}

const WhyChooseSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const items: WhyChooseItem[] = [
    {
      id: 1,
      title: "8+ Años de Experiencia",
      shortName: "Experiencia",
      description: "Sólida trayectoria en derecho procesal",
      icon: "⚖️",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-100",
      details: [
        "Especialización en derecho procesal civil y laboral",
        "Experiencia en tribunales de diferentes instancias",
        "Conocimiento profundo de procedimientos judiciales",
        "Historial comprobado de casos exitosos"
      ]
    },
    {
      id: 2,
      title: "Red Profesional Sólida",
      shortName: "Contactos",
      description: "Contactos estratégicos en el sector legal",
      icon: "🤝",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-100",
      details: [
        "Colaboración con despachos de prestigio como BGI-LAW",
        "Experiencia en equipos multidisciplinarios",
        "Red de contactos en diferentes áreas del derecho",
        "Acceso a recursos especializados del sector"
      ]
    },
    {
      id: 3,
      title: "95% Tasa de Éxito",
      shortName: "Éxito",
      description: "Resultados excepcionales para nuestros clientes",
      icon: "📈",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-100",
      details: [
        "Alta tasa de resolución favorable de casos",
        "Estrategias personalizadas para cada cliente",
        "Enfoque meticuloso en la preparación de casos",
        "Seguimiento exhaustivo de todos los procedimientos"
      ]
    },
    {
      id: 4,
      title: "Liderazgo Comprobado",
      shortName: "Liderazgo",
      description: "Experiencia dirigiendo equipos legales",
      icon: "👑",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-100",
      details: [
        "Team Leader en in99 con gestión de equipos",
        "Coordinación de casos complejos",
        "Mentorización de profesionales junior",
        "Optimización de procesos y procedimientos"
      ]
    }
  ];

  // Función para manejar el click en los items
  const handleItemClick = (itemId: number) => {
    if (activeItem === itemId) {
      setActiveItem(null);
    } else if (activeItem !== null) {
      setIsClosing(true);
      setActiveItem(null);
      
      setTimeout(() => {
        setIsClosing(false);
        setActiveItem(itemId);
      }, 600);
    } else {
      setActiveItem(itemId);
    }
  };

  // Variantes de animación en dos fases
  const panelVariants = {
    hidden: {
      scaleX: 0,
      scaleY: 0,
      height: "4px",
    },
    visible: {
      scaleX: [0, 1, 1],
      scaleY: [0, 0, 1],
      height: ["4px", "4px", "100%"],
      transition: {
        duration: 0.8,
        times: [0, 0.5, 1],
        ease: "easeInOut"
      }
    },
    exit: {
      scaleY: [1, 0, 0],
      scaleX: [1, 1, 0],
      height: ["100%", "4px", "4px"],
      transition: {
        duration: 0.6,
        times: [0, 0.5, 1],
        ease: "easeInOut"
      }
    }
  };

  // Variantes para el contenido
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <section id="why-choose" className="min-h-screen lg:h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 relative overflow-hidden flex items-center justify-center py-12 lg:py-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-complementary-200 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-8 lg:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            ¿Por qué elegir a 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-complementary-600"> Amanda</span>?
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Experiencia, profesionalidad y resultados que marcan la diferencia
          </p>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex items-center justify-center">
          <div className="relative flex">
            {/* Contenedor de imagen */}
            <div className="w-[325px] h-[400px] sm:w-[500px] sm:h-[400px] lg:w-[700px] lg:h-[500px] rounded-3xl flex items-center justify-center relative overflow-visible shadow-2xl z-10">
              {/* Tags del lado izquierdo */}
              <div className="flex flex-col gap-3 lg:gap-4 absolute left-0 z-0 -translate-x-2/3 sm:-translate-x-3/4 h-full">
                <div className='flex flex-1 flex-col justify-between py-6 lg:py-8'>
                  {items.slice(0, 2).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`pr-3 sm:pr-4 py-3 sm:py-4 rounded-l-xl shadow-lg text-sm sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${item.bgColor} flex flex-col items-center justify-center space-y-1 min-w-[50px] sm:min-w-[60px] hover:scale-105`}
                    >
                      <span className="text-base sm:text-lg">{item.icon}</span>
                      <span className="whitespace-nowrap text-center leading-tight text-xs sm:text-sm" style={{ writingMode: 'vertical-lr' }}>{item.shortName}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags del lado derecho */}
              <div className="flex flex-col gap-3 lg:gap-4 absolute right-0 h-full z-5 translate-x-2/3 sm:translate-x-3/4">
                <div className='flex flex-1 flex-col justify-between py-6 lg:py-8'>
                  {items.slice(2, 4).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`pl-3 sm:pl-4 py-3 sm:py-4 rounded-r-xl shadow-lg text-sm sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${item.bgColor} flex flex-col items-center justify-center space-y-1 min-w-[50px] sm:min-w-[60px] hover:scale-105`}
                    >
                      <span className="text-base sm:text-lg">{item.icon}</span>
                      <span className="whitespace-nowrap text-center leading-tight text-xs sm:text-sm" style={{ writingMode: 'vertical-lr' }}>{item.shortName}</span>
                    </button>
                  ))}
                </div>
              </div>

              <img 
                src="/img3.webp" 
                alt="Servicios Legales Profesionales" 
                className="w-full h-full object-cover rounded-xl z-20"
              />
              
              {/* Panel superpuesto - Estilo informe profesional */}
              <AnimatePresence mode="wait">
                {activeItem && !isClosing && (
                  <motion.div
                    key={activeItem}
                    className="absolute inset-0 bg-white/98 backdrop-blur-sm border border-slate-300 shadow-2xl rounded-xl z-50 flex items-center justify-center"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    exit={{ scaleX: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{
                      originX: items.find(item => item.id === activeItem)?.id <= 2 ? 0 : 1,
                      originY: 0.5
                    }}
                  >
                    {/* Contenido estilo informe profesional */}
                    <motion.div 
                      className="w-full max-w-lg px-6 sm:px-8 lg:px-12 py-6 lg:py-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
                    >
                      {/* Header del informe */}
                      <div className="text-center mb-6 lg:mb-8 border-b border-slate-200 pb-4 lg:pb-6">
                        <div className="flex items-center justify-center mb-3">
                          <span className="text-2xl lg:text-3xl mr-3">{items.find((item) => item.id === activeItem)?.icon}</span>
                          <h2 className="text-lg lg:text-2xl font-bold text-slate-800 uppercase tracking-wide">
                            {items.find((item) => item.id === activeItem)?.shortName}
                          </h2>
                        </div>
                        <h3 className="text-sm lg:text-lg font-semibold text-slate-600">
                          {items.find((item) => item.id === activeItem)?.title}
                        </h3>
                      </div>
                      
                      {/* Descripción */}
                      <div className="text-center mb-6 lg:mb-8">
                        <p className="text-slate-700 font-medium leading-relaxed text-sm lg:text-base">
                          {items.find((item) => item.id === activeItem)?.description}
                        </p>
                      </div>
                      
                      {/* Lista mejorada */}
                      <div className="space-y-2 lg:space-y-3">
                        {items.find((item) => item.id === activeItem)?.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start justify-start text-left px-2 lg:px-4">
                            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-slate-600 rounded-full mt-2 mr-3 lg:mr-4 flex-shrink-0"></div>
                            <p className="text-slate-700 text-sm lg:text-base leading-relaxed font-medium">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Instruction */}
        <motion.div
          className="text-center mt-8 lg:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-base lg:text-lg px-4">
            Haz clic en las pestañas para explorar cada ventaja
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;