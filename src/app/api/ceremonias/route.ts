import { NextResponse } from 'next/server';

// Ceremonias base (convertidas desde ceremonias/page.tsx)
const ceremoniasBase = [
  {
    id: 1,
    titulo: "Ceremonia de Luna Nueva",
    descripcion: "Ceremonia especial de luna nueva para renovación energética y manifestación de intenciones.",
    fecha: "2025-09-06", // +5 días
    hora: "19:00",
    horaFin: "22:00",
    lugar: "Espacio Sagrado - Bogotá",
    precio: "80000",
    cupos: 12,
    cuposDisponibles: 4, // 12 - 8 inscritos
    incluye: ["Rapé ceremonial", "Acompañamiento musical", "Té medicinal", "Círculo de palabra"],
    activo: true,
    fechaCreacion: "2025-08-31"
  },
  {
    id: 2,
    titulo: "Sesión Individual de Sanación",
    descripcion: "Sesión personalizada uno a uno para trabajo profundo de sanación y limpieza energética.",
    fecha: "2025-09-09", // +8 días
    hora: "14:00",
    horaFin: "16:00",
    lugar: "Consulta Privada",
    precio: "150000",
    cupos: 1,
    cuposDisponibles: 1,
    incluye: ["Consulta personalizada", "Rapé medicinal", "Limpieza energética", "Recomendaciones"],
    activo: true,
    fechaCreacion: "2025-08-31"
  },
  {
    id: 3,
    titulo: "Ceremonia de Plenilunio",
    descripcion: "Ceremonia especial de luna llena en contacto con la naturaleza para amplificar la energía lunar.",
    fecha: "2025-09-15", // +2 semanas
    hora: "18:30",
    horaFin: "22:30",
    lugar: "Naturaleza - Chía",
    precio: "100000",
    cupos: 15,
    cuposDisponibles: 3, // 15 - 12 inscritos
    incluye: ["Transporte ida y vuelta", "Rapé ceremonial premium", "Cena sagrada", "Fuego ceremonial"],
    activo: true,
    fechaCreacion: "2025-08-31"
  },
  {
    id: 4,
    titulo: "Círculo de Mujeres",
    descripcion: "Ceremonia especial dedicada al poder femenino y la sanación del linaje ancestral.",
    fecha: "2025-09-22", // +3 semanas
    hora: "15:00",
    horaFin: "18:00",
    lugar: "Espacio Sagrado - Bogotá",
    precio: "85000",
    cupos: 10,
    cuposDisponibles: 4, // 10 - 6 inscritos
    incluye: ["Rapé especial femenino", "Cacao ceremonial", "Círculo de hermandad", "Meditación lunar"],
    activo: true,
    fechaCreacion: "2025-08-31"
  },
  {
    id: 5,
    titulo: "Ceremonia de Equinoccio",
    descripcion: "Ceremonia especial de equinoccio para equilibrar energías y conectar con los ciclos naturales.",
    fecha: "2025-10-01", // +1 mes
    hora: "17:00",
    horaFin: "22:00",
    lugar: "Retiro - La Calera",
    precio: "120000",
    cupos: 20,
    cuposDisponibles: 15, // 20 - 5 inscritos
    incluye: ["Retiro completo", "Alimentación", "Rapé ceremonial", "Temazcal", "Meditación grupal"],
    activo: true,
    fechaCreacion: "2025-08-31"
  }
];

// En memoria para esta demo
let ceremonias = [...ceremoniasBase];

export async function GET() {
  return NextResponse.json(ceremonias);
}

export async function POST(request: Request) {
  const nuevaCeremonia = await request.json();
  
  const ceremonia = {
    ...nuevaCeremonia,
    id: Date.now(),
    cuposDisponibles: nuevaCeremonia.cupos,
    activo: true,
    fechaCreacion: new Date().toISOString().split('T')[0]
  };
  
  ceremonias.push(ceremonia);
  return NextResponse.json(ceremonia);
}

export async function PUT(request: Request) {
  const ceremoniaActualizada = await request.json();
  
  ceremonias = ceremonias.map(c => 
    c.id === ceremoniaActualizada.id ? { ...c, ...ceremoniaActualizada } : c
  );
  
  return NextResponse.json(ceremoniaActualizada);
}

export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = parseInt(url.searchParams.get('id') || '0');
  
  ceremonias = ceremonias.filter(c => c.id !== id);
  return NextResponse.json({ success: true });
}
