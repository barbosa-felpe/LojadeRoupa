import colecao1 from '../asset/colecao/colecao1.png'
import colecao2 from '../asset/colecao/colecao2.png'
import colecao3 from '../asset/colecao/colecao3.png'

export default function Colecao() {
    return (
        <>
            <div className="pb-5">
                <h1 className='text-4xl'>Coleção</h1>
                <p>Acompanhe as ultimas coleções do último ano!</p>
            </div>

            <div className="flex w-full justify-between mb-5">
                <div className="relative group flex bg-slate-50 w-[30%] h-[25%] overflow-hidden cursor-pointer rounded-xl">
                    <img src={colecao1} alt="" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                    <h1 className="text-3xl text-gray-200 bottom-8 left-8 absolute">Coleção 1</h1>
                </div>
                <div className="relative group flex bg-slate-50 w-[30%] h-[25%] overflow-hidden cursor-pointer rounded-xl">
                    <img src={colecao2} alt="" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                    <h1 className="text-3xl text-gray-200 bottom-8 left-8 absolute">Coleção 2</h1>
                </div>
                <div className="relative group flex bg-slate-50 w-[30%] h-[25%] overflow-hidden cursor-pointer rounded-xl">
                    <img src={colecao3} alt="" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                    <h1 className="text-3xl text-gray-200 bottom-8 left-8 absolute">Coleção 3</h1>
                </div>
            </div>


        </>
    )
}

