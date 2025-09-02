'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';
import { MessageCircle, Send, Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function ContactoPage() {
  const [formType, setFormType] = useState<'consulta' | 'pedido'>('consulta');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    tipoConsulta: '',
    productos: '',
    direccion: '',
    ciudad: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí iría la lógica para enviar el formulario
    // Por ahora solo mostramos un alert
    alert(`Formulario de ${formType} enviado. Te contactaremos pronto!`);
    
    // Reset form
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: '',
      tipoConsulta: '',
      productos: '',
      direccion: '',
      ciudad: ''
    });
  };

  const tiposConsulta = [
    'Información sobre productos',
    'Consulta sobre ceremonias',
    'Asesoría personalizada',
    'Colaboraciones',
    'Otros'
  ];

  return (
    <Layout>
      <div className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <MessageCircle className="h-12 w-12 text-amber-800" />
            </div>
            <h1 className="text-4xl font-bold text-amber-900 mb-4">
              Contacto
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos aquí para ayudarte en tu journey espiritual. Contáctanos para consultas o pedidos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Form Type Toggle */}
              <div className="flex mb-6 bg-amber-100 rounded-lg p-1">
                <button
                  onClick={() => setFormType('consulta')}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                    formType === 'consulta'
                      ? 'bg-amber-800 text-white'
                      : 'text-amber-800 hover:bg-amber-200'
                  }`}
                >
                  Consulta
                </button>
                <button
                  onClick={() => setFormType('pedido')}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                    formType === 'pedido'
                      ? 'bg-amber-800 text-white'
                      : 'text-amber-800 hover:bg-amber-200'
                  }`}
                >
                  Pedido
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Datos personales */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="+57 300 123 4567"
                  />
                </div>

                {/* Campos específicos según el tipo */}
                {formType === 'consulta' ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de consulta
                    </label>
                    <select
                      name="tipoConsulta"
                      value={formData.tipoConsulta}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="">Selecciona un tipo</option>
                      {tiposConsulta.map((tipo) => (
                        <option key={tipo} value={tipo}>{tipo}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Productos de interés
                      </label>
                      <textarea
                        name="productos"
                        value={formData.productos}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Especifica los productos que te interesan y cantidades"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Dirección *
                        </label>
                        <input
                          type="text"
                          name="direccion"
                          required={formType === 'pedido'}
                          value={formData.direccion}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="Dirección de entrega"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ciudad *
                        </label>
                        <input
                          type="text"
                          name="ciudad"
                          required={formType === 'pedido'}
                          value={formData.ciudad}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="Ciudad"
                        />
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {formType === 'consulta' ? 'Tu consulta' : 'Información adicional'} *
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder={formType === 'consulta' 
                      ? "Cuéntanos sobre tu consulta o dudas..." 
                      : "Información adicional sobre tu pedido..."
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-amber-900 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  {formType === 'consulta' ? 'Enviar Consulta' : 'Enviar Pedido'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-amber-900 mb-6">
                  Información de Contacto
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">+57 300 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@ceremoniasrape.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium text-gray-900">Teléfono</p>
                      <p className="text-gray-600">+57 300 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="font-medium text-gray-900">Ubicación</p>
                      <p className="text-gray-600">Bogotá, Colombia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-amber-900 mb-6">
                  Horarios de Atención
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium">Lunes - Viernes</span>
                        <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium">Sábados</span>
                        <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium">Domingos</span>
                        <span className="text-gray-600">Cerrado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-amber-800 rounded-lg shadow-lg p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">
                  Contacto Rápido
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="https://wa.me/573001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 transition-colors rounded-lg p-3"
                  >
                    <MessageSquare className="h-6 w-6" />
                    <span className="font-medium">Escribir por WhatsApp</span>
                  </a>
                  
                  <a
                    href="mailto:info@ceremoniasrape.com"
                    className="flex items-center space-x-3 bg-amber-700 hover:bg-amber-600 transition-colors rounded-lg p-3"
                  >
                    <Mail className="h-6 w-6" />
                    <span className="font-medium">Enviar Email</span>
                  </a>
                  
                  <a
                    href="tel:+573001234567"
                    className="flex items-center space-x-3 bg-amber-700 hover:bg-amber-600 transition-colors rounded-lg p-3"
                  >
                    <Phone className="h-6 w-6" />
                    <span className="font-medium">Llamar Ahora</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-amber-900 mb-8 text-center">
              Preguntas Frecuentes
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">
                  ¿Qué es el rapé?
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  El rapé es una medicina sagrada ancestral, compuesta principalmente por tabaco y plantas medicinales, 
                  utilizada por pueblos indígenas amazónicos para ceremonias de sanación y conexión espiritual.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">
                  ¿Cómo se usa el rapé?
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  El rapé se administra por las fosas nasales usando un applicador llamado kuripe (auto-aplicación) 
                  o tepi (aplicación por otra persona). Se recomienda empezar con cantidades pequeñas.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">
                  ¿Realizan envíos?
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Sí, realizamos envíos a toda Colombia. Los tiempos de entrega varían según la ciudad. 
                  Contáctanos para conocer los costos y tiempos específicos.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">
                  ¿Puedo participar en las ceremonias?
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  ¡Por supuesto! Nuestras ceremonias están abiertas a todas las personas que busquen 
                  sanación y crecimiento espiritual. Revisa nuestro calendario de ceremonias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
