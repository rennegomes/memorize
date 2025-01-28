export function Beneficios(){
    return(
        <div className=" flex flex-col justify-center items-center">
            <img src="/Vector1.png" className="bg-[#DDE92A]"/>
            <div className="bg-black w-full flex flex-col items-center p-5 mt-[-2px]">
                <div className="text-white w-full flex flex-col max-w-[1080px] items-center mx-5">
                    <h1 className="font-bold text-center text-4xl lg:text-7xl">Benefícios de uma <br></br> identidade visual</h1>
                    <div className="flex gap-2 items-center mt-5 lg:text-3xl">
                        <p className="border px-6 py-3 max-md:p-2 rounded-full">profissional</p>
                        <p>para o seu empreendimento:</p>
                    </div>
                    <div className="flex justify-between w-full mt-20 font-medium max-md:flex-col max-md:items-center max-md:gap-5">
                        <div className="flex items-center flex-col text-center bg-[#DF8AE4] text-black rounded-full max-w-[150px] min-h-60">
                            <img src="/estrelaLaranja.svg" className="w-10 my-5" />
                            <p className="mx-2">Uma marca memorável e inesquecível.</p>
                        </div>
                        <div className="flex items-center flex-col text-center bg-[#E74915] rounded-full max-w-[150px] min-h-60">
                            <img src="/estrelaRosa.png" className="w-10 my-5" />
                            <p className="mx-2">Credibilidade no mercado e destaque no seu nincho.</p>
                        </div>
                        <div className="flex items-center flex-col text-center bg-[#DDE92A] text-black rounded-full max-w-[150px] min-h-60">
                            <img src="/estrelaAzul.png" className="w-10 my-5" />
                            <p className="mx-2">Algo único, profissional e estratégico.</p>
                        </div>
                        <div className="flex items-center flex-col text-center bg-[#4573F4] rounded-full max-w-[150px] min-h-60">
                            <img src="/estrelaVerde.png" className="w-10 my-5" />
                            <p className="mx-2">Facilidade na comunicação com o público.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/Vector2.png" className="mt-[-20px] lg:ml-[-2px]" />
        </div>
    )
}