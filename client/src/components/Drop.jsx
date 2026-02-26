import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { BsFillBasket2Fill } from "react-icons/bs";
import produtoSemFoto from '../asset/img-produtos/produtosemfoto.png'



function SwiperDisplay({ title }) {


    return (
        <div className="pb-5">

            <h1 className='text-4xl pb-5'>{title}</h1>

            <Swiper
                loop={true}
                spaceBetween={50}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                onMouseDown={() => setIsGrab(true)}
                className='cursor-grab active:cursor-grabbing'
            >
                <SwiperSlide>
                    <div className='flex flex-col justify-end items-center p-5 bg-slate-100 w-80 h-100 rounded-3xl'>
                        <div className='overflow-hidden rounded-2xl'>
                            <img src={produtoSemFoto} alt='produto' className='w-full' />
                        </div>

                        <h1 className='text-xl pt-2'>Camisinha Neon</h1>

                        <h1 className='text-2xl text-green-600 tex'>R$300</h1>

                        <button className=' flex align-center bg-(--color-red) text-white p-2 rounded-xl m-2 cursor-pointer transition-transform hover:scale-105 active:scale-100 bg-[#a72c2c]'> <BsFillBasket2Fill className='h-4/5 w-auto mr-1' /> Adicionar ao carrinho</button>
                    </div>
                </SwiperSlide>



            </Swiper>

        </div>
    )
}

export default SwiperDisplay