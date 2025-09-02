import { NextResponse } from 'next/server';

// Productos base (convertidos desde productos/page.tsx)
const productosBase = [
  {
    id: 1,
    nombre: "Rapé Nukini",
    descripcion: "Rapé tradicional de la tribu Nukini, ideal para principiantes por su suavidad y claridad mental.",
    precio: "25000",
    intensidad: "Suave",
    origen: "Acre, Brasil",
    imagen: "/images/rape-nukini.jpg",
    activo: true,
    fechaCreacion: "2025-08-31",
    stock: 10
  },
  {
    id: 2,
    nombre: "Rapé Kaxinawá",
    descripcion: "Medicina sagrada de los Huni Kuin, perfecto para ceremonias y meditación profunda.",
    precio: "30000",
    intensidad: "Medio",
    origen: "Acre, Brasil",
    imagen: "/images/rape-kaxinawa.jpg",
    activo: true,
    fechaCreacion: "2025-08-31",
    stock: 15
  },
  {
    id: 3,
    nombre: "Rapé Yawanawá",
    descripcion: "Rapé ceremonial con hierbas sagradas, utilizado para limpieza energética y conexión espiritual.",
    precio: "35000",
    intensidad: "Intenso",
    origen: "Acre, Brasil",
    imagen: "/images/rape-yawanawa.jpg",
    activo: true,
    fechaCreacion: "2025-08-31",
    stock: 8
  },
  {
    id: 4,
    nombre: "Rapé Katukina",
    descripcion: "Mezcla especial con tabaco amazónico y plantas maestras para sanación profunda.",
    precio: "32000",
    intensidad: "Medio",
    origen: "Amazonas, Brasil",
    imagen: "/images/rape-katukina.jpg",
    activo: false,
    fechaCreacion: "2025-08-31",
    stock: 0
  },
  {
    id: 5,
    nombre: "Rapé Shawãdawa",
    descripcion: "Rapé ancestral de los Shawãdawa, conocido por sus propiedades purificadoras.",
    precio: "28000",
    intensidad: "Suave",
    origen: "Acre, Brasil",
    imagen: "/images/rape-shawadawa.jpg",
    activo: true,
    fechaCreacion: "2025-08-31",
    stock: 12
  },
  {
    id: 6,
    nombre: "Rapé Especial Ceremonial",
    descripcion: "Mezcla única para ceremonias especiales, elaborada con plantas sagradas seleccionadas.",
    precio: "45000",
    intensidad: "Intenso",
    origen: "Selección Especial",
    imagen: "/images/rape-especial.jpg",
    activo: true,
    fechaCreacion: "2025-08-31",
    stock: 5
  }
];

// En memoria para esta demo (en producción usarías una base de datos)
let productos = [...productosBase];

export async function GET() {
  return NextResponse.json(productos);
}

export async function POST(request: Request) {
  const nuevoProducto = await request.json();
  
  const producto = {
    ...nuevoProducto,
    id: Date.now(),
    activo: true,
    fechaCreacion: new Date().toISOString().split('T')[0]
  };
  
  productos.push(producto);
  return NextResponse.json(producto);
}

export async function PUT(request: Request) {
  const productoActualizado = await request.json();
  
  productos = productos.map(p => 
    p.id === productoActualizado.id ? { ...p, ...productoActualizado } : p
  );
  
  return NextResponse.json(productoActualizado);
}

export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = parseInt(url.searchParams.get('id') || '0');
  
  productos = productos.filter(p => p.id !== id);
  return NextResponse.json({ success: true });
}
