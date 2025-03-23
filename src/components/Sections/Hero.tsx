export const Hero = () => {
    return (
        <>
            <section className="relative h-screen flex items-center justify-center bg-gray-100 p-8 z-[-1]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-6xl md:text-7xl font-bold leading-tight text-gray-900 uppercase">
                            Faça o Melhor <span className="text-red-500">Investimento</span>
                        </h1>
                        <p className="text-lg text-gray-600 mt-4 max-w-md">
                            Sua empresa merece tecnologia de ponta. Acesse uma equipe de TI especializada e impulsione seu negócio com inovação.
                        </p>
                        <div className="mt-6">
                            <a
                                href="/contato"
                                className="px-6 py-3 bg-gray-900 text-white font-medium uppercase tracking-wide text-lg hover:bg-red-500 transition-all duration-300"
                            >
                                Comece Agora
                            </a>
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
                </div>

                <div className="absolute bottom-10 left-10 text-gray-300 text-8xl font-bold uppercase opacity-10 select-none">
                    Tecnologia
                </div>
            </section>
        </>
    )
}