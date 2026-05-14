import { useState } from "react"

const VAGAS = [
    { cargo: "Vendedor(a)", local: "Cascavel – PR", tipo: "CLT" },
    { cargo: "Gerente de Loja", local: "Curitiba – PR", tipo: "CLT" },
    { cargo: "Auxiliar de Estoque", local: "São Paulo – SP", tipo: "CLT" },
    { cargo: "Designer de Moda", local: "Remoto", tipo: "PJ" },
    { cargo: "Analista de E-commerce", local: "Remoto", tipo: "CLT/PJ" },
]

function InputField({ label, ...props }) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-bold">{label}</label>
            <input className="bg-white h-11 border border-gray-200 rounded-xl px-4 text-sm focus:outline-none focus:border-red transition-colors" {...props} />
        </div>
    )
}

export default function TrabalheConosco() {
    const [enviado, setEnviado] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setEnviado(true)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-red text-white py-14 px-6 text-center">
                <h1 className="text-4xl font-bold">Trabalhe Conosco</h1>
                <p className="text-white/70 mt-2">Faça parte de um time apaixonado por moda</p>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col gap-14">

                <section className="flex flex-col gap-5">
                    <h2 className="text-2xl font-bold">Vagas abertas</h2>
                    <div className="flex flex-col gap-3">
                        {VAGAS.map(vaga => (
                            <div key={vaga.cargo} className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-4 flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold">{vaga.cargo}</h3>
                                    <p className="text-sm text-gray-500">{vaga.local} · {vaga.tipo}</p>
                                </div>
                                <span className="text-xs bg-red/10 text-red font-medium px-3 py-1 rounded-full">Aberta</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-10 items-start">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold">Envie seu currículo</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Não encontrou a vaga ideal? Envie seu currículo e manteremos seus dados em nosso banco de talentos para oportunidades futuras.
                        </p>
                        <ul className="flex flex-col gap-2">
                            {["Ambiente jovem e dinâmico", "Benefícios competitivos", "Desconto exclusivo em produtos", "Plano de carreira estruturado"].map(b => (
                                <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-red font-bold">✓</span> {b}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        {enviado ? (
                            <div className="flex flex-col items-center gap-4 py-8 text-center">
                                <div className="bg-green-100 text-green-600 rounded-full w-14 h-14 flex items-center justify-center text-2xl">✓</div>
                                <h3 className="font-bold text-lg">Currículo enviado!</h3>
                                <p className="text-gray-500 text-sm">Entraremos em contato caso surja uma oportunidade compatível com seu perfil.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <h3 className="font-bold text-lg">Candidatura espontânea</h3>
                                <InputField label="Nome completo" placeholder="Seu nome" required />
                                <InputField label="E-mail" type="email" placeholder="seu@email.com" required />
                                <InputField label="Telefone" placeholder="(00) 00000-0000" required />
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-bold">Área de interesse</label>
                                    <select className="bg-white h-11 border border-gray-200 rounded-xl px-4 text-sm focus:outline-none focus:border-red transition-colors">
                                        <option>Vendas</option>
                                        <option>Estoque / Logística</option>
                                        <option>Gestão / Gerência</option>
                                        <option>Marketing / Design</option>
                                        <option>Tecnologia</option>
                                        <option>Administrativo</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-bold">Mensagem (opcional)</label>
                                    <textarea
                                        placeholder="Conte um pouco sobre você..."
                                        rows={3}
                                        className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red transition-colors resize-none"
                                    />
                                </div>
                                <button className="bg-red text-white h-11 rounded-xl font-medium cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:bg-[#A11515] mt-2">
                                    Enviar candidatura
                                </button>
                            </form>
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}
