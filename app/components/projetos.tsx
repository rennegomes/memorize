interface ProjetosProps{
    titulo: string,
    subtitulo: string,
    primeiraFoto?: string,
    segundaFoto?: string,
}

export function Projetos(props: ProjetosProps){
    return(
        <div className="flex justify-center mt-10">
            <div className="flex flex-col max-w-[1080px] w-full items-center m-5">
                <div className="self-start">
                    <h1 className="text-[#E74915] text-4xl font-extrabold lg:text-5xl">{ props.titulo }</h1>
                    <p className="mt-2 ml-1 lg:text-xl">{ props.subtitulo }</p>
                </div>
                <div className="grid grid-cols-2 items-center gap-10 mt-10 max-md:grid-cols-1">
                    <img src={props.primeiraFoto} alt="Logo1" className="max-w-[300px] lg:max-w-[450px]"/>
                    <img src={props.segundaFoto} alt="Logo2" className="max-w-[300px] lg:max-w-[450px]"/>
                </div>
            </div>
        </div>
    )
}