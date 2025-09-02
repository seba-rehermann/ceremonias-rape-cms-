const fs = require('fs');
const path = require('path');

// Función para crear un SVG simple con una hoja
function createIconSVG(size) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="#8B4513" rx="${size * 0.1}"/>
  <g transform="translate(${size * 0.2}, ${size * 0.2})">
    <path d="M${size * 0.3} ${size * 0.1} Q${size * 0.5} 0 ${size * 0.7} ${size * 0.1} Q${size * 0.8} ${size * 0.2} ${size * 0.75} ${size * 0.4} L${size * 0.5} ${size * 0.6} L${size * 0.25} ${size * 0.4} Q${size * 0.2} ${size * 0.2} ${size * 0.3} ${size * 0.1} Z" fill="#FED7AA" stroke="#F59E0B" stroke-width="1"/>
    <line x1="${size * 0.5}" y1="${size * 0.6}" x2="${size * 0.5}" y2="${size * 0.8}" stroke="#F59E0B" stroke-width="2"/>
  </g>
</svg>`;
}

// Crear directorio de iconos si no existe
const iconsDir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Tamaños de iconos necesarios
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Crear archivos SVG para cada tamaño
sizes.forEach(size => {
  const svgContent = createIconSVG(size);
  const filename = `icon-${size}x${size}.svg`;
  const filepath = path.join(iconsDir, filename);
  
  fs.writeFileSync(filepath, svgContent);
  console.log(`Created ${filename}`);
});

console.log('All icons created successfully!');
