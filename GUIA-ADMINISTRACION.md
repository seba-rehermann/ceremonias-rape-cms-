# 🌿 Guía de Administración - Ceremonias de Rapé

## 🚀 **Cómo Iniciar el Sitio**

### Opción 1: Lanzadores de Escritorio
1. **Doble clic en**: `🌿 Iniciar Ceremonias Rapé` (en tu escritorio)
2. **Espera** que se abran ambos servicios
3. **Automáticamente se abrirá** el navegador con el administrador

### Opción 2: Terminal
```bash
cd /home/seba/rape-ceremonias-web
./start-website.sh
```

## 🔗 **Enlaces Importantes**

| Función | URL | Descripción |
|---------|-----|-------------|
| **Administrador** | http://localhost:3001/admin | Panel para editar contenido |
| **Sitio Web** | http://localhost:3001 | Página pública |
| **Repositorio** | https://github.com/seba-rehermann/ceremonias-rape-cms- | Código en GitHub |

## 📝 **Cómo Administrar Contenido**

### 1. **Acceder al Administrador**
- Ve a: http://localhost:3001/admin
- **No necesita contraseña** (modo local)

### 2. **Secciones Disponibles**
- **🍃 Productos**: Diferentes tipos de rapé
- **🕉️ Ceremonias**: Eventos y ceremonias
- **📝 Blog**: Artículos y noticias

### 3. **Crear Nuevo Contenido**
1. Clic en la sección (ej: "Productos")
2. Clic en **"New Productos"**
3. Llenar los campos
4. **Guardar** → **Publish**

### 4. **Editar Contenido Existente**
1. Clic en la sección
2. Seleccionar el item a editar
3. Hacer cambios
4. **Save** → **Publish**

### 5. **Subir Imágenes**
- En cualquier campo de imagen
- Clic en **"Choose an image"**
- Subir desde tu computadora
- Se guarda automáticamente en `public/images/`

## 🗂️ **Estructura de Archivos**

```
rape-ceremonias-web/
├── content/              # ← Archivos de contenido
│   ├── productos/        # ← Archivos .md de productos
│   ├── ceremonias/       # ← Archivos .md de ceremonias
│   └── blog/            # ← Artículos del blog
├── public/
│   └── images/          # ← Imágenes subidas
├── app/                 # ← Código de la página
└── start-website.sh     # ← Script para iniciar
```

## 🛑 **Cómo Detener el Sitio**

### Opción 1: Lanzador de Escritorio
- **Doble clic en**: `🛑 Detener Ceremonias Rapé`

### Opción 2: Terminal
```bash
cd /home/seba/rape-ceremonias-web
./stop-website.sh
```

## 🔧 **Solución de Problemas**

### El sitio no abre
1. Ejecutar el **lanzador de iniciar**
2. Esperar 10-15 segundos
3. Ir a http://localhost:3001/admin

### Error de puerto ocupado
1. Ejecutar el **lanzador de detener**
2. Esperar 5 segundos
3. Ejecutar el **lanzador de iniciar**

### No se ven los cambios
1. **Refrescar** la página (F5)
2. Si no funciona, **detener** y **reiniciar**

### Revisar logs de errores
```bash
# Ver errores del sitio web
tail -f website.log

# Ver errores del CMS
tail -f cms.log
```

## 💾 **Guardar Cambios en GitHub**

### Desde Terminal:
```bash
cd /home/seba/rape-ceremonias-web
git add .
git commit -m "Actualizar contenido"
git push origin main
```

### ¿Para qué sirve?
- **Respaldo** de tus cambios
- **Historial** de modificaciones
- **Sincronizar** entre diferentes dispositivos

## 🌐 **Subir a Internet (Netlify)**

Cuando quieras que tu sitio sea público:

1. Ve a https://netlify.com
2. Conecta tu repositorio de GitHub
3. Se publicará automáticamente
4. Tu sitio estará en: `https://tu-sitio.netlify.app`

## 📋 **Flujo de Trabajo Diario**

1. **Iniciar**: Doble clic en `🌿 Iniciar Ceremonias Rapé`
2. **Editar**: Ir a http://localhost:3001/admin
3. **Agregar/Editar**: Productos, ceremonias, blog
4. **Revisar**: Ver cambios en http://localhost:3001
5. **Guardar**: Hacer commit en GitHub (opcional)
6. **Cerrar**: Doble clic en `🛑 Detener Ceremonias Rapé`

## 📞 **Contacto de Soporte**

Si tienes problemas técnicos, puedes:
- Revisar esta guía
- Consultar el archivo README.md
- Verificar los logs de error

---

**¡Disfruta administrando tu sitio de Ceremonias de Rapé!** 🌿✨
