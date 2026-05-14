import { Link } from "react-router-dom"
import { User, Package, MapPin, Lock, LogOut } from "lucide-react"

const MENU = [
    { icon: <User size={18} />, label: "Dados pessoais", desc: "Nome, e-mail e telefone" },
    { icon: <Package size={18} />, label: "Meus pedidos", desc: "Histórico de compras", to: "/meus-pedidos" },
    { icon: <MapPin size={18} />, label: "Endereços salvos", desc: "Gerencie seus endereços de entrega" },
    { icon: <Lock size={18} />, label: "Alterar senha", desc: "Atualize sua senha de acesso" },
]

export default function MinhaConta() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-red text-white py-14 px-6 text-center">
                <h1 className="text-4xl font-bold">Minha Conta</h1>
                <p className="text-white/70 mt-2">Gerencie seus dados e pedidos</p>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-14 flex flex-col gap-6">

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-red/10 flex items-center justify-center">
                        <User size={28} className="text-red" />
                    </div>
                    <div>
                        <h2 className="font-bold text-lg">Olá, Cliente!</h2>
                        <p className="text-sm text-gray-500">cliente@email.com</p>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    {MENU.map(item => {
                        const content = (
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-4 flex items-center gap-4 hover:border-red/30 transition-colors cursor-pointer">
                                <span className="text-red bg-red/10 p-2 rounded-xl">{item.icon}</span>
                                <div className="flex-1">
                                    <p className="font-medium">{item.label}</p>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                                <span className="text-gray-300 text-lg">›</span>
                            </div>
                        )
                        return item.to
                            ? <Link key={item.label} to={item.to}>{content}</Link>
                            : <div key={item.label}>{content}</div>
                    })}
                </div>

                <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-red transition-colors cursor-pointer w-fit">
                    <LogOut size={16} /> Sair da conta
                </button>
            </div>
        </div>
    )
}
