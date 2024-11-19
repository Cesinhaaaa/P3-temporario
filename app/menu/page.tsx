import React from "react";
import Link from "next/link"
import { ArrowLeftCircle } from 'lucide-react'
import { HeaderTransparent } from '../(landing)/header'

export default function Page() {
	return (
        <div>
            <div>
                <HeaderTransparent />
                <Link className="absolute top-5 left-5" href="/">
                    <ArrowLeftCircle size={32} />
                </Link>
            </div>

            <div className="m-0 p-0 h-full w-full bg-[#16192B] flex flex-col overflow-auto">
                <div className="w-full h-[100px] mt-5"></div>

                {/* linha superior */}
                <div className="w-full h-[90%] flex flex-col items-center justify-center mt-5 mb-[60px] pt-[15px]">
                <div className="text-white text-[42px] self-start pl-[17%]">Minijogos</div>

                    <div className="w-[80%] h-full flex flex-row justify-center mt-5">
                    

                        {/* Bloco 1 */}
                        <div className="w-[40%] h-full flex flex-col items-start justify-center mr-[25px]">
                            <a className="w-full h-[300px] bg-green-300 border-transparent rounded-[25px]" href="/menu/game/5_softSkills"></a>
                            <div className="text-white text-[26px] mt-[10px] ml-[10px]">Simulador de perguntas de entrevista (SoftSkills) </div>
                        </div>

                        {/* Bloco 2 */}
                        <div className="w-[40%] h-full flex flex-col items-start justify-center mr-[25px]">
                            <a className="w-full h-[300px] bg-green-300 border-transparent rounded-[25px]" href="/menu/game/4_gameHard"></a>
                            <div className="text-white text-[26px] mt-[10px] ml-[10px]">Simulador de entrevista técnica (HardSkills) </div>
                        </div>


                    </div>
                </div>

                {/* linha inferior */}
                <div className="w-full h-[90%] flex flex-col items-center justify-center mt-5 mb-[60px] pt-[15px]">
                    <div className="text-white text-[42px] self-start pl-[17%]">Dicas de carreira</div>

                    <div className="w-[80%] h-full flex flex-row justify-center mt-5">
                        {/* Bloco 1 */}
                        <div className="w-[40%] h-full flex flex-col items-start justify-center mr-[25px]">
                            <a className="w-full h-[300px] bg-blue-300 border-transparent rounded-[25px]" href="/"></a>
                            <div className="text-white text-[26px] mt-[10px] ml-[10px]">Quais as roupas adequadas para utilizar numa entre vista de emprego?</div>
                        </div>

                        {/* Bloco 2 */}
                        
                        <div className="w-[40%] h-full flex flex-col items-start justify-center mr-[25px]">
                        <a className="w-full h-[300px] bg-blue-300 border-transparent rounded-[25px]" href="/"></a>
                            <div className="text-white text-[26px] mt-[10px] ml-[10px]">Como se preparar para uma entrevista?</div>
                        </div>

                        

                    </div>
                </div>

                {/* <Link className="absolute top-5 left-5" href="/">
                    <ArrowLeftCircle size={32} />
                </Link> */}
            </div>
        </div>
    );
}