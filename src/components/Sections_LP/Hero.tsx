import { FaGlobe, FaStar } from "react-icons/fa";
import { Button } from "../ui/button";
import Image from "next/image";


export function Hero() {
    return (
        <section>
            <div className="flex justify-center flex-col items-center mt-40">
                <h1 className="text-center font-semibold text-2xl lg:text-4xl text-white">
                <div className="flex gap-2 justify-center items-center mb-2 animate-bounce">
                    <FaStar className="text-yellow-500" size={25} />
                    <FaStar className="text-yellow-500" size={25} />
                    <FaStar className="text-yellow-500" size={25} />
                    <FaStar className="text-yellow-500" size={25} />
                    <FaStar className="text-yellow-500" size={25} />
                </div>
                Crie formulários profissionais em minutos! 🚀 <br /> Simples, rápido e eficiente. Experimente agora!
                </h1>
                <p className="text-gray-400 text-sm lg:text-base text-center max-w-[900px] mt-6">
                Com nossa ferramenta de construção de formulários, você pode criar, personalizar e compartilhar formulários online com facilidade. Aproveite recursos avançados como drag-and-drop, integração com plataformas populares e designs responsivos, tudo em uma interface intuitiva.
                </p>
                <div className="mt-6">
                    <a href="/login"><Button>Comece agora <FaGlobe /></Button></a>
                </div>
                <div className="mt-10">
                    <Image src="/ImgHero.svg" width={800} height={400} priority alt="" className="animate-float" />
                </div>
            </div>
        </section>
    )
}