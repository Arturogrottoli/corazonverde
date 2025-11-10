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
                src="https://i.ibb.co/S4FLLLQb/Whats-App-Image-2025-11-05-at-3-51-30-PM.jpg"
                alt="Corazón Verde Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
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
          <p className="text-lg sm:text-xl text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed text-center">
            <span className="text-[#d4a574] font-semibold italic">"Crianza natural, sabor real"</span>
          </p>
          <p className="text-base sm:text-lg text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed text-center">
            Producción artesanal de pollos de calidad premium con crianza en libertad, alimentación saludable y
            compromiso ambiental.
          </p>
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
              src="https://i.ibb.co/S4FLLLQb/Whats-App-Image-2025-11-05-at-3-51-30-PM.jpg"
              alt="Logo Corazón Verde"
              className="max-w-[200px] sm:max-w-[250px] md:max-w-[280px] w-full h-auto object-contain opacity-80"
            />
          </div>
        </div>
      </section>

      {/* RECETAS SECTION */}
      <section id="recetas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold font-serif text-[#6b7d4f] mb-4">Recetas Deliciosas</h3>
          <p className="text-base sm:text-lg text-[#6b6b6b] max-w-2xl mx-auto text-center">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-10">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <img
                src="https://i.ibb.co/S4FLLLQb/Whats-App-Image-2025-11-05-at-3-51-30-PM.jpg"
                alt="Corazón Verde Logo"
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain mb-4"
              />
              <h4 className="font-bold text-lg mb-2">Corazón Verde</h4>
              <p className="text-sm text-white/80 max-w-xs">Crianza natural, sabor real</p>
            </div>
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h4 className="font-bold text-lg mb-4">Navegación</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#inicio" className="hover:text-[#d4a574] transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#pilares" className="hover:text-[#d4a574] transition-colors">
                    Pilares
                  </a>
                </li>
                <li>
                  <a href="#recetas" className="hover:text-[#d4a574] transition-colors">
                    Recetas
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h4 className="font-bold text-lg mb-4">Contacto</h4>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-[#d4a574] transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg"
              >
                <MessageCircle size={18} />
                <span>WhatsApp: {whatsappNumber}</span>
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center space-y-2">
            <p className="text-sm text-white/80">© 2025 Corazón Verde. Todos los derechos reservados.</p>
            <p className="text-xs text-white/60">Producción artesanal de pollos con crianza natural y compromiso ambiental.</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 group"
        title="Contactar por WhatsApp"
        aria-label="Abrir WhatsApp"
      >
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-8 h-8 sm:w-10 sm:h-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}
