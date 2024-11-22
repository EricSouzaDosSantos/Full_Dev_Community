import { FaCheckDouble } from "react-icons/fa";
import { Card, CardDescription, CardTitle } from "../ui/card";

export function Differences() {
    return (
        <section className="px-4 lg:px-16">
        <h1 className="text-white font-semibold text-start text-xl lg:text-3xl mt-20 mb-10">
            Por que escolher o nosso{" "}
            <span className="text-[#B22D00]">
            construtor <br /> de formulários
            </span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6 border border-white/30 bg-black rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-[#B22D00] text-white rounded-full">
                <FaCheckDouble className="text-lg" />
                </div>
                <CardTitle className="text-white text-xl lg:text-2xl ml-4">
                Personalização Total
                </CardTitle>
            </div>
            <CardDescription className="text-white/80 max-w-[400px]">
                Crie formulários exclusivos com total liberdade para ajustar cores,
                fontes e layouts, garantindo que cada formulário se alinhe
                perfeitamente à sua identidade visual.
            </CardDescription>
            </Card>
            <Card className="p-6 border border-white/30 bg-black rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-[#B22D00] text-white rounded-full">
                <FaCheckDouble className="text-lg" />
                </div>
                <CardTitle className="text-white text-xl lg:text-2xl ml-4">
                Facilidade de Uso
                </CardTitle>
            </div>
            <CardDescription className="text-white/80 max-w-[400px]">
                Nossa interface intuitiva e ferramentas drag-and-drop permitem criar
                e editar formulários de maneira simples, sem a necessidade de
                conhecimentos técnicos.
            </CardDescription>
        </Card>
        <Card className="p-6 border border-white/30 bg-black rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-[#B22D00] text-white rounded-full">
              <FaCheckDouble className="text-lg" />
            </div>
            <CardTitle className="text-white text-xl lg:text-2xl ml-4">
              Integração rápida
            </CardTitle>
          </div>
          <CardDescription className="text-white/80 max-w-[400px]">
            Conecte seus formulários a plataformas e ferramentas populares, como
            Google Sheets e CRMs, de forma rápida e sem complicação.
          </CardDescription>
        </Card>
      </div>
    </section>
  );
}
