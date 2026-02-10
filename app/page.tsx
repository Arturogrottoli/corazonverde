"use client"
import { useState, useEffect } from "react"
import { ChevronRight, Leaf, Sprout, Trees, Heart, Wheat, TreePine, Menu, X } from "lucide-react"

interface GalleryImage {
  id: string
  title: string
  src: string
  alt: string
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Niña de Campo con Gallinas",
    src: "https://i.ibb.co/qL6ZVwG/IMG-20220520-160726209.jpg",
    alt: "Niña de campo trabajando con gallinas",
  },
  {
    id: "2",
    title: "Gallinas en la Granja",
    src: "https://i.ibb.co/xqtcW3mH/IMG-20220520-160726209-BURST002.jpg",
    alt: "Gallinas en el campo",
  },
  {
    id: "3",
    title: "Pollitos en Criadero",
    src: "https://i.ibb.co/FqJ0bf5x/IMG-20220603-195305585.jpg",
    alt: "Pollitos en criadero",
  },
  {
    id: "4",
    title: "Pollitos Bebés",
    src: "https://i.ibb.co/WW0yXbVR/IMG-20220707-200529466.jpg",
    alt: "Pollitos bebés recién nacidos",
  },
  {
    id: "5",
    title: "Pollitos bajo Luz",
    src: "https://i.ibb.co/Wv3fMPgS/IMG-20220707-200607652-BURST000-COVER.jpg",
    alt: "Pollitos bebés bajo luz",
  },
  {
    id: "6",
    title: "Pollo Desarrollado",
    src: "https://i.ibb.co/xSMwm2F6/IMG-20221109-170448649.jpg",
    alt: "Pollo un poco más grande",
  },
  {
    id: "7",
    title: "Pollo Listo para Cocinar",
    src: "https://i.ibb.co/N2m59gC9/IMG-20230114-193401172.jpg",
    alt: "Pollo pelado y listo para cocinar",
  },
]

const recipes = [
  {
    title: "Pollo con Almendras",
    href: "https://www.paulinacocina.net/pollo-con-almendras/40089",
    image: "/pollo-con-almendras-receta.jpg",
    description: "Una receta elegante y sabrosa que realza el sabor natural de nuestro pollo.",
  },
  {
    title: "Picante de Pollo",
    href: "https://www.paulinacocina.net/picante-de-pollo/42446",
    image: "/picante-de-pollo-receta.jpg",
    description: "Un plato tradicional lleno de sabor y especias que harán agua la boca.",
  },
  {
    title: "Pechugas Rellenas",
    href: "https://www.paulinacocina.net/pechugas-rellenas/40561",
    image: "/pechugas-de-pollo-rellenas-receta.jpg",
    description: "Pechugas jugosas rellenas de sorpresas. Perfectas para impresionar en la mesa.",
  },
]

const pilares = [
  {
    icon: Heart,
    title: "Bienestar Animal",
    description: "Crianza en libertad con espacio, aire puro y cuidados naturales.",
  },
  {
    icon: Wheat,
    title: "Alimentación Saludable",
    description: "Sin promotores de crecimiento ni antibióticos preventivos.",
  },
  {
    icon: TreePine,
    title: "Compromiso Ambiental",
    description: "Equilibrio entre producción, naturaleza y comunidad rural.",
  },
]

const heroImages = [
  "/hero-bg-1.svg",
  "/hero-bg-2.svg",
  "/hero-bg-3.svg",
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroIndex, setHeroIndex] = useState(0)
  const whatsappNumber = "2396618566"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const navLinks = [
    { href: "#pilares", label: "Pilares" },
    { href: "#galeria", label: "Galería" },
    { href: "#recetas", label: "Recetas" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <div className="min-h-screen bg-[#f8f6f1]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#f8f6f1]/95 backdrop-blur-sm border-b border-[#e8dcc8] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 hover:opacity-80 transition">
            <img
              src="https://i.ibb.co/S4FLLLQb/Whats-App-Image-2025-11-05-at-3-51-30-PM.jpg"
              alt="Corazón Verde Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-full"
            />
            <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#2d7a3d] hidden sm:block">Corazón Verde</h1>
          </a>
          <nav className="hidden sm:flex gap-6 md:gap-8 text-[#2d7a3d] font-medium text-sm md:text-base">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-[#4caf50] transition">
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className="sm:hidden text-[#2d7a3d] p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <nav className="sm:hidden border-t border-[#e8dcc8] bg-[#f8f6f1] px-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-[#2d7a3d] font-medium hover:text-[#4caf50] transition border-b border-[#e8dcc8] last:border-b-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative h-[70vh] sm:h-[80vh] overflow-hidden">
        {heroImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === heroIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-[#1b5e20]/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="text-white/80 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif text-white leading-tight">
              Corazón Verde
            </h2>
            <Leaf className="text-white/80 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
          </div>
          <p className="text-xl sm:text-2xl text-white/90 font-semibold italic mb-4">
            &ldquo;Crianza natural, sabor real&rdquo;
          </p>
          <p className="text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
            Producción artesanal de pollos de calidad premium con crianza en libertad, alimentación saludable y
            compromiso ambiental.
          </p>
          <div className="flex gap-2 mt-8">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === heroIndex ? "bg-white scale-110" : "bg-white/40"}`}
                aria-label={`Imagen ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PILARES SECTION */}
      <section id="pilares" className="py-24 sm:py-32 relative">
        <div className="absolute bottom-10 left-5 opacity-10 text-[#4caf50] hidden md:block">
          <Trees size={80} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center mb-16 sm:mb-20">
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="text-[#4caf50] w-6 h-6" />
              <h3 className="text-3xl sm:text-4xl font-bold font-serif text-[#2d7a3d] text-center">Nuestros Pilares</h3>
              <Sprout className="text-[#4caf50] w-6 h-6" />
            </div>
            <p className="text-[#4a5568] text-center max-w-xl">
              Los valores que guían nuestra producción día a día.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
            {pilares.map((pilar, i) => (
              <div
                key={pilar.title}
                className={`bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-md transition text-center w-full sm:w-[280px] ${
                  i === 0 ? "sm:self-start" : i === 1 ? "sm:self-center" : "sm:self-end"
                }`}
              >
                <div className="bg-[#2d7a3d]/10 rounded-full p-4 inline-flex mb-5">
                  <pilar.icon className="w-7 h-7 text-[#2d7a3d]" />
                </div>
                <h4 className="text-lg font-bold text-[#2d7a3d] mb-2">{pilar.title}</h4>
                <p className="text-[#4a5568] text-sm sm:text-base">{pilar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA SECTION */}
      <section id="galeria" className="bg-[#e8dcc8]/30 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-14 sm:mb-20">
            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-[#2d7a3d] mb-4 text-center">Nuestra Producción</h3>
            <p className="text-base sm:text-lg text-[#4a5568] max-w-2xl text-center">
              Cada etapa de nuestro proceso de crianza natural, desde los pollitos hasta el producto final.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 sm:grid-rows-2 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[240px]">
            {/* Imagen grande - 2 cols, 2 rows */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 col-span-2 row-span-2">
              <img src={galleryImages[0].src} alt={galleryImages[0].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-3 left-3 text-white text-sm font-medium">{galleryImages[0].title}</p>
              </div>
            </div>
            {/* 2 imágenes a la derecha de la grande */}
            {galleryImages.slice(1, 3).map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="absolute bottom-3 left-3 text-white text-sm font-medium">{image.title}</p>
                </div>
              </div>
            ))}
            {/* Fila inferior: 4 imágenes iguales */}
            {galleryImages.slice(3).map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="absolute bottom-3 left-3 text-white text-sm font-medium">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECETAS SECTION */}
      <section id="recetas" className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-14 sm:mb-20">
            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-[#2d7a3d] mb-4 text-center">Recetas Deliciosas</h3>
            <p className="text-base sm:text-lg text-[#4a5568] max-w-2xl text-center">
              Descubrí cómo preparar nuestros pollos con estas deliciosas recetas recomendadas.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">
            {recipes.map((recipe) => (
              <a
                key={recipe.title}
                href={recipe.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold font-serif text-[#2d7a3d] mb-2">{recipe.title}</h4>
                  <p className="text-[#4a5568] text-sm mb-4">{recipe.description}</p>
                  <div className="flex items-center gap-2 text-[#4caf50] font-semibold text-sm group-hover:gap-3 transition-all">
                    Ver Receta <ChevronRight size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER - CONTACTO */}
      <footer id="contacto" className="bg-[#2d7a3d] text-white py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="font-serif font-bold text-lg">Corazón Verde</p>
          <p className="text-sm text-white/70">Crianza natural, sabor real.</p>
          <p className="text-xs text-white/50 pt-2">&copy; {new Date().getFullYear()} Corazón Verde. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16"
        title="Contactar por WhatsApp"
        aria-label="Abrir WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 sm:w-8 sm:h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}
