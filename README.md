# Ceremonias de Rapé - Sitio Web

Sitio web para ceremonias de rapé con CMS integrado para la gestión de contenido.

## 🚀 Desarrollo Local

### Requisitos
- Node.js (versión 18 o superior)
- npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/seba-rehermann/ceremonias-rape-cms-.git
cd ceremonias-rape-cms-

# Instalar dependencias
npm install
```

### Desarrollo Local

Para trabajar en el sitio completo con CMS:

```bash
# Ejecutar sitio web + CMS (RECOMENDADO)
npm run dev:full
```

Esto iniciará:
- **Sitio web**: http://localhost:3001
- **CMS**: http://localhost:3001/admin/
- **Servidor CMS**: http://localhost:8081 (proxy para archivos locales)

### Comandos Alternativos

```bash
# Solo el sitio web
npm run dev

# Solo el CMS server
npm run cms

# Build para producción
npm run build
```

## 📝 Gestión de Contenido

### Acceso al CMS
1. Ve a http://localhost:3001/admin/
2. **No requiere autenticación en desarrollo local**
3. Podrás ver y editar:
   - **Productos**: Diferentes tipos de rapé
   - **Ceremonias**: Eventos programados
   - **Páginas**: Contenido del sitio
   - **Blog**: Artículos y noticias
   - **Configuración**: Datos generales del sitio

### Estructura de Archivos de Contenido

```
content/
├── productos/          # Archivos .md de productos de rapé
├── ceremonias/         # Archivos .md de ceremonias
├── blog/              # Artículos del blog
├── pages/             # Páginas del sitio (.yml)
└── config.yml         # Configuración general
```

## 🌐 Deployment

### Para Netlify (Cuando esté listo)
1. El sitio ya tiene configuración para Netlify (`netlify.toml`)
2. Para deployment con autenticación GitHub:
   - Crear OAuth App en GitHub
   - Configurar en Netlify
   - Cambiar `local_backend: true` a `false` en `public/admin/config.yml`

## 🛠️ Estructura del Proyecto

```
├── app/                # Páginas Next.js (App Router)
├── components/         # Componentes React reutilizables
├── content/           # Archivos de contenido (markdown/yaml)
├── public/
│   ├── admin/         # Configuración del CMS
│   └── images/        # Imágenes públicas
├── lib/               # Utilidades y configuraciones
└── styles/            # Estilos globales
```

## 🧘‍♀️ Características

- **CMS Visual**: Interfaz amigable para gestionar contenido
- **Responsive**: Optimizado para móviles y desktop
- **SEO**: Optimizado para motores de búsqueda
- **PWA Ready**: Preparado para Progressive Web App
- **Performance**: Optimizado con Next.js 15 y Turbopack

## 📋 Lista de Tareas

- [x] Configuración inicial del proyecto
- [x] Integración de Decap CMS
- [x] Configuración para desarrollo local
- [ ] Diseño y estilos del sitio
- [ ] Funcionalidades específicas
- [ ] Optimización y testing
- [ ] Deployment a Netlify

## 🆘 Problemas Comunes

### El CMS no muestra contenido
- Verificar que ambos servidores estén corriendo
- Verificar que los archivos estén en la carpeta `content/`

### Puerto en uso
- Cambiar puertos en caso de conflicto
- Usar `pkill -f "next"` y `pkill -f "decap"` para limpiar procesos

## 🤝 Contribuir

1. Fork del proyecto
2. Crear branch para tu feature
3. Commit de cambios
4. Push al branch
5. Abrir Pull Request
