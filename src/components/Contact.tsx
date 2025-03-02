import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const { t } = useTranslation(); // Hook para traducción
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false); // Estado para mostrar el mensaje de éxito

  // Manejar cambios en el formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Simular envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true); // Muestra el mensaje de éxito
    setForm({ name: "", email: "", message: "" }); // Limpia el formulario
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-16 px-6 bg-white">
      {/* Contenedor del título y descripción */}
      <div className="max-w-4xl text-center">
        {/* Título */}
        <motion.h2
          className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("contact_title")}
        </motion.h2>

        {/* Descripción */}
        <motion.p
          className="text-lg sm:text-xl text-gray-700 leading-relaxed text-justify"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {t("contact_description")}
        </motion.p>
      </div>

      {/* Formulario de Contacto */}
      <motion.form
        onSubmit={handleSubmit}
        className="mt-10 max-w-2xl w-full bg-white p-8 rounded-lg shadow-xl grid grid-cols-1 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Nombre */}
        <div>
          <label className="block text-gray-700">{t("contact_name")}</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        {/* Correo */}
        <div>
          <label className="block text-gray-700">{t("contact_email")}</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        {/* Mensaje */}
        <div>
          <label className="block text-gray-700">{t("contact_message")}</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        {/* Botón de envío */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-all"
          >
            {t("contact_submit")}
          </button>
        </div>

        {/* Mensaje de éxito */}
        {submitted && (
          <motion.div
            className="mt-4 p-4 bg-green-100 text-green-700 rounded-md text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {t("contact_success")}
          </motion.div>
        )}
      </motion.form>
    </section>
  );
}
