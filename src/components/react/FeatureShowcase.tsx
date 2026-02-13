import { motion } from 'motion/react';
import { Warehouse, Truck, Package, BarChart3, Shield, Headphones } from 'lucide-react';

import warehouseImg from '@assets/telecomunicaciones.jpg';
import truckImg from '@assets/MG.jpg';
import packageImg from '@assets/electricidad.jpg';
import barChart3Img from '@assets/datacenter.jpg';
import shieldImg from '@assets/AAC.jpg';
import headphonesImg from '@assets/photo-1486312338219-ce68d2c6f44d.jpg';

const features = [
  {
    icon: Warehouse,
    title: 'Telecomunicaciones',
    description: 'Tecnología emergente que facilita el contacto y aumenta sus capacidades digitales.',
    image: warehouseImg,
  },
  {
    icon: Truck,
    title: 'Electromecánica Industrial:',
    description: 'Instalación y mantenimiento de motores generadores eléctricos de todas las marcas comerciales en Centroamérica.',
    image: truckImg,
  },
  {
    icon: Package,
    title: 'Extension de circuitos electricos:',
    description: 'Electrificación en Baja, mediana y Alta Tensión',
    image: packageImg,
  },
  {
    icon: BarChart3,
    title: 'Soluciones para Datacenter',
    description: 'Remodelacion, Mantenimiento preventivo y correctivo en unidad de respaldo de energía inmediata (UPS)',
    image: barChart3Img,
  },
  {
    icon: Shield,
    title: 'Aires Acondicionados',
    description: 'Instalacion, Mantenimiento preventivo y correctivo de unidades de aires acondicionados de todo tipo.',
    image: shieldImg,
  },

];

export default function FeatureShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <motion.img
                src={feature.image.src}
                alt={feature.title}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
              
              {/* Icon overlay */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg"
              >
                <feature.icon className="w-6 h-6 text-blue-600" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-200 opacity-90">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

