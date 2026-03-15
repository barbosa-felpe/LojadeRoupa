import { useNavigate } from 'react-router-dom'
import produtoSemFoto from '../asset/img-produtos/produtosemfoto.png'



export default function Product({name}) {

    const navigate = useNavigate() 

    function toProductDetail(){
        navigate(`/produto/${name}`)
    }
    return (
        <div onClick={toProductDetail} className='flex flex-col 0 w-100 h-150 cursor-pointer '>
            <div
            style={{ backgroundImage: `url(${produtoSemFoto})` }} 
            className={` w-full h-full bg-center bg-cover`}>
            </div>

            <div>
            <h1 className='text-xl pt-2'>{name}</h1>

            <h1 className='text-xl'>R$300</h1>
            </div>

            
        </div>
    )
}

