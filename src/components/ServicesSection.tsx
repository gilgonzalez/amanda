import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Scale, Users, FileText, Shield, ArrowRight, CheckCircle } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Derecho Civil",
      description: "Resolución de conflictos entre particulares con enfoque personalizado y resultados efectivos.",
      icon: <Scale className="w-8 h-8" />,
      features: ["Contratos", "Responsabilidad civil", "Daños y perjuicios"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Derecho Familiar",
      description: "Asesoría integral en asuntos familiares con sensibilidad y profesionalismo.",
      icon: <Users className="w-8 h-8" />,
      features: ["Divorcios", "Custodia", "Pensiones alimenticias"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: 3,
      title: "Derecho Laboral",
      description: "Defensa de tus derechos laborales con experiencia comprobada en el sector.",
      icon: <FileText className="w-8 h-8" />,
      features: ["Despidos", "Reclamaciones", "Negociación colectiva"],
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Derecho Penal",
      description: "Representación legal sólida en procesos penales con estrategia personalizada.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Defensa penal", "Recursos", "Medidas cautelares"],
      color: "from-red-500 to-red-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 1
      }
    }
  };

  return (
    <section id="service" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-complementary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Section - Top */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="lg:inline">Servicios </span>
              <span className="text-green-600">
                Especializados
              </span>
            </h2>
          </div>
          
          <div className="w-24 lg:w-32 h-1 bg-gradient-to-r from-primary-50 to-green-500 rounded-full mb-6 mx-auto"></div>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Asesoría legal integral con un enfoque personalizado para cada caso. 
            <strong className="text-gray-800">Experiencia y resultados</strong> que marcan la diferencia.
          </p>
          
          <div className="flex items-center justify-center text-primary font-medium mb-8">
            <CheckCircle className="w-6 h-6 mr-3 stroke-green-600" />
            <span className="text-xl font-bold text-green-600">
              +500 casos resueltos
            </span>
          </div>
        </motion.div>

        {/* Services Grid - Middle */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden h-full" style={{
                boxShadow: '0 10px 25px -5px rgba(251, 146, 60, 0.1), 0 10px 10px -5px rgba(251, 146, 60, 0.04)'
              }}>
                
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Decorative line */}
                <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${service.color} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`}></div>
                
                <div className="relative flex flex-col gap-6 h-full">
                  
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {service.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200 group-hover:bg-gray-100 group-hover:border-gray-300 transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <a href="/servicios" className="group/btn flex items-center text-gray-600 hover:text-complementary font-medium transition-all duration-300 hover:translate-x-2 self-start cursor-pointer ">
                    <span className="mr-2">Más información</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Centered */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-6">
            ¿Necesitas asesoría en otra área legal?
          </p>
          <a href="/contacto" className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-4 rounded-2xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-orange-500 hover:to-orange-700 shadow-lg shadow-orange-200 cursor-pointer">
            Consulta personalizada
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;