"use client"
import { MessageCircle, ChevronRight } from "lucide-react"

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

export default function Home() {
  const whatsappNumber = "2396618566"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf8f3] via-[#f5f1e8] to-[#faf8f3]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#e8dcc8] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#inicio" className="flex items-center gap-3 hover:opacity-80 transition">
              <img
                src="https://i.ibb.co/LXVGGQm/logo-corazon-verde.png"
                alt="Corazón Verde Logo"
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#6b7d4f] hidden sm:block">Corazón Verde</h1>
            </a>
          </div>
          <nav className="hidden sm:flex gap-6 md:gap-8 text-[#6b7d4f] font-medium text-sm md:text-base">
            <a href="#inicio" className="hover:text-[#d4a574] transition">
              Inicio
            </a>
            <a href="#pilares" className="hover:text-[#d4a574] transition">
              Pilares
            </a>
            <a href="#recetas" className="hover:text-[#d4a574] transition">
              Recetas
            </a>
            <a href="#contacto" className="hover:text-[#d4a574] transition">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#6b7d4f] leading-tight">
            Bienvenido a Corazón Verde
          </h2>
          <p className="text-lg sm:text-xl text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
            <span className="text-[#d4a574] font-semibold italic">"Crianza natural, sabor real"</span>
          </p>
          <p className="text-base sm:text-lg text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
            Producción artesanal de pollos de calidad premium con crianza en libertad, alimentación saludable y
            compromiso ambiental.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition font-semibold text-sm sm:text-base w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              Contactar por WhatsApp
            </a>
            <a
              href="#pilares"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 border-2 border-[#d4a574] text-[#6b7d4f] rounded-lg hover:bg-[#f5f1e8] transition font-semibold text-sm sm:text-base w-full sm:w-auto"
            >
              Ver Más <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* PILARES SECTION */}
      <section id="pilares" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-[#6b7d4f] mb-8">Nuestros Tres Pilares</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1 bg-[#d4a574] rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-bold text-[#6b7d4f] mb-2">Bienestar Animal</h4>
                  <p className="text-[#6b6b6b] text-sm sm:text-base">
                    Crianza en libertad con espacio, aire puro y cuidados naturales.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-[#d4a574] rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-bold text-[#6b7d4f] mb-2">Alimentación Saludable</h4>
                  <p className="text-[#6b6b6b] text-sm sm:text-base">
                    Sin promotores de crecimiento ni antibióticos preventivos.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-[#d4a574] rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-bold text-[#6b7d4f] mb-2">Compromiso Ambiental</h4>
                  <p className="text-[#6b6b6b] text-sm sm:text-base">
                    Equilibrio entre producción, naturaleza y comunidad rural.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="https://i.ibb.co/LXVGGQm/logo-corazon-verde.png"
              alt="Logo Corazón Verde"
              className="w-64 sm:w-80 h-auto opacity-80"
            />
          </div>
        </div>
      </section>

      {/* RECETAS SECTION */}
      <section id="recetas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold font-serif text-[#6b7d4f] mb-4">Recetas Deliciosas</h3>
          <p className="text-base sm:text-lg text-[#6b6b6b] max-w-2xl mx-auto">
            Descubre cómo preparar nuestros pollos con estas deliciosas recetas recomendadas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Receta 1 */}
          <a
            href="https://www.paulinacocina.net/pollo-con-almendras/40089"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative aspect-video bg-[#e8dcc8] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#d4a574] to-[#a68266] flex items-center justify-center">
                <span className="text-white font-serif text-lg sm:text-xl font-bold text-center px-4">
                  Pollo con Almendras
                </span>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold font-serif text-[#6b7d4f] mb-2">Pollo con Almendras</h4>
              <p className="text-[#6b6b6b] text-sm mb-4">
                Una receta elegante y sabrosa que realza el sabor natural de nuestro pollo.
              </p>
              <div className="flex items-center gap-2 text-[#d4a574] font-semibold text-sm">
                Ver Receta <ChevronRight size={16} />
              </div>
            </div>
          </a>

          {/* Receta 2 */}
          <a
            href="https://www.paulinacocina.net/picante-de-pollo/42446"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative aspect-video bg-[#e8dcc8] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#d4a574] to-[#a68266] flex items-center justify-center">
                <span className="text-white font-serif text-lg sm:text-xl font-bold text-center px-4">
                  Picante de Pollo
                </span>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold font-serif text-[#6b7d4f] mb-2">Picante de Pollo</h4>
              <p className="text-[#6b6b6b] text-sm mb-4">
                Un plato tradicional lleno de sabor y especias que harán agua la boca.
              </p>
              <div className="flex items-center gap-2 text-[#d4a574] font-semibold text-sm">
                Ver Receta <ChevronRight size={16} />
              </div>
            </div>
          </a>

          {/* Receta 3 */}
          <a
            href="https://www.paulinacocina.net/pechugas-rellenas/40561"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative aspect-video bg-[#e8dcc8] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#d4a574] to-[#a68266] flex items-center justify-center">
                <span className="text-white font-serif text-lg sm:text-xl font-bold text-center px-4">
                  Pechugas Rellenas
                </span>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold font-serif text-[#6b7d4f] mb-2">Pechugas Rellenas</h4>
              <p className="text-[#6b6b6b] text-sm mb-4">
                Pechugas jugosas rellenas de sorpresas. Perfectas para impresionar en la mesa.
              </p>
              <div className="flex items-center gap-2 text-[#d4a574] font-semibold text-sm">
                Ver Receta <ChevronRight size={16} />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* FOOTER - CONTACTO */}
      <footer id="contacto" className="bg-[#6b7d4f] text-white py-12 sm:py-16 mt-16 sm:mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
              <img
                src="https://i.ibb.co/LXVGGQm/logo-corazon-verde.png"
                alt="Corazón Verde Logo"
                className="w-12 h-12 object-contain opacity-80"
              />
              <div>
                <h4 className="font-bold text-lg">Corazón Verde</h4>
                <p className="text-sm text-white/70">Crianza natural, sabor real</p>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold mb-3">Enlaces</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#inicio" className="hover:text-[#d4a574] transition">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#pilares" className="hover:text-[#d4a574] transition">
                    Pilares
                  </a>
                </li>
                <li>
                  <a href="#recetas" className="hover:text-[#d4a574] transition">
                    Recetas
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold mb-3">Contacto</h4>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-[#d4a574] transition"
              >
                <MessageCircle size={18} />
                WhatsApp: {whatsappNumber}
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>© 2025 Corazón Verde. Todos los derechos reservados.</p>
            <p>Producción artesanal de pollos con crianza natural y compromiso ambiental.</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        title="Contactar por WhatsApp"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle size={32} className="p-2" />
      </a>
    </div>
  )
}
