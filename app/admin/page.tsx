'use client'

import { useEffect } from 'react'
import Head from 'next/head'

export default function AdminPage() {
  useEffect(() => {
    // Cargar el CMS solo en el cliente
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js'
    script.async = true
    document.head.appendChild(script)

    const link = document.createElement('link')
    link.href = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      // Limpiar al desmontar
      document.head.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

  return (
    <div style={{ minHeight: '100vh' }}>
      <Head>
        <title>Admin - Ceremonias de Rapé</title>
      </Head>
      {/* El CMS se montará aquí automáticamente */}
    </div>
  )
}
