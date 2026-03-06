import Logo from '../asset/logo_vermelha.png'

export default function Login(){
    return (
        <main className="flex justify-center items-center h-screen ">

            <img src={Logo} alt="Peccato Logo" className='w-40 h-auto absolute left-0 top-0 m-5' />
            <div className="flex flex-col  items-center bg-gray-50 w-150 h-180 rounded-3xl p-15">
                <h1 className='text-3xl'>Bem-vindo de volta!</h1>
                <p>Ainda não tem uma conta? Entre.</p>

                <div>
                    <input type='email' />
                </div>
            </div>
        </main>
    )
}