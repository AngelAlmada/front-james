import { useTranslation } from "react-i18next";

interface FraseProps {
  textoClave: string;
  className?: string;
}

export function Frase({ textoClave, className = "" }: FraseProps) {
  const { t } = useTranslation();
  const texto = t(textoClave);

  return (
    <div className={`text-stone-300 custom-llg:text-black italic font-light ${className}`}>
      <span className="text-white">{texto.charAt(0)}</span>
      {texto.slice(1, -1)}
      <span className="text-white">{texto.charAt(texto.length - 1)}</span>
    </div>
  );
}
