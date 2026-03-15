import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'



import Product from './Product';



export default function SwiperDisplay({ title }) {


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
                    <Product />
                </SwiperSlide>



            </Swiper>

        </div>
    )
}

