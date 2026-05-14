import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../asset/logo_vermelha.png'

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <main className="flex justify-center items-center h-screen bg-gray-50">

            <Link to={"/"}><img src={Logo} alt="Peccato Logo" className='w-40 h-auto absolute left-0 top-0 m-8' /></Link>

            <div className="flex flex-col items-center justify-center bg-white w-150 rounded-3xl p-15 shadow-xl">

                {submitted ? (
                    <div className='flex flex-col items-center gap-5 text-center p-10'>
                        <div className='bg-green-100 text-green-700 rounded-full w-16 h-16 flex items-center justify-center text-3xl'>✓</div>
                        <h1 className='text-3xl'>E-mail enviado!</h1>
                        <p className='text-gray-500'>
                            Enviamos as instruções de recuperação para <span className='font-bold text-black'>{email}</span>. Verifique sua caixa de entrada.
                        </p>
                        <Link
                            to="/login"
                            className='mt-4 bg-red text-white h-15 w-full rounded-xl flex items-center justify-center transition-all hover:-translate-y-2 hover:shadow-xl active:translate-y-0 active:bg-[#A11515]'
                        >
                            Voltar para o Login
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className='flex flex-col items-center p-10'>
                            <h1 className='text-3xl'>Esqueceu a senha?</h1>
                            <p className='text-gray-500 text-center mt-1'>Digite seu e-mail e enviaremos um link para redefinir sua senha.</p>
                        </div>

                        <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full'>
                            <div>
                                <label className='text-[13pt] font-bold ml-1'>E-mail:</label>
                                <input
                                    type="email"
                                    placeholder='Digite seu e-mail'
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='bg-white w-full h-15 p-5 box-border rounded-xl border-1 border-gray-200 mt-1'
                                />
                            </div>

                            <button className='bg-red text-white h-15 rounded-xl transition-all hover:-translate-y-2 hover:shadow-xl active:translate-y-0 active:bg-[#A11515] cursor-pointer'>
                                Enviar link de recuperação
                            </button>

                            <p className='text-[13pt] text-center'>
                                Lembrou a senha?{' '}
                                <Link to='/login' className='font-bold hover:underline hover:text-red cursor-pointer'>
                                    Fazer login
                                </Link>
                            </p>
                        </form>
                    </>
                )}
            </div>
        </main>
    )
}
