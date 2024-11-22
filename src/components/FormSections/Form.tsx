import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function Form() {
    return (
        <form action="" className="mt-4 lg:mt-8 flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col">
            <Label className="mb-2 lg:mb-0">Email</Label>
            <Input type="email" placeholder="Digite seu email" />
            </div>
            <div className="flex flex-col">
                <Label className="mb-2 lg:mb-0">Senha</Label>
                <Input type="password" className="" placeholder="Digite sua senha" />
            </div>
            <div className="flex gap-12 lg:gap-48 mb-4">
                <a href="/register" className="text-gray-400 text-sm">Lembrar de mim</a>
                <a href="/register" className="text-gray-400 text-sm duration-300 transition-all hover:text-orange-700">Esqueci a senha</a>
            </div>
            <div className="flex justify-center items-center flex-col">
                <Button variant="fulldev">Entrar</Button>
                <a href="/register" className="text-gray-500 mt-4">Não tem uma conta? <span className="text-black font-semibold duration-300 transition-all hover:text-orange-700">Crie agora uma</span></a>
            </div>
        </form>
    )
}