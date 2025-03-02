import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Iconos de menú
import { useTranslation } from "react-i18next";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <nav className="bg-white font-roboto text-xl shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 z-50">
          <img
            src="/src/assets/logo.png"
            alt="logo"
            className="max-w-[120px] h-auto cursor-pointer"
            style={{ filter: "invert(1)" }} // Para que sea visible en fondo blanco
          />
        </Link>

        {/* Botón de menú en móviles (SE ESCONDE SI EL MENÚ ESTÁ ABIERTO) */}
        {!menuOpen && (
          <button
            className="sm:hidden text-black z-50 relative"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={30} />
          </button>
        )}

        {/* Menú de navegación en pantallas grandes */}
        <div className="hidden sm:flex items-center gap-6">
          <Link to="/" className="hover:text-gray-600 transition-all">
            {t("home")}
          </Link>
          <Link to="/gallery" className="hover:text-gray-600 transition-all">
            {t("gallery")}
          </Link>
          <Link to="/about" className="hover:text-gray-600 transition-all">
            {t("about")}
          </Link>
          <Link to="/contact" className="hover:text-gray-600 transition-all">
            {t("contact")}
          </Link>

          {/* Selector de idioma */}
          <select
            value={selectedLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-gray-200 text-black px-3 py-1 rounded-md cursor-pointer focus:outline-none"
          >
            <option value="es">🇪🇸 Español</option>
            <option value="en">🇬🇧 English</option>
            <option value="fr">🇫🇷 Français</option>
          </select>
        </div>

      </div>

      {/* Menú hamburguesa en móviles */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white/50 backdrop-blur-md flex flex-col items-center justify-center gap-6 transition-transform duration-300 ease-in-out sm:hidden">
          {/* Botón de cierre */}
          <button
            className="absolute top-4 right-6 text-black"
            onClick={() => setMenuOpen(false)}
          >
            <X size={30} />
          </button>

          <Link
            to="/"
            className="text-gray-900 text-2xl hover:text-gray-600 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            {t("home")}
          </Link>
          <Link
            to="/gallery"
            className="text-gray-900 text-2xl hover:text-gray-600 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            {t("gallery")}
          </Link>
          <Link
            to="/about"
            className="text-gray-900 text-2xl hover:text-gray-600 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            {t("about")}
          </Link>
          <Link
            to="/contact"
            className="text-gray-900 text-2xl hover:text-gray-600 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            {t("contact")}
          </Link>

          {/* Selector de idioma en móviles */}
          <select
            value={selectedLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-gray-200 text-black px-3 py-2 rounded-md cursor-pointer focus:outline-none text-xl"
          >
            <option value="es">🇪🇸 Español</option>
            <option value="en">🇬🇧 English</option>
            <option value="fr">🇫🇷 Français</option>
          </select>
        </div>
      )}

    </nav>
  );
}
