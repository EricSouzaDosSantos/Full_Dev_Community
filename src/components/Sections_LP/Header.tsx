import Image from "next/image";
import { Button } from "../ui/button";

export function Header() {
    return (
        <header>
            <div className="bg-[#B22D00] p-2">
                <p className="text-white text-center animate-pulse">Construa o seu formlário agora com o <span className="font-bold">Grupo 11</span></p>
            </div>
            <nav className="max-w-[1800px] mx-auto mt-6 flex justify-between">
                <Image src="/logoWrite.svg" width={150} height={300} alt="" />
                <a href="/register">
                    <Button>Inscrever-se</Button>
                </a>
            </nav>
        </header>
    )
}