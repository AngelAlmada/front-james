import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ Importar traducciones

interface EnlacesProps {
  className?: string;
}

export function Enlaces({ className = "" }: EnlacesProps) {
  const { t } = useTranslation(); // ✅ Usar `t` para traducir los textos

  return (
    <div className={`flex flex-col gap-2 xl:gap-6 custom-xs:gap-4 mt-5 font-lora ${className}`}>
      <Link
        to="/trayectoria"
        className="relative inline-block text-black transition-transform duration-300 ease-in-out 
          hover:translate-y-[-2px]"
      >
        {t("trayectoria")}
      </Link>

      <Link
        to="/catalogo"
        className="relative inline-block text-black transition-transform duration-300 ease-in-out 
          hover:translate-y-[-2px]"
      >
        {t("catalogo")}
      </Link>

      <Link
        to="/noticias"
        className="relative inline-block text-black transition-transform duration-300 ease-in-out 
          hover:translate-y-[-2px]"
      >
        {t("noticias")}
      </Link>

      <Link
        to="/comunidad"
        className="relative inline-block text-black transition-transform duration-300 ease-in-out 
          hover:translate-y-[-2px]"
      >
        {t("comunidad")}
      </Link>
    </div>
  );
}
