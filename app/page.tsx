"use client"
import { useState, useEffect } from "react"
import { ChevronRight, ChevronDown, Leaf, Sprout, Trees, Heart, Wheat, TreePine, Menu, X } from "lucide-react"

interface GalleryImage {
  id: string
  title: string
  src: string
  alt: string
}

const galleryImages: GalleryImage[] = [
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
    title: "Pollo al Horno",
    href: "https://www.paulinacocina.net/pollo-al-horno/",
    image: "/pollo-con-almendras-receta.jpg",
    description: "Clásico y siempre rico. Piel crocante, jugoso por dentro, con el sabor único de nuestra crianza artesanal.",
  },
  {
    title: "Pollo a la Sal",
    href: "https://www.paulinacocina.net/pollo-a-la-sal/",
    image: "/picante-de-pollo-receta.jpg",
    description: "Una técnica ancestral que conserva todos los jugos naturales del pollo. Simple, sano y sorprendente.",
  },
  {
    title: "Pollo al Limón",
    href: "https://www.paulinacocina.net/pollo-al-limon/",
    image: "/pechugas-de-pollo-rellenas-receta.jpg",
    description: "Con hierbas frescas y limón: liviano, aromático y perfecto para cualquier día de la semana.",
  },
]

const pilares = [
  {
    icon: Heart,
    title: "Bienestar Animal",
    description: "Crianza respetuosa y buenas prácticas de manejo en cada etapa.",
    detail:
      "Nuestros pollos crecen en un ambiente libre de estrés, con espacios amplios, aire puro y luz natural. Aplicamos buenas prácticas de manejo desde la llegada de los pollitos hasta el momento final, priorizando siempre el bienestar del animal por encima de la producción masiva.",
  },
  {
    icon: Wheat,
    title: "Alimentación Saludable",
    description: "Sin promotores de crecimiento ni antibióticos preventivos.",
    detail:
      "Alimentamos a nuestros pollos con granos naturales, libres de transgénicos y sin agregado de promotores de crecimiento ni antibióticos preventivos. El resultado es una carne más sana, con mejor sabor y textura: como la comida debe ser.",
  },
  {
    icon: TreePine,
    title: "Compromiso Ambiental",
    description: "Equilibrio entre producción, naturaleza y comunidad rural.",
    detail:
      "Trabajamos en armonía con el entorno: gestionamos los residuos de forma responsable, minimizamos el impacto en el suelo y el agua, y apostamos por un modelo de producción sustentable que cuide el ecosistema local y acompañe a la comunidad rural.",
  },
]

const testimonials = [
  {
    name: "María González",
    text: "El pollo de Corazón Verde tiene un sabor completamente diferente al del supermercado. Se nota que está criado con cuidado y amor.",
  },
  {
    name: "Carlos Rodríguez",
    text: "Hacemos el pedido todas las semanas. La calidad es constante y el trato siempre muy bueno. Lo recomiendo sin dudarlo.",
  },
  {
    name: "Laura Fernández",
    text: "Desde que lo probé no puedo volver al pollo común. La diferencia en el sabor y la textura es increíble.",
  },
]

const heroImages = [
  "/hero-bg-1.svg",
  "/hero-bg-2.svg",
  "/hero-bg-3.svg",
]

const LOGO_URL = "https://i.ibb.co/3Y1v7hhF/Whats-App-Image-2026-02-17-at-11-06-57-AM.jpg"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroIndex, setHeroIndex] = useState(0)
  const [openPilar, setOpenPilar] = useState<number | null>(null)
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
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ]

  const whatsappSVG = (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )

  return (
    <div className="min-h-screen bg-[#f8f6f1]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#f8f6f1]/95 backdrop-blur-sm border-b border-[#e8dcc8] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 hover:opacity-80 transition">
            <img
              src={LOGO_URL}
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
      <section id="inicio" className="relative h-[calc(100dvh+20px)] sm:h-[90vh] overflow-hidden">
        {heroImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === heroIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-[#1b5e20]/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-between px-4 sm:px-6 text-center" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div className="flex-1 flex flex-col items-center justify-center">
            <img
              src={LOGO_URL}
              alt="Corazón Verde Logo"
              className="object-contain rounded-full shadow-lg w-[180px] h-[180px] sm:w-[250px] sm:h-[250px]"
              style={{ marginBottom: 16 }}
            />
            <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
              <Leaf className="text-white/80 w-7 h-7 sm:w-10 sm:h-10 flex-shrink-0" />
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-serif text-white leading-tight">
                Corazón Verde
              </h2>
              <Leaf className="text-white/80 w-7 h-7 sm:w-10 sm:h-10 flex-shrink-0" />
            </div>
            <p className="text-lg sm:text-2xl text-white/90 font-semibold italic" style={{ marginBottom: 12 }}>
              &ldquo;Crianza natural, sabor real&rdquo;
            </p>
            <p className="text-sm sm:text-lg text-white/75 max-w-2xl leading-relaxed px-2">
              Producción artesanal de pollos de calidad premium con crianza respetuosa, buenas prácticas de manejo y
              compromiso ambiental.
            </p>
          </div>
          <div className="flex gap-3">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === heroIndex ? "bg-white scale-125" : "bg-white/40"}`}
                aria-label={`Imagen ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PILARES SECTION */}
      <section id="pilares" className="relative" style={{ paddingTop: 50, paddingBottom: 50 }}>
        <div className="absolute bottom-10 left-5 opacity-10 text-[#4caf50] hidden md:block">
          <Trees size={80} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center" style={{ marginBottom: 40 }}>
            <div className="flex items-center gap-2" style={{ marginBottom: 10 }}>
              <Sprout className="text-[#4caf50] w-6 h-6" />
              <h3 className="text-3xl sm:text-4xl font-bold font-serif text-[#2d7a3d] text-center">Nuestros Pilares</h3>
              <Sprout className="text-[#4caf50] w-6 h-6" />
            </div>
            <p className="text-[#4a5568] text-center max-w-xl">
              Los valores que guían nuestra producción día a día.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
            {pilares.map((pilar, i) => {
              const isOpen = openPilar === i
              return (
                <div
                  key={pilar.title}
                  className={`bg-white/70 backdrop-blur-sm rounded-xl shadow-sm transition-all duration-300 w-full sm:w-[280px] ${
                    i === 0 ? "sm:self-start" : i === 1 ? "sm:self-center" : "sm:self-end"
                  }`}
                >
                  <button
                    className="w-full p-8 text-center flex flex-col items-center gap-0 focus:outline-none"
                    onClick={() => setOpenPilar(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <div className="bg-[#2d7a3d]/10 rounded-full p-4 inline-flex mb-5">
                      <pilar.icon className="w-7 h-7 text-[#2d7a3d]" />
                    </div>
                    <h4 className="text-lg font-bold text-[#2d7a3d] mb-2">{pilar.title}</h4>
                    <p className="text-[#4a5568] text-sm sm:text-base mb-4">{pilar.description}</p>
                    <div className="flex items-center gap-1 text-[#4caf50] text-xs font-semibold">
                      {isOpen ? "Cerrar" : "Ver más"}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-8 pb-8 text-center border-t border-[#e8dcc8] pt-5">
                      <p className="text-[#4a5568] text-sm leading-relaxed">{pilar.detail}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* GALERIA SECTION */}
      <section id="galeria" className="bg-[#e8dcc8]/30" style={{ paddingTop: 50, paddingBottom: 50 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center" style={{ marginBottom: 40 }}>
            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-[#2d7a3d] text-center" style={{ marginBottom: 10 }}>Nuestra Producción</h3>
            <p className="text-base sm:text-lg text-[#4a5568] max-w-2xl text-center">
              Cada etapa de nuestro proceso de crianza natural, desde los pollitos hasta el producto final.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6" style={{ maxWidth: 900, margin: "0 auto" }}>
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="absolute bottom-3 left-3 text-white text-sm font-medium">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECETAS SECTION */}
      <section id="recetas" style={{ paddingTop: 50, paddingBottom: 50 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center" style={{ marginBottom: 40 }}>
            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-[#2d7a3d] text-center" style={{ marginBottom: 10 }}>Recetas Deliciosas</h3>
            <p className="text-base sm:text-lg text-[#4a5568] max-w-2xl text-center">
              Descubrí cómo preparar nuestros pollos con estas deliciosas recetas recomendadas.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-14" style={{ maxWidth: 900, margin: "0 auto" }}>
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

      {/* TESTIMONIOS SECTION */}
      <section id="testimonios" className="bg-[#e8dcc8]/30" style={{ paddingTop: 50, paddingBottom: 50 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center" style={{ marginBottom: 40 }}>
            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-[#2d7a3d] text-center" style={{ marginBottom: 10 }}>Lo que dicen nuestros clientes</h3>
            <p className="text-base sm:text-lg text-[#4a5568] max-w-2xl text-center">
              La experiencia de quienes ya eligieron Corazón Verde.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8" style={{ maxWidth: 900, margin: "0 auto" }}>
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4">
                <div className="text-[#4caf50] text-4xl leading-none font-serif select-none">&ldquo;</div>
                <p className="text-[#4a5568] text-sm leading-relaxed flex-1">{t.text}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-[#e8dcc8]">
                  <div className="w-9 h-9 rounded-full bg-[#2d7a3d]/10 flex items-center justify-center text-[#2d7a3d] font-bold text-sm flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <span className="text-[#2d7a3d] font-semibold text-sm">{t.name}</span>
                </div>
                {/* Audio: próximamente
                <audio controls src="/testimonios/audio.mp3" className="w-full mt-2" />
                */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO SECTION */}
      <section id="contacto" className="bg-[#2d7a3d]" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div style={{ maxWidth: 520, margin: "0 auto", padding: "0 16px", textAlign: "center" }}>
          <div className="flex flex-col items-center" style={{ marginBottom: 40 }}>
            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white text-center" style={{ marginBottom: 10 }}>Contactanos</h3>
            <p className="text-white/70 text-sm sm:text-base text-center">
              ¿Querés hacer un pedido o tenés alguna consulta? Escribinos directamente por WhatsApp y te respondemos a la brevedad.
            </p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-2xl px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="w-7 h-7 flex-shrink-0">{whatsappSVG}</span>
            Escribinos por WhatsApp
          </a>
          <p className="text-white/40 text-sm" style={{ marginTop: 20 }}>+54 {whatsappNumber}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1b5e20] text-white" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-white/50">&copy; {new Date().getFullYear()} Corazón Verde. Todos los derechos reservados.</p>
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
        <span className="w-7 h-7 sm:w-8 sm:h-8">{whatsappSVG}</span>
      </a>
    </div>
  )
}
