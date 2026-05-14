import { RefreshCw, AlertCircle, CheckCircle2, XCircle } from "lucide-react"

export default function TrocasEDevolucao() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-red text-white py-14 px-6 text-center">
                <h1 className="text-4xl font-bold">Trocas e Devolução</h1>
                <p className="text-white/70 mt-2">Saiba como funciona nossa política de trocas</p>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-14 flex flex-col gap-10">

                <div className="grid md:grid-cols-3 gap-4">
                    {[
                        { icon: <RefreshCw size={22} />, titulo: "30 dias", texto: "Prazo para solicitar troca ou devolução após o recebimento" },
                        { icon: <AlertCircle size={22} />, titulo: "Sem uso", texto: "A peça deve estar sem uso, com etiqueta e na embalagem original" },
                        { icon: <CheckCircle2 size={22} />, titulo: "Frete grátis", texto: "Para trocas por defeito ou erro nosso, o frete de retorno é por nossa conta" },
                    ].map(card => (
                        <div key={card.titulo} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-2">
                            <span className="text-red">{card.icon}</span>
                            <h3 className="font-bold">{card.titulo}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{card.texto}</p>
                        </div>
                    ))}
                </div>

                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
                    <h2 className="font-bold text-lg">Como solicitar uma troca</h2>
                    <ol className="flex flex-col gap-3">
                        {[
                            "Acesse 'Meus Pedidos' e localize o pedido desejado.",
                            "Clique em 'Solicitar troca/devolução' e informe o motivo.",
                            "Aguarde a aprovação — você receberá um e-mail com a etiqueta de postagem.",
                            "Embale a peça e poste nos Correios dentro de 5 dias úteis.",
                            "Após recebermos e avaliarmos a peça, enviaremos a nova ou realizaremos o reembolso em até 7 dias úteis.",
                        ].map((step, i) => (
                            <li key={i} className="flex gap-3 text-sm text-gray-600">
                                <span className="w-6 h-6 rounded-full bg-red text-white text-xs flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                                {step}
                            </li>
                        ))}
                    </ol>
                </section>

                <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-5 flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-green-700 font-bold">
                            <CheckCircle2 size={18} /> Aceito para troca
                        </div>
                        <ul className="text-sm text-gray-600 flex flex-col gap-1">
                            {["Defeito de fabricação", "Produto errado enviado", "Tamanho diferente do pedido", "Produto danificado na entrega"].map(i => (
                                <li key={i} className="flex gap-2"><span className="text-green-500">✓</span>{i}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-red/5 border border-red/20 rounded-2xl p-5 flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-red font-bold">
                            <XCircle size={18} /> Não aceito para troca
                        </div>
                        <ul className="text-sm text-gray-600 flex flex-col gap-1">
                            {["Produto com sinais de uso", "Sem etiqueta original", "Fora do prazo de 30 dias", "Peças de íntimo e meias"].map(i => (
                                <li key={i} className="flex gap-2"><span className="text-red">✗</span>{i}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
