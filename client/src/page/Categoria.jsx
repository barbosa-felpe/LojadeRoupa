import { BsFillBasket2Fill } from "react-icons/bs";
import produtoSemFoto from '../asset/img-produtos/produtosemfoto.png'


function FilterSidebar(){

    const sizes = ['PP', 'P', 'M', 'G', 'GG', 'XG']

    return (
        <div className="flex flex-wrap flex-col w-200 p-5">
            <h1 className="font-bold">Filtro</h1>
            <hr className="border-t border-gray-300 my-4"/>

            <h2 className="mb-3">Tamanho</h2>

            <div className="flex flex-wrap gap-1">
            {sizes.map((size) => (
                <button className="p-1 w-15 border-1 border-gray-300 rounded-2xl cursor-pointer transition-colors hover:bg-gray-300">{size}</button>
            ))}
            </div>
        </div>
    )
}


function ListProduct() {

    const produtos = ['camisinha neon', 'camisinha chocolate', 'camisinha de banana', 'camisinha de morango', 'camisinha de whey','camisinha neon', 'camisinha chocolate', 'camisinha de banana', 'camisinha de morango', 'camisinha de whey']

    return (
        <div className="flex gap-10 flex-wrap  p-5" >
            {produtos.map((produto) => (
                <div className='flex flex-col justify-end items-center p-5 bg-slate-100 w-80 h-100 rounded-3xl'>
                    <div className='overflow-hidden rounded-2xl'>
                        <img src={produtoSemFoto} alt='produto' className='w-full' />
                    </div>

                    <h1 className='text-xl pt-2'>{produto}</h1>

                    <h1 className='text-2xl text-green-600 tex'>R$300</h1>

                    <button className=' flex align-center bg-(--color-red) text-white p-2 rounded-xl m-2 cursor-pointer transition-transform hover:scale-105 active:scale-100 bg-[#a72c2c]'> <BsFillBasket2Fill className='h-4/5 w-auto mr-1' /> Adicionar ao carrinho</button>
                </div>
            ))}
        </div>
    )
}

export default function Categoria() {
    return (
        <div className="flex justify-center pt-10 pb-10 pl-5 ">
            <FilterSidebar />

            <ListProduct />
        </div>
    )
}