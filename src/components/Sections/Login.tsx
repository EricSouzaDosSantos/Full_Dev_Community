import Image from "next/image";
import { Form } from "./Form";
import { Button } from "../ui/button";
import { FaFacebook, FaGoogle } from 'react-icons/fa'

export function Login() {
    return (
        <section className="grid lg:grid-cols-2">
            <div className="bg-[#B22B00] w-full lg:h-screen hidden lg:flex lg:justify-center lg:items-center">
                <div className="mt-20 mb-20 lg:mb-0 lg:mt-32 flex justify-center">
                    <Image src="/LogoWhite.svg" width={300} height={300} alt="" className="" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-24 lg:mt-0">
                <h1 className="text-center text-2xl lg:text-4xl font-bold">Bem vindo de volta</h1>
                <p className="text-gray-500 text-center lg:text-xl mt-2">Entre para começar a criar seus formulários.</p>
                <div>
                <Form />
                </div>
                <p className="text-gray-300 mt-5 hidden lg:flex">Ou</p>
                <div className="flex flex-col gap-4 mt-6">
                <Button variant="outline"><FaGoogle size={16} className="text-orange-500"  /> Entrar usando a conta do Google</Button>
                <Button variant="outline"><FaFacebook size={16} className="text-[#1877F2]" /> Entrar usando a conta do Facebook</Button>
                </div>
            </div>
        </section>
    )
}