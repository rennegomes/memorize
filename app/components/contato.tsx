export function Contato(){
    return(
        <div className="flex justify-center mt-10">
            <div className="grid gap-10 max-w-[1080px] w-full items-center m-5 lg:grid-cols-2">
                <div>
                    <h1 className="text-[#E74915] text-5xl max-md:text-center lg:text-6xl font-extrabold">
                    Agende seu <br /> orçamento!
                    </h1>
                </div>
                <div className="bg-[#DDE92A] p-2 rounded-3xl">
                    <form action="" className="flex flex-col justify-center m-5">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" placeholder="Seu nome" className="block min-w-0 rounded-md grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 outline-1 -outline-offset-1 focus:outline-[#E74915] sm:text-sm/6" /><br />

                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" placeholder="Seu e-mail" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#E74915] sm:text-sm/6" /><br />

                        <label htmlFor="interesse">Interesse:</label>
                            <select id="interesse"name="interesse" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-[#E74915] sm:text-sm/6">
                                <option>Identidade visual</option>
                                <option>Midia social</option>
                            </select><br />

                        <label htmlFor="mensagem">Explico um pouco sobre:</label>
                        <textarea name="mensagem" id="mensagem" rows={5} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#E74915] sm:text-sm/6" ></textarea><br />

                        <input type="submit" className="bg-[#DF8AE4] p-2 w-20 self-center rounded-full px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
                    </form>
                </div>
            </div>
        </div>
    )
}