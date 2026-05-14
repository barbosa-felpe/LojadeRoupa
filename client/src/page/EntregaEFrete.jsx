import { Truck, Clock, MapPin, Package } from "lucide-react"

const PRAZOS = [
    { regiao: "Capitais e Regiões Metropolitanas", prazo: "3 a 5 dias úteis", frete: "R$ 15,90" },
    { regiao: "Sul e Sudeste (interior)", prazo: "4 a 6 dias úteis", frete: "R$ 19,90" },
    { regiao: "Centro-Oeste e Nordeste", prazo: "6 a 9 dias úteis", frete: "R$ 24,90" },
    { regiao: "Norte", prazo: "8 a 12 dias úteis", frete: "R$ 29,90" },
]

export default function EntregaEFrete() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-red text-white py-14 px-6 text-center">
                <h1 className="text-4xl font-bold">Entrega e Frete</h1>
                <p className="text-white/70 mt-2">Prazos, valores e informações sobre entrega</p>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-14 flex flex-col gap-10">

                <div className="grid md:grid-cols-4 gap-4">
                    {[
                        { icon: <Truck size={22} />, titulo: "Entrega nacional", texto: "Enviamos para todos os estados do Brasil" },
                        { icon: <Clock size={22} />, titulo: "Prazo contado", texto: "A partir da aprovação do pagamento" },
                        { icon: <Package size={22} />, titulo: "Frete grátis", texto: "Em compras acima de R$ 299,90" },
                        { icon: <MapPin size={22} />, titulo: "Rastreamento", texto: "Código enviado por e-mail após despacho" },
                    ].map(card => (
                        <div key={card.titulo} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-2">
                            <span className="text-red">{card.icon}</span>
                            <h3 className="font-bold text-sm">{card.titulo}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">{card.texto}</p>
                        </div>
                    ))}
                </div>

                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                        <h2 className="font-bold">Tabela de prazos e fretes</h2>
                    </div>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left px-6 py-3 text-gray-500 font-medium">Região</th>
                                <th className="text-left px-6 py-3 text-gray-500 font-medium">Prazo estimado</th>
                                <th className="text-left px-6 py-3 text-gray-500 font-medium">Frete padrão</th>
                            </tr>
                        </thead>
                        <tbody>
                            {PRAZOS.map((row, i) => (
                                <tr key={row.regiao} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                                    <td className="px-6 py-3 font-medium">{row.regiao}</td>
                                    <td className="px-6 py-3 text-gray-500">{row.prazo}</td>
                                    <td className="px-6 py-3 text-gray-500">{row.frete}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="px-6 py-3 bg-green-50 border-t border-green-100">
                        <p className="text-xs text-green-700 font-medium">Frete grátis em todo o Brasil para compras acima de R$ 299,90</p>
                    </div>
                </section>

                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-3">
                    <h2 className="font-bold">Informações importantes</h2>
                    <ul className="flex flex-col gap-2 text-sm text-gray-500">
                        {[
                            "Os prazos são estimados e contados em dias úteis após a confirmação do pagamento.",
                            "Pedidos realizados após as 14h são processados no próximo dia útil.",
                            "Para pedidos com mais de um item, todos são enviados juntos quando possível.",
                            "Em caso de ausência na entrega, a transportadora realizará mais 2 tentativas.",
                            "Após 3 tentativas sem sucesso, o pedido retorna ao remetente e o cliente deve arcar com novo frete.",
                        ].map(item => (
                            <li key={item} className="flex gap-2 items-start">
                                <span className="text-red mt-0.5 shrink-0">·</span> {item}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    )
}
