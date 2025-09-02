#!/bin/bash

echo "🛑 Deteniendo sitio web de Ceremonias de Rapé..."

# Matar todos los procesos relacionados
pkill -f "next dev" 2>/dev/null && echo "✅ Sitio web detenido"
pkill -f "decap-server" 2>/dev/null && echo "✅ Servidor CMS detenido"

# Limpiar archivos de log
rm -f cms.log website.log 2>/dev/null

echo "🧹 ¡Todo detenido y limpiado!"
