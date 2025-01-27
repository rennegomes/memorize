export function Saudacoes () {
    return(
        <div className="flex justify-center mt-10">
            <div className="flex flex-col max-w-[1080px] w-full items-center mx-5">
                <div className="self-start">
                    <img src="/Balao1.png" alt="Primeiro balão de apresentação" className="w-96" />
                </div>
                <div className="p-10">
                    <h1 className="font-medium text-5xl max-sm:text-3xl">Seja bem vindo,</h1>
                    <h1 className="font-bold text-6xl max-sm:text-4xl">Empreendedor</h1>
                </div>
                <div className="self-end">
                    <img src="/Balao2.png" alt="Segundo balão de apresentação" className="w-96" />
                </div>
            </div>
        </div>
    )
}