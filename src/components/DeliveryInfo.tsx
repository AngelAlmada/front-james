import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function DeliveryInfo() {
  const { t } = useTranslation(); // Hook para traducción

  return (
    <section className="py-16 px-6 bg-white">
      {/* Encabezado */}
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("delivery_title")}
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {t("delivery_description")}
        </motion.p>
      </div>

      {/* Sección de información */}
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Tiempos de Entrega */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-3">{t("delivery_times_title")}</h3>
          <p>{t("delivery_times_text")}</p>
        </motion.div>

        {/* Métodos de Envío */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-3">{t("delivery_methods_title")}</h3>
          <p>{t("delivery_methods_text")}</p>
        </motion.div>

        {/* Costos de Envío */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <h3 className="text-xl font-semibold mb-3">{t("delivery_costs_title")}</h3>
          <p>{t("delivery_costs_text")}</p>
        </motion.div>

        {/* Empaque y Protección */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <h3 className="text-xl font-semibold mb-3">{t("delivery_packing_title")}</h3>
          <p>{t("delivery_packing_text")}</p>
        </motion.div>
      </div>

      {/* Preguntas Frecuentes */}
      <motion.div
        className="max-w-5xl mx-auto mt-12 bg-gray-200 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <h3 className="text-xl font-semibold mb-3">{t("faq_title")}</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>{t("faq_question_1")}</li>
          <li>{t("faq_question_2")}</li>
          <li>{t("faq_question_3")}</li>
        </ul>
      </motion.div>
    </section>
  );
}
