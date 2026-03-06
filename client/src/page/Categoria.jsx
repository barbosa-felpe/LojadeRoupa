


import { BsFillBasket2Fill } from "react-icons/bs";
import produtoSemFoto from '../asset/img-produtos/produtosemfoto.png'
import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { useState } from "react";


function FilterSidebar() {
    const [selectedFilters, setSelectedFilters] = useState([])
    const [selectedSizes, setSelectedSizes] = useState([])

    const sizes = ['PP', 'P', 'M', 'G', 'GG', 'XG']
    const categories = [
        'Casual', 'Esportiva', 'Social', 'Oversized', 'Streetwear',
        'Basic', 'Cropped', 'Baby Look', 'Slim Fit', 'Muscle Fit'
    ]

    function handleFilter(category) {
        setSelectedFilters(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        )
    }

    function handleSize(size) {
        setSelectedSizes(prev =>
            prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size]
        )
    }

    return (
        <div className="flex flex-wrap flex-col w-200 p-5">
            <h1 className="font-bold">Filtro</h1>

            {/* Mostrar filtros selecionados */}
            {(selectedFilters.length > 0 || selectedSizes.length > 0) && (
                <div className="flex flex-wrap gap-1 my-2">
                    {selectedFilters.map(filter => (
                        <span
                            key={filter}
                            className="flex items-center gap-1 bg-gray-200 text-sm px-2 py-1 rounded-full"
                        >
                            {filter}
                            <button onClick={() => handleFilter(filter)} className="cursor-pointer hover:text-red-500">✕</button>
                        </span>
                    ))}
                    {selectedSizes.map(size => (
                        <span
                            key={size}
                            className="flex items-center gap-1 bg-gray-200 text-sm px-2 py-1 rounded-full"
                        >
                            {size}
                            <button onClick={() => handleSize(size)} className="cursor-pointer hover:text-red-500">✕</button>
                        </span>
                    ))}
                </div>
            )}
            <hr className="border-t border-gray-300 my-4" />

            <h2 className="mb-3">Categoria</h2>
            <div className="flex flex-wrap gap-1">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`p-1 w-25 border-1 border-gray-300 rounded-2xl cursor-pointer transition-colors hover:bg-gray-300
                            ${selectedFilters.includes(category) ? 'bg-gray-300' : ''}`}
                        onClick={() => handleFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <hr className="border-t border-gray-300 my-4" />

            <h2 className="mb-3">Tamanho</h2>
            <div className="flex flex-wrap gap-1">
                {sizes.map((size) => (
                    <button
                        key={size}
                        className={`p-1 w-15 border-1 border-gray-300 rounded-2xl cursor-pointer transition-colors hover:bg-gray-300
                            ${selectedSizes.includes(size) ? 'bg-gray-300' : ''}`}
                        onClick={() => handleSize(size)}
                    >
                        {size}
                    </button>
                ))}
            </div>

            <hr className="border-t border-gray-300 my-4" />
        </div>
    )
}


function ListProduct() {

    const produtos = ['camisinha neon', 'camisinha chocolate', 'camisinha de banana', 'camisinha de morango', 'camisinha de whey', 'camisinha neon', 'camisinha chocolate', 'camisinha de banana', 'camisinha de morango', 'camisinha de whey']

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

    const location = useLocation()

    const segmentos = location.pathname.split('/').filter(Boolean);

    const titulo = segmentos[segmentos.length - 1]
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());

    return (
        <div className="flex flex-col justify-center pt-10 pb-10 pl-5 ">


            <PageHeader />
            <div className="flex">

                <FilterSidebar />

                <ListProduct />

            </div>
        </div>
    )
}