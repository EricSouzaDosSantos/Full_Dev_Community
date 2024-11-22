import Image from "next/image";
import { Form } from "./Form";

export function Login() {
    return (
        <section className="grid lg:grid-cols-2">
            <div className="bg-[#B22B00] w-full lg:h-screen">
                <div className="mt-20 mb-20 lg:mb-0 lg:mt-56 flex justify-center">
                    <Image src="/LogoWhite.svg" width={300} height={300} alt="" />
                </div>
            </div>
            <div className="mt-20 lg:mt-40">
                <h1 className="text-center text-2xl lg:text-4xl font-bold">Bem vindo de volta</h1>
                <p className="text-gray-500 text-center text-xl">Entre para começar a criar seus formulários.</p>
            </div>
            <Form />
        </section>
    )
}