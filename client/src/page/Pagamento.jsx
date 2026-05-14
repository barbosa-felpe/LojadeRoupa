import { CreditCard, QrCode, FileText, ShieldCheck } from "lucide-react"

const METODOS = [
    {
        icon: <CreditCard size={28} />,
        titulo: "Cartão de crédito",
        desc: "Parcele em até 12x. Aceitamos as principais bandeiras.",
        bandeiras: ["Visa", "Mastercard", "Elo", "American Express", "Hipercard"],
        detalhe: "Parcelas sem juros em até 3x. Acima disso, juros de 1,99% a.m."
    },
    {
        icon: <QrCode size={28} />,
        titulo: "PIX",
        desc: "Pagamento instantâneo com confirmação em segundos.",
        bandeiras: [],
        detalhe: "Disponível 24 horas por dia, 7 dias por semana. O pedido é confirmado imediatamente após o pagamento."
    },
    {
        icon: <FileText size={28} />,
        titulo: "Boleto bancário",
        desc: "Pague em qualquer banco, lotérica ou app bancário.",
        bandeiras: [],
        detalhe: "O boleto vence em 3 dias úteis. O pedido é processado após a confirmação do pagamento (1 a 2 dias úteis após o vencimento)."
    },
]

const BANDEIRAS_IMG = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visa/visa-original.svg", alt: "Visa" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mastercard/mastercard-original.svg", alt: "Mastercard" },
    { src: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/amex.svg", alt: "American Express" },
    { src: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/elo.svg", alt: "Elo" },
    { src: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/hipercard.svg", alt: "Hipercard" },
    { src: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/pix.svg", alt: "Pix" },
]

export default function Pagamento() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-red text-white py-14 px-6 text-center">
                <h1 className="text-4xl font-bold">Formas de Pagamento</h1>
                <p className="text-white/70 mt-2">Opções seguras e práticas para sua compra</p>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-14 flex flex-col gap-10">

                <div className="flex flex-col gap-5">
                    {METODOS.map(m => (
                        <div key={m.titulo} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex gap-5 items-start">
                            <span className="text-red bg-red/10 p-3 rounded-xl shrink-0">{m.icon}</span>
                            <div className="flex flex-col gap-1">
                                <h2 className="font-bold text-lg">{m.titulo}</h2>
                                <p className="text-sm text-gray-500">{m.desc}</p>
                                <p className="text-xs text-gray-400 mt-1">{m.detalhe}</p>
                                {m.bandeiras.length > 0 && (
                                    <p className="text-xs text-gray-400 mt-1">Bandeiras: {m.bandeiras.join(", ")}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
                    <h2 className="font-bold">Bandeiras aceitas</h2>
                    <div className="flex flex-wrap gap-3">
                        {BANDEIRAS_IMG.map(({ src, alt }) => (
                            <div key={alt} className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 w-16 h-10 flex items-center justify-center">
                                <img src={src} alt={alt} className="w-full h-full object-contain" />
                            </div>
                        ))}
                    </div>
                </section>

                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl px-6 py-4">
                    <ShieldCheck size={22} className="text-green-600 shrink-0" />
                    <p className="text-sm text-green-700">
                        <strong>Compra 100% segura.</strong> Todas as transações são criptografadas e processadas por operadoras certificadas. Seus dados financeiros nunca são armazenados em nossos servidores.
                    </p>
                </div>
            </div>
        </div>
    )
}
