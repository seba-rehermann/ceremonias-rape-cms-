'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';
import { ShoppingCart, Star, Leaf, Package } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  intensity: 'Suave' | 'Medio' | 'Intenso';
  origin: string;
  rating: number;
  stock: boolean;
}

export default function ProductosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const products: Product[] = [
    {
      id: 1,
      name: "Rapé Nukini",
      description: "Rapé tradicional de la tribu Nukini, ideal para principiantes por su suavidad y claridad mental.",
      price: 25000,
      image: "/images/rape-nukini.jpg",
      category: "tradicional",
      intensity: "Suave",
      origin: "Acre, Brasil",
      rating: 4.8,
      stock: true
    },
    {
      id: 2,
      name: "Rapé Kaxinawá",
      description: "Medicina sagrada de los Huni Kuin, perfecto para ceremonias y meditación profunda.",
      price: 30000,
      image: "/images/rape-kaxinawa.jpg",
      category: "tradicional",
      intensity: "Medio",
      origin: "Acre, Brasil",
      rating: 4.9,
      stock: true
    },
    {
      id: 3,
      name: "Rapé Yawanawá",
      description: "Rapé ceremonial con hierbas sagradas, utilizado para limpieza energética y conexión espiritual.",
      price: 35000,
      image: "/images/rape-yawanawa.jpg",
      category: "ceremonial",
      intensity: "Intenso",
      origin: "Acre, Brasil",
      rating: 4.7,
      stock: true
    },
    {
      id: 4,
      name: "Rapé Katukina",
      description: "Mezcla especial con tabaco amazónico y plantas maestras para sanación profunda.",
      price: 32000,
      image: "/images/rape-katukina.jpg",
      category: "medicinal",
      intensity: "Medio",
      origin: "Amazonas, Brasil",
      rating: 4.6,
      stock: false
    },
    {
      id: 5,
      name: "Rapé Shawãdawa",
      description: "Rapé ancestral de los Shawãdawa, conocido por sus propiedades purificadoras.",
      price: 28000,
      image: "/images/rape-shawadawa.jpg",
      category: "tradicional",
      intensity: "Suave",
      origin: "Acre, Brasil",
      rating: 4.5,
      stock: true
    },
    {
      id: 6,
      name: "Rapé Especial Ceremonial",
      description: "Mezcla única para ceremonias especiales, elaborada con plantas sagradas seleccionadas.",
      price: 45000,
      image: "/images/rape-especial.jpg",
      category: "ceremonial",
      intensity: "Intenso",
      origin: "Selección Especial",
      rating: 5.0,
      stock: true
    }
  ];

  const categories = [
    { value: 'todos', label: 'Todos los productos' },
    { value: 'tradicional', label: 'Tradicional' },
    { value: 'ceremonial', label: 'Ceremonial' },
    { value: 'medicinal', label: 'Medicinal' }
  ];

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'Suave': return 'bg-green-100 text-green-800';
      case 'Medio': return 'bg-yellow-100 text-yellow-800';
      case 'Intenso': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const enviarPedidoWhatsApp = () => {
    const pedidoTexto = Object.entries(cart).map(([productId, quantity]) => {
      const product = products.find(p => p.id === parseInt(productId));
      if (!product) return '';
      return `• ${product.name} x${quantity} - ${formatPrice(product.price * quantity)}`;
    }).join('\n');
    
    const total = Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return total + (product ? product.price * quantity : 0);
    }, 0);
    
    const mensaje = `🌿 *PEDIDO DE RAPÉ* 🌿\n\n${pedidoTexto}\n\n💰 *Total: ${formatPrice(total)}*\n\n¡Hola! Me interesa hacer este pedido. ¿Podrías confirmarme disponibilidad y forma de pago?\n\nGracias 🙏`;
    
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
              <Package className="h-12 w-12 text-amber-800" />
            </div>
            <h1 className="text-4xl font-bold text-amber-900 mb-4">
              Nuestros Productos
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra selección de rapé auténtico, elaborado con amor y respeto 
              hacia las tradiciones ancestrales.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-amber-800 text-white'
                    : 'bg-white text-amber-800 border border-amber-800 hover:bg-amber-800 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Product Image */}
                <div className="h-64 bg-amber-100 flex items-center justify-center relative">
                  <Leaf className="h-24 w-24 text-amber-600" />
                  {/* Placeholder - aquí iría la imagen real */}
                  <span className="absolute bottom-4 text-amber-600 text-sm font-medium">
                    {product.name}
                  </span>
                </div>

                <div className="p-6">
                  {/* Product Header */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-amber-900">
                      {product.name}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getIntensityColor(product.intensity)}`}>
                      {product.intensity}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>

                  {/* Origin */}
                  <p className="text-xs text-amber-700 mb-4">
                    <strong>Origen:</strong> {product.origin}
                  </p>

                  {/* Price and Actions */}
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-900">
                      {formatPrice(product.price)}
                    </span>
                    <button
                      onClick={() => addToCart(product.id)}
                      disabled={!product.stock}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                        product.stock
                          ? 'bg-amber-800 text-white hover:bg-amber-900'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      {product.stock ? 'Agregar' : 'Agotado'}
                    </button>
                  </div>

                  {/* Cart quantity indicator */}
                  {cart[product.id] && (
                    <div className="mt-3 text-center">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                        En el carrito: {cart[product.id]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          {Object.keys(cart).length > 0 && (
            <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">
                Resumen del Pedido
              </h3>
              <div className="space-y-2 mb-4">
                {Object.entries(cart).map(([productId, quantity]) => {
                  const product = products.find(p => p.id === parseInt(productId));
                  if (!product) return null;
                  return (
                    <div key={productId} className="flex justify-between">
                      <span>{product.name} x{quantity}</span>
                      <span>{formatPrice(product.price * quantity)}</span>
                    </div>
                  );
                })}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span>
                    {formatPrice(
                      Object.entries(cart).reduce((total, [productId, quantity]) => {
                        const product = products.find(p => p.id === parseInt(productId));
                        return total + (product ? product.price * quantity : 0);
                      }, 0)
                    )}
                  </span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button 
                  onClick={enviarPedidoWhatsApp}
                  className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center gap-2 mx-auto"
                >
                  📱 Enviar por WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
