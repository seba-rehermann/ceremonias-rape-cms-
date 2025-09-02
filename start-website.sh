#!/bin/bash

# Script para iniciar el sitio web de Ceremonias de Rapé
echo "🌿 Iniciando sitio web de Ceremonias de Rapé..."

# Ir al directorio del proyecto
cd "/home/seba/rape-ceremonias-web"

# Matar procesos previos si existen
echo "🧹 Limpiando procesos previos..."
pkill -f "next dev" 2>/dev/null || true
pkill -f "decap-server" 2>/dev/null || true

# Esperar un momento
sleep 2

# Iniciar los servicios
echo "🚀 Iniciando servicios..."

# Iniciar el servidor CMS en segundo plano
echo "📝 Iniciando servidor CMS..."
npx decap-server > cms.log 2>&1 &

# Esperar que el CMS inicie
sleep 3

# Iniciar Next.js
echo "⚡ Iniciando sitio web..."
npm run dev > website.log 2>&1 &

# Esperar que Next.js inicie
sleep 5

echo "✅ ¡Sitio web iniciado exitosamente!"
echo ""
echo "🌐 Sitio web: http://localhost:3001"
echo "📝 Administrador: http://localhost:3001/admin"
echo ""
echo "📋 Para ver los logs:"
echo "   Website: tail -f website.log"
echo "   CMS: tail -f cms.log"
echo ""
echo "🛑 Para detener: ejecuta 'stop-website.sh'"

# Abrir navegador automáticamente
xdg-open "http://localhost:3001/admin" 2>/dev/null || firefox "http://localhost:3001/admin" 2>/dev/null || google-chrome "http://localhost:3001/admin" 2>/dev/null || true
