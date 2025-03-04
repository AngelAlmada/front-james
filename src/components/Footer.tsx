import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail } from "lucide-react"; // Importamos iconos
import { Link } from "react-router-dom";

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
            <a href="tel:+526682345785" className="hover:underline">+52 668 234 5785</a>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Mail className="w-5 h-5 text-gray-600" />
            <a href="mailto:hola@james-sharples.org" className="hover:underline">hola@james-sharples.org</a>
          </p>
        </div>

        {/* Sección Explora nuestro sitio */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{t("footer_explore")}</h3>
          <hr className="w-12 border-gray-500 mb-4" />
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">{t("footer_home")}</Link></li>
            <li><Link to="/about" className="hover:underline">{t("footer_about")}</Link></li>
            <li><Link to="/gallery" className="hover:underline">{t("footer_gallery")}</Link></li>
            <li><Link to="/events" className="hover:underline">{t("footer_events")}</Link></li>
            <li><Link to="/news" className="hover:underline">{t("footer_news")}</Link></li>
          </ul>
        </div>

        {/* Sección Políticas del sitio */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{t("footer_policies")}</h3>
          <hr className="w-12 border-gray-500 mb-4" />
          <ul className="space-y-2">
            <li><Link to="/foundation" className="hover:underline">{t("footer_foundation")}</Link></li>
            <li><Link to="/delivery-info" className="hover:underline">{t("footer_shipping")}</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">{t("footer_privacy")}</Link></li>
            <li><Link to="/terms" className="hover:underline">{t("footer_terms")}</Link></li>
            <li><Link to="/contact" className="hover:underline">{t("footer_contact_link")}</Link></li>
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
