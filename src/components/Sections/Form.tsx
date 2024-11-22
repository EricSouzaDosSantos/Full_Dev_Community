import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function Form() {
    return (
        <form action="">
            <div className="flex flex-col">
            <Label>Email</Label>
            <Input placeholder="Digite seu email" />
            </div>
            <div className="flex flex-col">
                <Label>Senha</Label>
                <Input placeholder="Digite sua senha" />
            </div>
        </form>
    )
}