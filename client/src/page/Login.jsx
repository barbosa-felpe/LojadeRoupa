import { Link } from 'react-router-dom'
import Logo from '../asset/logo_vermelha.png'

export default function Login() {
    return (
        <main className="flex justify-center items-center h-screen bg-gray-50  ">

            <Link to={"/"}><img src={Logo} alt="Peccato Logo" className='w-40 h-auto absolute left-0 top-0 m-8' /></Link>
            <div className="flex flex-col  items-center justify-center bg-white w-150 h-180 rounded-3xl p-15 shadow-xl">
                <div className='flex flex-col items-center mb-5'>
                    <h1 className='text-3xl'>Bem-vindo de volta!</h1>
                    <p className='text-gray-500'>Faça login na sua Peccato Account</p>
                </div>

                <form className='flex flex-col gap-5 w-full '>
                    <div>
                        <label htmlFor="" className='text-[13pt] ml-1'>E-mail:</label>
                        <input type="email" placeholder='Digite seu e-mail' className='bg-white w-full h-15 p-5 box-border rounded-xl border-1  border-gray-200' />
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <label htmlFor="" className='text-[13pt] ml-1 mr-1'>Senha:</label>
                            <Link to={"/forgot-password"} className='text-[13pt] hover:underline'>Esqueceu a senha?</Link>
                        </div>
                        <input type="password" placeholder='Digite sua senha' className='bg-white w-full h-15 p-5 box-border rounded-xl border-1  border-gray-200' />
                    </div>

                    <button className='bg-red text-white h-15 rounded-xl mt-5 transition-all hover:-translate-y-2 shadow-xl cursor-pointer'>Login</button>
                </form>

                <div className='flex w-full justify-center items-center m-5'>
                    <hr className='border-1 border-gray-400 w-full '/>
                    <p className='mr-5 ml-5 text-gray-400'>ou</p>
                    <hr className='border-1 border-gray-400 w-full '/>
                </div>

                <div className='flex flex-col gap-2 justify-center w-full'>
                    <button className='border-1 border-gray-200 h-10 rounded-4xl w-full'>Conectar com Google</button>
                    <button className='border-1 border-gray-200 h-10 rounded-4xl w-full'>Conectar com Google</button>
                    
                </div>
            </div>
        </main>
    )
}