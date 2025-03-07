import { motion } from "framer-motion";
import { Enlaces } from "./Enlaces"; // Importamos los enlaces
import { Frase } from "./Frase"; // Importamos el nuevo componente Frase

export function Home() {
  return (
    <div className="relative flex flex-col min-h-screen font-serif">
      {/* Imagen de Fondo con límite de altura */}
      <div className="relative w-full custom-xs:max-h-[1000px] overflow-hidden">
        <img 
          src="/images/JamesSharples2.jpg"
          alt="James Sharples" 
          className="w-full object-cover object-top"
        />
      </div>

      {/* Contenedor del Logo, Enlaces y Frase */}
      <div 
        className="absolute flex flex-col 
                   top-20 right-2 ml-auto custom-lg:top-20 custom-lg:right-5 xl:right-20 xl:top-40 gap-10
                   custom-xl:right-10 custom-xl:top-30 xs:top-20 xs:right-4 custom-xs:top-30"
      >
        {/* Animación del Logo */}
        <motion.img 
          src="/images/LogoJames.png"
          alt="James Sharples Studio"
          className="w-[200px] custom-md:w-[260px] custom-xl:w-[450px] xs:w-[200px] custom-xs:w-[700px] 
                     xl:w-[800px] custom-lg:w-[240px] drop-shadow-xl ml-auto"
          style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.5))" }} 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Contenedor de Enlaces y Frase */}
        <div className="flex flex-row">
          {/* Animación de los Enlaces */}
          <motion.div 
            className="absolute right-24 text-end xs:justify-end xs:text-xl xs:top-10 xs:w-[170px] xs:right-1
                              custom-md:right-30 custom-md:text-2xl custom-md:w-[200px]
                              custom-lg:right-1 custom-lg:w-[200px] custom-lg:text-2xl
                              custom-xl:top-20 custom-xl:flex-row custom-xl:text-sm custom-xl:w-[500px]
                              custom-xs:top-32 custom-xs:text-lg custom-xs:w-[800px] custom-xs:flex-row
                              custom-xxl:text-xl customxxl:w-[800px] customxxl:top-40 custom-xxl:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          >
            <Enlaces className="absolute font-semibold text-end xs:justify-end xs:text-xl xs:top-10 xs:w-[170px] xs:right-1
                              custom-md:right-30 custom-md:text-2xl custom-md:w-[200px]
                              custom-lg:right-1 custom-lg:w-[200px] custom-lg:text-2xl
                              custom-xl:top-20 custom-xl:flex-row custom-xl:text-sm custom-xl:w-[500px]
                              custom-xs:top-32 custom-xs:text-lg custom-xs:w-[800px] custom-xs:flex-row
                              custom-xxl:text-xl customxxl:w-[800px] customxxl:top-40 custom-xxl:flex-row"/>
          </motion.div>
        </div>

        {/* Animación de la Frase */}
        <motion.div 
          className="mt-6 text-center text-white text-lg italic font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        >
          <div className="absolute top-80 text-2xl w-[300px] right-6 
             bg-white/0 rounded-lg p-4 shadow-lg backdrop-blur-md">
  <Frase textoClave="frase_bajo_enlaces" />
</div>

          
        </motion.div>
      </div>
    </div>
  );
}
