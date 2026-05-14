import { Link } from "react-router-dom"
import { Package } from "lucide-react"

const STATUS = {
    processando: { label: "Processando", color: "bg-yellow-100 text-yellow-700" },
    enviado: { label: "Enviado", color: "bg-blue-100 text-blue-700" },
    entregue: { label: "Entregue", color: "bg-green-100 text-green-700" },
    cancelado: { label: "Cancelado", color: "bg-red/10 text-red" },
}

const PEDIDOS = [
    { id: "PEC-28471", data: "10/05/2026", itens: ["Camiseta Básica Preta", "Calça Slim Fit"], total: 321.90, status: "enviado" },
    { id: "PEC-21053", data: "02/04/2026", itens: ["Moletom Oversized"], total: 189.90, status: "entregue" },
    { id: "PEC-18720", data: "14/03/2026", itens: ["Jaqueta Corta Vento", "Boné Snapback"], total: 298.00, status: "entregue" },
    { id: "PEC-11200", data: "07/01/2026", itens: ["Calça Jogger"], total: 159.90, status: "cancelado" },
]

export default function MeusPedidos() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-red text-white py-14 px-6 text-center">
                <h1 className="text-4xl font-bold">Meus Pedidos</h1>
                <p className="text-white/70 mt-2">Acompanhe o histórico das suas compras</p>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-14 flex flex-col gap-4">
                {PEDIDOS.length === 0 ? (
                    <div className="flex flex-col items-center gap-4 py-20 text-center">
                        <Package size={64} className="text-gray-300" strokeWidth={1.2} />
                        <h2 className="text-xl font-bold text-gray-600">Nenhum pedido encontrado</h2>
                        <p className="text-gray-400 text-sm">Você ainda não realizou nenhuma compra.</p>
                        <Link to="/" className="bg-red text-white px-8 h-11 rounded-xl flex items-center text-sm font-medium transition-all hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:bg-[#A11515]">
                            Explorar produtos
                        </Link>
                    </div>
                ) : (
                    PEDIDOS.map(pedido => {
                        const s = STATUS[pedido.status]
                        return (
                            <div key={pedido.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-3">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <div>
                                        <span className="font-bold">{pedido.id}</span>
                                        <span className="text-gray-400 text-sm ml-3">{pedido.data}</span>
                                    </div>
                                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${s.color}`}>{s.label}</span>
                                </div>
                                <ul className="text-sm text-gray-500 flex flex-col gap-0.5">
                                    {pedido.itens.map(item => <li key={item}>· {item}</li>)}
                                </ul>
                                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                    <span className="font-bold">R$ {pedido.total.toFixed(2).replace('.', ',')}</span>
                                    <button className="text-sm text-red font-medium hover:underline cursor-pointer">Ver detalhes</button>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}
