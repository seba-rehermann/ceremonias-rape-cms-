import { getProductos, getCeremonias } from '../lib/content'

export default function HomePage() {
  const productos = getProductos()
  const ceremonias = getCeremonias()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Hero Section */}
      <header className="bg-green-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">🌿 Ceremonias de Rapé</h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Conecta con la medicina ancestral del rapé en un espacio sagrado de sanación y transformación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#productos" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Ver Productos
            </a>
            <a 
              href="#ceremonias" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Próximas Ceremonias
            </a>
          </div>
        </div>
      </header>

      {/* Productos Section */}
      <section id="productos" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800">🌿 Nuestros Productos</h2>
          
          {productos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.map((producto: any) => (
                <div key={producto.slug} className="bg-green-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  {producto.image && (
                    <img 
                      src={producto.image} 
                      alt={producto.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-xl font-bold text-green-800 mb-2">{producto.title}</h3>
                  <p className="text-gray-600 mb-4">{producto.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">${producto.price}</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      producto.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {producto.available ? 'Disponible' : 'Agotado'}
                    </span>
                  </div>
                  {producto.tribe && (
                    <p className="text-sm text-gray-500 mt-2">Tribu: {producto.tribe}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No hay productos disponibles</p>
          )}
        </div>
      </section>

      {/* Ceremonias Section */}
      <section id="ceremonias" className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800">🕉️ Próximas Ceremonias</h2>
          
          {ceremonias.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {ceremonias.map((ceremonia: any) => (
                <div key={ceremonia.slug} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  {ceremonia.image && (
                    <img 
                      src={ceremonia.image} 
                      alt={ceremonia.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-xl font-bold text-green-800 mb-2">{ceremonia.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p>📅 {new Date(ceremonia.date).toLocaleDateString('es-ES', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}</p>
                    <p>📍 {ceremonia.location}</p>
                    <p>⏱️ {ceremonia.duration} horas</p>
                    {ceremonia.facilitator && <p>👥 Facilitador: {ceremonia.facilitator}</p>}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">${ceremonia.price}</span>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{ceremonia.capacity} cupos</p>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        ceremonia.active 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {ceremonia.active ? 'Activa' : 'Inactiva'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No hay ceremonias programadas</p>
          )}
        </div>
      </section>

      {/* Admin Section - Solo visible en desarrollo */}
      <section className="py-8 bg-gray-100 border-t">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">🔧 Panel de Administración</h3>
          <a 
            href="/admin/index.html" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Gestionar Contenido
          </a>
          <p className="text-sm text-gray-500 mt-2">
            Edita productos, ceremonias y contenido del sitio
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="opacity-90">
            © 2025 Ceremonias de Rapé. Medicina ancestral con respeto y tradición.
          </p>
        </div>
      </footer>
    </div>
  )
}
