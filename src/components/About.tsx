import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function About() {
  const { t } = useTranslation(); // Hook para traducción

  return (
    <section className="py-16 px-6 bg-white">
      {/* Contenedor del Título y la Descripción */}
      <div className="max-w-5xl mx-auto md:flex md:items-start md:gap-10">
        {/* Título alineado a la izquierda */}
        <motion.h2
          className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-6 md:mb-0 md:w-1/3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("about_title")}
        </motion.h2>

        {/* Descripción justificada */}
        <motion.div
          className="text-justify text-lg sm:text-xl text-gray-700 leading-relaxed md:w-2/3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p>{t("about_text")}</p>
        </motion.div>
      </div>

      {/* Contenedor de Imagen + Mensaje */}
      <div className="flex flex-col items-center max-w-5xl mx-auto mt-10">
        <div className="relative w-full max-w-4xl">
          {/* Imagen principal */}
          <motion.img
            src="images/James.png"
            alt="James Sharples"
            className="w-full md:max-h-[450px] md:w-auto rounded-lg shadow-lg object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Mensaje superpuesto */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-2xl w-full md:w-[55%] md:absolute md:bottom-8 md:-left-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >

            <h3 className="text-2xl font-semibold mb-4">{t("about_message_title")}</h3>
            <p className="text-gray-700 leading-relaxed">{t("about_message_text")}</p>
            <p className="mt-4 font-semibold text-gray-900">{t("about_message_highlight")}</p>

            {/* Firma con imagen pequeña */}
            <div className="mt-6 flex items-center gap-4">
              <img
                src="images/James.png"
                alt="James Sharples"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold text-gray-900">JAMES SHARPLES</p>
                <p className="text-sm text-gray-600">{t("about_message_signature")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
