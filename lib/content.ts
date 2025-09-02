import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export function getProductos() {
  const productosDir = path.join(contentDirectory, 'productos')
  
  if (!fs.existsSync(productosDir)) {
    return []
  }
  
  const filenames = fs.readdirSync(productosDir)
  const productos = filenames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const filePath = path.join(productosDir, name)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: name.replace(/\.md$/, ''),
        ...data,
        content
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return productos
}

export function getCeremonias() {
  const ceremoniasDir = path.join(contentDirectory, 'ceremonias')
  
  if (!fs.existsSync(ceremoniasDir)) {
    return []
  }
  
  const filenames = fs.readdirSync(ceremoniasDir)
  const ceremonias = filenames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const filePath = path.join(ceremoniasDir, name)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: name.replace(/\.md$/, ''),
        ...data,
        content
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return ceremonias
}
