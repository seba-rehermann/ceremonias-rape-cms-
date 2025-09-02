import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-amber-900">Ceremonias de Rapé</h1>
            <div className="flex space-x-6">
              <Link href="/" className="text-amber-800 hover:text-amber-900 font-medium">
                Inicio
              </Link>
              <Link href="/productos" className="text-amber-800 hover:text-amber-900 font-medium">
                Productos
              </Link>
              <Link href="/ceremonias" className="text-amber-800 hover:text-amber-900 font-medium">
                Ceremonias
              </Link>
              <Link href="/contacto" className="text-amber-800 hover:text-amber-900 font-medium">
                Contacto
              </Link>
              <Link href="/admin" className="text-amber-800 hover:text-amber-900 font-medium text-xs">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
            Medicina Ancestral del Rapé
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Descubre la sabiduría milenaria del rapé amazónico. Productos auténticos y ceremonias sagradas 
            para tu crecimiento espiritual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/productos"
              className="bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors"
            >
              Ver Productos
            </Link>
            <Link
              href="/ceremonias"
              className="bg-white text-amber-800 border-2 border-amber-800 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              Próximas Ceremonias
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-semibold text-amber-900 mb-3">Productos Auténticos</h3>
            <p className="text-gray-600">
              Rapé tradicional de diferentes tribus amazónicas, elaborado con respeto y sabiduría ancestral.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🙏</div>
            <h3 className="text-xl font-semibold text-amber-900 mb-3">Ceremonias Sagradas</h3>
            <p className="text-gray-600">
              Círculos de rapé en un espacio seguro y sagrado, guiados con amor y experiencia.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">💚</div>
            <h3 className="text-xl font-semibold text-amber-900 mb-3">Acompañamiento</h3>
            <p className="text-gray-600">
              Asesoramiento personalizado para tu proceso de sanación y crecimiento espiritual.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-amber-900 mb-4">
            ¿Listo para comenzar tu journey?
          </h3>
          <p className="text-gray-600 mb-6">
            Ponte en contacto con nosotros para resolver tus dudas o hacer tu pedido.
          </p>
          <Link
            href="/contacto"
            className="bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors inline-block"
          >
            Contactar Ahora
          </Link>
        </div>
      </main>
    </div>
  );
}
