import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail } from "lucide-react"; // Importamos iconos

export function Footer() {
  const { t } = useTranslation(); // Hook para traducción

  return (
    <footer className="bg-gray-100 text-gray-900 text-left py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Sección de Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{t("footer_contact")}</h3>
          <hr className="w-12 border-gray-500 mb-4" />
          <p className="flex items-start gap-2">
            <MapPin className="w-5 h-5 text-gray-600 mt-1" />
            Calle Arroyo 741, Almar Residencial, Los Mochis, Sinaloa.
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Phone className="w-5 h-5 text-gray-600" />
            +52 668 234 5785
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Mail className="w-5 h-5 text-gray-600" />
            hola@james-sharples.org
          </p>
        </div>

        {/* Sección Explora nuestro sitio */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{t("footer_explore")}</h3>
          <hr className="w-12 border-gray-500 mb-4" />
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">{t("footer_home")}</a></li>
            <li><a href="/about" className="hover:underline">{t("footer_about")}</a></li>
            <li><a href="/gallery" className="hover:underline">{t("footer_gallery")}</a></li>
            <li><a href="/events" className="hover:underline">{t("footer_events")}</a></li>
            <li><a href="/news" className="hover:underline">{t("footer_news")}</a></li>
          </ul>
        </div>

        {/* Sección Políticas del sitio */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{t("footer_policies")}</h3>
          <hr className="w-12 border-gray-500 mb-4" />
          <ul className="space-y-2">
            <li><a href="/foundation" className="hover:underline">{t("footer_foundation")}</a></li>
            <li><a href="/shipping-info" className="hover:underline">{t("footer_shipping")}</a></li>
            <li><a href="/privacy-policy" className="hover:underline">{t("footer_privacy")}</a></li>
            <li><a href="/terms" className="hover:underline">{t("footer_terms")}</a></li>
            <li><a href="/contact" className="hover:underline">{t("footer_contact_link")}</a></li>
          </ul>
        </div>
      </div>

      {/* Derechos reservados */}
      <p className="text-center text-sm text-gray-600 mt-10">
        © 2025 James Sharples. {t("footer_rights")}
      </p>
    </footer>
  );
}
