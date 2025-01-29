export function Rodape(){
    return(
        <div className="flex flex-col justify-center mt-10">
            <img src="/Vector3.png" />
            <div className="bg-[#4573F4] pb-20 pt-10 flex justify-center mt-[-10px]">
                <div className="flex flex-col gap-2 text-white max-w-[1080px] w-full mx-5 text-lg">
                    <h1 className="font-bold text-2xl">Contatos:</h1>
                    <div className="flex gap-5 items-center mt-5">
                        <img src="/instagram.png" alt="Logo do instagram" className="max-w-8 invert" />
                        <p>memorizeartd</p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <img src="/email.png" alt="Logo do email" className="max-w-8 invert" />
                        <p>memorizeartdesign@gmail.com</p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <img src="/whatsapp.png" alt="Logo do whatsapp" className="max-w-8 invert" />
                        <p>(81) 9 7107-2347</p>   
                    </div>
                </div>
            </div>
        </div>
    )
}