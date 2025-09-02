'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Star, Leaf, ChevronRight } from 'lucide-react';
import { format, addDays, addWeeks, addMonths } from 'date-fns';
import { es } from 'date-fns/locale';

interface Ceremonia {
  id: number;
  titulo: string;
  fecha: Date;
  hora: string;
  duracion: string;
  ubicacion: string;
  descripcion: string;
  facilitador: string;
  capacidad: number;
  inscritos: number;
  precio: number;
  tipo: 'individual' | 'grupal' | 'especial';
  incluye: string[];
}

export default function CeremoniasPage() {
  const [selectedType, setSelectedType] = useState<string>('todas');

  // Datos de ejemplo de ceremonias próximas
  const ceremonias: Ceremonia[] = [
    {
      id: 1,
      titulo: "Ceremonia de Luna Nueva",
      fecha: addDays(new Date(), 5),
      hora: "7:00 PM",
      duracion: "3 horas",
      ubicacion: "Espacio Sagrado - Bogotá",
      descripcion: "Ceremonia especial de luna nueva para renovación energética y manifestación de intenciones.",
      facilitador: "Maestro Carlos",
      capacidad: 12,
      inscritos: 8,
      precio: 80000,
      tipo: "grupal",
      incluye: ["Rapé ceremonial", "Acompañamiento musical", "Té medicinal", "Círculo de palabra"]
    },
    {
      id: 2,
      titulo: "Sesión Individual de Sanación",
      fecha: addDays(new Date(), 8),
      hora: "2:00 PM",
      duracion: "2 horas",
      ubicacion: "Consulta Privada",
      descripcion: "Sesión personalizada uno a uno para trabajo profundo de sanación y limpieza energética.",
      facilitador: "Maestro Carlos",
      capacidad: 1,
      inscritos: 0,
      precio: 150000,
      tipo: "individual",
      incluye: ["Consulta personalizada", "Rapé medicinal", "Limpieza energética", "Recomendaciones"]
    },
    {
      id: 3,
      titulo: "Ceremonia de Plenilunio",
      fecha: addWeeks(new Date(), 2),
      hora: "6:30 PM",
      duracion: "4 horas",
      ubicacion: "Naturaleza - Chía",
      descripcion: "Ceremonia especial de luna llena en contacto con la naturaleza para amplificar la energía lunar.",
      facilitador: "Maestro Carlos",
      capacidad: 15,
      inscritos: 12,
      precio: 100000,
      tipo: "especial",
      incluye: ["Transporte ida y vuelta", "Rapé ceremonial premium", "Cena sagrada", "Fuego ceremonial"]
    },
    {
      id: 4,
      titulo: "Círculo de Mujeres",
      fecha: addWeeks(new Date(), 3),
      hora: "3:00 PM",
      duracion: "3 horas",
      ubicacion: "Espacio Sagrado - Bogotá",
      descripcion: "Ceremonia especial dedicada al poder femenino y la sanación del linaje ancestral.",
      facilitador: "Maestra Ana",
      capacidad: 10,
      inscritos: 6,
      precio: 85000,
      tipo: "grupal",
      incluye: ["Rapé especial femenino", "Cacao ceremonial", "Círculo de hermandad", "Meditación lunar"]
    },
    {
      id: 5,
      titulo: "Ceremonia de Equinoccio",
      fecha: addMonths(new Date(), 1),
      hora: "5:00 PM",
      duracion: "5 horas",
      ubicacion: "Retiro - La Calera",
      descripcion: "Ceremonia especial de equinoccio para equilibrar energías y conectar con los ciclos naturales.",
      facilitador: "Maestro Carlos",
      capacidad: 20,
      inscritos: 5,
      precio: 120000,
      tipo: "especial",
      incluye: ["Retiro completo", "Alimentación", "Rapé ceremonial", "Temazcal", "Meditación grupal"]
    }
  ];

  const tipos = [
    { value: 'todas', label: 'Todas las ceremonias' },
    { value: 'individual', label: 'Sesiones individuales' },
    { value: 'grupal', label: 'Ceremonias grupales' },
    { value: 'especial', label: 'Eventos especiales' }
  ];

  const filteredCeremonias = selectedType === 'todas' 
    ? ceremonias 
    : ceremonias.filter(ceremonia => ceremonia.tipo === selectedType);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getTypeColor = (tipo: string) => {
    switch (tipo) {
      case 'individual': return 'bg-blue-100 text-blue-800';
      case 'grupal': return 'bg-green-100 text-green-800';
      case 'especial': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (tipo: string) => {
    switch (tipo) {
      case 'individual': return 'Individual';
      case 'grupal': return 'Grupal';
      case 'especial': return 'Especial';
      default: return tipo;
    }
  };

  const inscribirseCeremonia = (ceremonia: Ceremonia) => {
    const fechaFormateada = format(ceremonia.fecha, 'EEEE, d \'de\' MMMM', { locale: es });
    const incluye = ceremonia.incluye.join('\n• ');
    
    const mensaje = `🌙 *INSCRIPCIÓN A CEREMONIA* 🌙\n\n🎯 *${ceremonia.titulo}*\n\n📅 *Fecha:* ${fechaFormateada}\n🕕 *Hora:* ${ceremonia.hora}\n📍 *Lugar:* ${ceremonia.ubicacion}\n👥 *Facilitador:* ${ceremonia.facilitador}\n💰 *Inversión:* ${formatPrice(ceremonia.precio)}\n\n🌿 *Incluye:*\n• ${incluye}\n\n¡Hola! Me interesa inscribirme a esta ceremonia. ¿Podrías confirmarme disponibilidad?\n\nGracias 🙏`;
    
    const numeroWhatsApp = '573001234567'; // Cambia por tu número
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
  };

  return (
    <Layout>
      <div className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Calendar className="h-12 w-12 text-amber-800" />
            </div>
            <h1 className="text-4xl font-bold text-amber-900 mb-4">
              Calendario de Ceremonias
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Únete a nuestras ceremonias sagradas y experimenta la transformación 
              a través de la medicina ancestral del rapé.
            </p>
          </div>

          {/* Type Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tipos.map((tipo) => (
              <button
                key={tipo.value}
                onClick={() => setSelectedType(tipo.value)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedType === tipo.value
                    ? 'bg-amber-800 text-white'
                    : 'bg-white text-amber-800 border border-amber-800 hover:bg-amber-800 hover:text-white'
                }`}
              >
                {tipo.label}
              </button>
            ))}
          </div>

          {/* Ceremonias Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {filteredCeremonias.map((ceremonia) => (
              <div key={ceremonia.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Header de la ceremonia */}
                <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-white p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-semibold">{ceremonia.titulo}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(ceremonia.tipo)}`}>
                      {getTypeLabel(ceremonia.tipo)}
                    </span>
                  </div>
                  <p className="text-amber-100">{ceremonia.descripcion}</p>
                </div>

                <div className="p-6">
                  {/* Información básica */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-amber-600" />
                      <div>
                        <p className="text-sm text-gray-500">Fecha</p>
                        <p className="font-medium">
                          {format(ceremonia.fecha, 'EEEE, d \'de\' MMMM', { locale: es })}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-amber-600" />
                      <div>
                        <p className="text-sm text-gray-500">Hora</p>
                        <p className="font-medium">{ceremonia.hora}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-amber-600" />
                      <div>
                        <p className="text-sm text-gray-500">Ubicación</p>
                        <p className="font-medium">{ceremonia.ubicacion}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-amber-600" />
                      <div>
                        <p className="text-sm text-gray-500">Cupos</p>
                        <p className="font-medium">{ceremonia.inscritos}/{ceremonia.capacidad}</p>
                      </div>
                    </div>
                  </div>

                  {/* Facilitador */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Facilitador</p>
                    <p className="font-medium text-amber-800">{ceremonia.facilitador}</p>
                  </div>

                  {/* Incluye */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">La ceremonia incluye:</p>
                    <ul className="space-y-1">
                      {ceremonia.incluye.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Precio y acción */}
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-500">Inversión</p>
                      <p className="text-2xl font-bold text-amber-900">
                        {formatPrice(ceremonia.precio)}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      {ceremonia.inscritos >= ceremonia.capacidad ? (
                        <span className="text-red-600 font-medium">Cupos agotados</span>
                      ) : (
                        <button 
                          onClick={() => inscribirseCeremonia(ceremonia)}
                          className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                        >
                          📱 Inscribirse
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        {ceremonia.capacidad - ceremonia.inscritos} cupos disponibles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Información adicional */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Qué esperar */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-amber-900 mb-6">
                ¿Qué puedes esperar?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-800">Ambiente Sagrado</h4>
                    <p className="text-gray-600 text-sm">
                      Espacios preparados con amor y respeto para crear un ambiente propicio para la sanación.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-800">Guía Experimentada</h4>
                    <p className="text-gray-600 text-sm">
                      Facilitadores con años de experiencia en medicina ancestral y trabajo energético.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-800">Comunidad Consciente</h4>
                    <p className="text-gray-600 text-sm">
                      Compartir con personas que también buscan crecimiento y sanación espiritual.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Preparación */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-amber-900 mb-6">
                Preparación Recomendada
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-sm">Ayuno de 3-4 horas antes de la ceremonia</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-sm">Venir con ropa cómoda y de colores naturales</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-sm">Traer botella de agua</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-sm">Evitar alcohol y drogas 24-48 horas antes</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-sm">Llegar con una intención clara</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-sm">Mantener una actitud de respeto y apertura</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-amber-800 rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">
              ¿Tienes preguntas sobre las ceremonias?
            </h3>
            <p className="text-amber-100 mb-6">
              Estamos aquí para ayudarte a prepararte para tu experiencia sagrada.
            </p>
            <a
              href="/contacto"
              className="bg-white text-amber-800 px-8 py-3 rounded-full font-semibold hover:bg-amber-100 transition-colors inline-block"
            >
              Contactar para más información
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
