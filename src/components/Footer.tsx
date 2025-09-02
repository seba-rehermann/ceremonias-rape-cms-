import { Leaf, Instagram, Facebook, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-amber-200" />
              <span className="font-bold text-xl">Ceremonias de Rapé</span>
            </div>
            <p className="text-amber-100 mb-4">
              Medicina ancestral para tu bienestar espiritual. Productos auténticos y ceremonias sagradas.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="/productos" className="text-amber-100 hover:text-white transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="/ceremonias" className="text-amber-100 hover:text-white transition-colors">
                  Ceremonias
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-amber-100 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales y contacto */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="#" 
                className="text-amber-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-amber-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-amber-200 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-6 w-6" />
              </a>
            </div>
            <p className="text-amber-100 text-sm">
              Contacto: info@ceremoniasrape.com
            </p>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-100">
            © {currentYear} Ceremonias de Rapé. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
