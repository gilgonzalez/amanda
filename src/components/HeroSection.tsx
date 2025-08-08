import { motion, type Variants } from 'framer-motion';
import { Star } from 'lucide-react';

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const statsVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8
      }
    }
  };

  return (
    <section id="hero" className="relative flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" style={{ minHeight: 'calc(100vh - 80px)' }}>
      {/* Background overlay with diagonal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/20 to-black/35"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-16">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Content Column */}
          <div className="text-white space-y-6 lg:space-y-8">
            {/* Professional Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-primary-800/50 rounded-full border border-complementary-400/30 backdrop-blur-sm"
              variants={itemVariants}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{
                  scale: [0.8, 1.3, 0.9, 1.1, 1]
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.6
                }}
              >
                <Star className="w-4 h-4 mr-3 text-complementary-500 fill-complementary-500" />
              </motion.div>
              Más de 10 años de experiencia
            </motion.div>
            
            {/* Main Headline */}
            <motion.div className="space-y-3" variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Protección legal
                </motion.span>
                <motion.span 
                  className="block text-complementary-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  profesional
                </motion.span>
                <motion.span 
                  className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal mt-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  cuando más la necesitas
                </motion.span>
              </h1>
            </motion.div>
            
            {/* Subheadline */}
            <motion.p 
              className="text-lg md:text-xl text-primary-300 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Asesoría jurídica especializada con un enfoque personalizado. 
              <span className="text-complementary-300 font-medium"> Primera consulta gratuita.</span>
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.a 
                href="/contacto" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-complementary-500 to-complementary-600 text-white font-semibold rounded-full hover:from-complementary-600 hover:to-complementary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Consulta Gratuita
              </motion.a>
              <motion.a 
                href="/servicios" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-400 text-primary-200 font-semibold rounded-full hover:bg-primary-100 hover:text-primary-800 hover:border-primary-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                Nuestros Servicios
              </motion.a>
            </motion.div>
          </div>
          
          {/* Image Column */}
          <div className="relative flex flex-col space-y-8 mt-8 lg:mt-0">
            {/* Main Image Container */}
            <motion.div className="relative" variants={imageVariants}>
              {/* Professional Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/img1.webp" 
                  alt="Amanda Cabello Pino - Abogada Profesional" 
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-complementary-400/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-400/10 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
            </motion.div>
            
            {/* Professional Indicators */}
            <motion.div 
              className="flex flex-row items-center justify-between gap-6 sm:gap-0"
              variants={statsVariants}
            >
              <motion.div 
                className="text-center flex-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-complementary-400">95%</div>
                <div className="text-sm text-primary-200">Casos exitosos</div>
              </motion.div>
              
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent mx-4"></div>
              
              <motion.div 
                className="text-center flex-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-complementary-400">24h</div>
                <div className="text-sm text-primary-200">Tiempo respuesta</div>
              </motion.div>
              
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent mx-4"></div>
              
              <motion.div 
                className="text-center flex-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-complementary-400">+500</div>
                <div className="text-sm text-primary-200">Clientes atendidos</div>
              </motion.div>
            </motion.div>
          </div>
          
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;