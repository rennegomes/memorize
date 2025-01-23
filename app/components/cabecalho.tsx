export function Header(){
    return(
        <div className="bg-[#DDE92A] h-20 flex">
            <div className="flex justify-between items-center w-11/12 lg:w-1/2 sm:m-auto max-sm:justify-center max-sm:w-full">
                <div className="bg-white border border-[#E74915] px-5 py-2 rounded-full">
                    <img src="/LogoMemorize.png" alt="Logo" className="w-24" />
                </div>
                
                <div className="flex gap-10 items-center font-medium max-md:text-sm max-sm:hidden">
                    <a className="cursor-pointer">Apresentação</a>
                    <a className="cursor-pointer">Projetos</a>
                    <button className="bg-[#E74915] px-5 py-3 rounded-full border border-white text-white font-bold">Contato</button>
                </div>
            </div>
        </div>
    )
}