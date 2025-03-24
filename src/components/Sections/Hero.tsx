import {Sections} from "@/components/Sections/index";
import Button from "@/components/Button";

export const Hero = () => {
    return (
        <>
            <Sections label={"Tecnologia"} className={"grid md:grid-cols-2 gap-8"}>
                <div className="flex flex-col justify-center">
                    <h1 className="text-6xl md:text-7xl font-bold leading-tight text-gray-900 uppercase">
                        Faça o Melhor <span className="text-red-500">Investimento</span>
                    </h1>
                    <p className="text-lg text-gray-600 mt-4 max-w-md">
                        Sua empresa merece tecnologia de ponta. Acesse uma equipe de TI especializada e impulsione seu negócio com inovação.
                    </p>
                    <div className="mt-6">
                        <Button variant={"secondary"}>
                            Comece Agora
                        </Button>
                    </div>
                </div>

                <div className="relative flex items-center justify-center">
                    <img
                        src="https://markeythemes.vercel.app/skywave/images/bg-img-3.png"
                        alt="Tecnologia"
                        className="w-full h-auto object-cover"
                    />
                    <img
                        src="https://markeythemes.vercel.app/skywave/images/user-msg.png"
                        alt="Tecnologia"
                        className="absolute h-auto object-cover"
                    />
                </div>
            </Sections>
        </>
    )
}