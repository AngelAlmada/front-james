import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react"; // Importamos iconos

export function Home() {
  const images = [
    "/images/background1.png",
    "/images/background2.png",
    "/images/background3.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sección Principal con ajuste de altura */}
      <div
        className="flex flex-col items-center justify-center h-[70vh] sm:h-[80vh] lg:h-screen text-white transition-all duration-1000 ease-in-out bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover", // La imagen cubre la pantalla
        }}
      >
        {/* Capa de opacidad negra */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Contenido Principal */}
        <main className="relative z-10 text-center p-5">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl font-playfair"
            initial={{ opacity: 0, y: 50 }} // Inicia invisible y abajo
            animate={{ opacity: 1, y: 0 }} // Aparece con desplazamiento
            transition={{ duration: 1, ease: "easeOut" }} // Animación suave
          >
            James Sharples
          </motion.h1>
        </main>

        {/* Redes Sociales */}
        <div className="relative z-10 mt-6 flex gap-6">
          {[
            { Icon: Facebook, link: "https://facebook.com", color: "hover:text-blue-500" },
            { Icon: Instagram, link: "https://instagram.com", color: "hover:text-pink-500" },
            { Icon: Twitter, link: "https://twitter.com", color: "hover:text-blue-400" },
          ].map(({ Icon, link, color }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition ${color}`}
              whileHover={{ scale: 1.2 }} // Crece al pasar el mouse
              whileTap={{ scale: 0.9 }} // Se reduce ligeramente al hacer clic
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }} // Aparecen secuencialmente
            >
              <Icon size={25} />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Sección de Galería */}
      <section className="py-10 px-5 bg-gray-100">
        <h2 className="text-3xl font-playfair text-center mb-8">Galería de Arte</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Galería ${index + 1}`} className="w-full h-80 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
          ))}
        </div>
      </section>

      {/* Sección "Sobre mí" */}
      <section className="py-10 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Imagen */}
          <img src="/images/background1.png" alt="Sobre mí" className="rounded-lg shadow-sm" />

          {/* Contenedor de texto centrado */}
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-black font-playfair text-5xl mb-4">Sobre mí</h2>
            <p className="text-xl">
              Nací en Philadelphia, Pennsylvania. Desde que tengo memoria, he sentido una conexión profunda con la tierra y con la vida que me rodea.
              La pintura y la cerámica se convirtieron en mis lenguajes, las formas en las que puedo expresar lo que las palabras no logran capturar. A los 18 años, gané mi primer premio en grabado en serigrafía en Bellas Artes.
              Fue un momento decisivo, la confirmación de que el arte había elegido guiarme y no al revés. <br /><br />
              Creo profundamente que el arte debe ocupar un lugar en la vida de las personas. Es una puerta para expresar emociones, pensamientos, y conectar con algo más grande que nosotros mismos.
            </p>
          </div>
        </div>
      </section>

      {/* Footer
      <footer className="bg-slate-400 text-white text-center p-6 mt-10">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#" className="hover:underline">Aviso de Privacidad</a>
          <a href="#" className="hover:underline">Términos y Condiciones</a>
          <a href="#" className="hover:underline">Propiedad Intelectual</a>
        </div>
        <p className="text-xs mt-4">© 2025 James Sharples. Todos los derechos reservados.</p>
      </footer> */}
    </div>
  );
}
