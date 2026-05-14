import { useState } from "react"
import { TrendingUp, Users, Award, Headphones } from "lucide-react"

function InputField({ label, ...props }) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-bold">{label}</label>
            <input className="bg-white h-11 border border-gray-200 rounded-xl px-4 text-sm focus:outline-none focus:border-red transition-colors" {...props} />
        </div>
    )
}

export default function SejaUmFranqueado() {
    const [enviado, setEnviado] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setEnviado(true)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-red text-white py-14 px-6 text-center">
                <h1 className="text-4xl font-bold">Seja um Franqueado</h1>
                <p className="text-white/70 mt-2">Faça parte da família Peccato e abra sua própria loja</p>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col gap-14">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: <TrendingUp size={24} />, titulo: "Marca consolidada", texto: "15 anos de mercado e reconhecimento nacional" },
                        { icon: <Users size={24} />, titulo: "Suporte completo", texto: "Time dedicado para apoiar sua operação" },
                        { icon: <Award size={24} />, titulo: "Treinamento", texto: "Capacitação inicial e continuada para sua equipe" },
                        { icon: <Headphones size={24} />, titulo: "Suporte 24h", texto: "Central de atendimento disponível todos os dias" },
                    ].map(card => (
                        <div key={card.titulo} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-2">
                            <span className="text-red">{card.icon}</span>
                            <h3 className="font-bold text-sm">{card.titulo}</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">{card.texto}</p>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold">Por que escolher a Peccato?</h2>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Oferecemos um modelo de franquia completo, com suporte em marketing, gestão de estoque, treinamento e tecnologia. Você foca em atender bem, nós cuidamos do resto.
                        </p>
                        <ul className="flex flex-col gap-2">
                            {[
                                "Investimento inicial a partir de R$ 80.000",
                                "Retorno estimado em 18 a 24 meses",
                                "Mix exclusivo de produtos com margem atrativa",
                                "Suporte de marketing nacional e regional",
                                "Sistema de gestão integrado fornecido pela rede",
                            ].map(item => (
                                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-red font-bold mt-0.5">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        {enviado ? (
                            <div className="flex flex-col items-center gap-4 py-8 text-center">
                                <div className="bg-green-100 text-green-600 rounded-full w-14 h-14 flex items-center justify-center text-2xl">✓</div>
                                <h3 className="font-bold text-lg">Interesse registrado!</h3>
                                <p className="text-gray-500 text-sm">Nossa equipe entrará em contato em até 3 dias úteis.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <h3 className="font-bold text-lg">Quero ser franqueado</h3>
                                <InputField label="Nome completo" placeholder="Seu nome" required />
                                <InputField label="E-mail" type="email" placeholder="seu@email.com" required />
                                <InputField label="Telefone" placeholder="(00) 00000-0000" required />
                                <InputField label="Cidade de interesse" placeholder="Cidade onde deseja abrir" required />
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-bold">Capital disponível</label>
                                    <select className="bg-white h-11 border border-gray-200 rounded-xl px-4 text-sm focus:outline-none focus:border-red transition-colors">
                                        <option>R$ 80.000 – R$ 120.000</option>
                                        <option>R$ 120.000 – R$ 200.000</option>
                                        <option>Acima de R$ 200.000</option>
                                    </select>
                                </div>
                                <button className="bg-red text-white h-11 rounded-xl font-medium cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:bg-[#A11515] mt-2">
                                    Enviar interesse
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
