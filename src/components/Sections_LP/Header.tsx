import Image from "next/image";
import { Button } from "../ui/button";

export function Header() {
    return (
        <header>
            <div className="bg-[#B22D00] p-2">
                <p className="text-white text-center animate-pulse">Construa o seu formulário agora com o <span className="font-bold">Grupo 11</span></p>
            </div>
            <nav className="max-w-[1800px] mx-auto mt-6 flex justify-between">
                <Image src="/logoHeader.png" width={150} height={300} alt="" data-aos="fade-down" />
                <a href="/register" data-aos="fade-down" data-aos-delay="200">
                    <Button>Inscrever-se</Button>
                </a>
            </nav>
        </header>
    )
}