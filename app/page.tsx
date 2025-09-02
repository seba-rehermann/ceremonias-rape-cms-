export default function HomePage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>🌿 Ceremonias de Rapé</h1>
      <p>Sitio web en construcción</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>📝 Administrar Contenido</h2>
        <a 
          href="/admin/index.html" 
          style={{ 
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#2563eb',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            marginTop: '1rem'
          }}
        >
          Ir al Administrador
        </a>
        <p style={{ marginTop: '1rem', color: '#666' }}>
          Aquí puedes editar productos, ceremonias y contenido del blog.
        </p>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h3>🔗 Enlaces:</h3>
        <ul>
          <li><a href="/admin/index.html">Panel de Administración</a></li>
          <li><a href="https://github.com/seba-rehermann/ceremonias-rape-cms-">Repositorio GitHub</a></li>
        </ul>
      </div>
    </div>
  )
}
