import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function Gallery() {
  const { t } = useTranslation(); // Hook para traducción

  // Lista de imágenes de la galería
  const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
  ];

  return (
    <section className="py-16 px-6 bg-white">
      {/* Contenedor del título y descripción */}
      <div className="max-w-5xl mx-auto md:flex md:items-start md:gap-10">
        {/* Título alineado a la izquierda */}
        <motion.h2
          className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-6 md:mb-0 md:w-1/3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("gallery_title")}
        </motion.h2>

        {/* Descripción justificada */}
        <motion.div
          className="text-justify text-lg sm:text-xl text-gray-700 leading-relaxed md:w-2/3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p>{t("gallery_description")}</p>
        </motion.div>
      </div>

      {/* Galería de imágenes */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image}
              alt={`Artwork ${index + 1}`}
              className="w-full h-80 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
