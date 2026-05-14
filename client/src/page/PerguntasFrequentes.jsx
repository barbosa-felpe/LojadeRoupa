import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQS = [
    {
        categoria: "Pedidos",
        itens: [
            { p: "Como faço um pedido?", r: "Navegue pela nossa loja, adicione os produtos desejados ao carrinho e finalize o pedido na página de checkout. Você precisará informar seu endereço e forma de pagamento." },
            { p: "Posso cancelar um pedido?", r: "Sim, pedidos podem ser cancelados em até 24 horas após a confirmação, desde que ainda não tenham sido despachados. Entre em contato com nosso SAC." },
            { p: "Como acompanho meu pedido?", r: "Acesse 'Meus Pedidos' na sua conta. Você também receberá atualizações por e-mail a cada etapa da entrega." },
        ]
    },
    {
        categoria: "Entrega",
        itens: [
            { p: "Qual o prazo de entrega?", r: "O prazo varia conforme sua região. Para capitais, geralmente de 3 a 5 dias úteis. Para o interior, de 5 a 10 dias úteis." },
            { p: "O frete é grátis?", r: "Sim! Oferecemos frete grátis para compras acima de R$ 299,90 para todo o Brasil." },
            { p: "Entregam em todo o Brasil?", r: "Sim, entregamos para todos os estados brasileiros via Correios e transportadoras parceiras." },
        ]
    },
    {
        categoria: "Trocas e Devoluções",
        itens: [
            { p: "Como faço uma troca?", r: "Você tem até 30 dias após o recebimento para solicitar troca. A peça deve estar sem uso, com etiqueta e na embalagem original." },
            { p: "O frete da troca é por minha conta?", r: "Não. Para trocas por defeito ou erro nosso, o frete de retorno é por nossa conta. Para trocas por preferência, o custo é do cliente." },
        ]
    },
    {
        categoria: "Pagamento",
        itens: [
            { p: "Quais formas de pagamento são aceitas?", r: "Aceitamos cartões de crédito (Visa, Mastercard, Elo, Amex, Hipercard), PIX e boleto bancário." },
            { p: "Em quantas parcelas posso parcelar?", r: "Parcelamos em até 12x no cartão de crédito. Parcelas acima de 3x possuem juros." },
        ]
    },
]

function Item({ pergunta, resposta }) {
    const [open, setOpen] = useState(false)
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full flex justify-between items-center py-4 text-left cursor-pointer gap-4"
            >
                <span className="font-medium text-sm">{pergunta}</span>
                <ChevronDown size={18} className={`text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>
            {open && <p className="text-sm text-gray-500 leading-relaxed pb-4">{resposta}</p>}
        </div>
    )
}

export default function PerguntasFrequentes() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-red text-white py-14 px-6 text-center">
                <h1 className="text-4xl font-bold">Perguntas Frequentes</h1>
                <p className="text-white/70 mt-2">Encontre respostas para as dúvidas mais comuns</p>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-14 flex flex-col gap-8">
                {FAQS.map(grupo => (
                    <div key={grupo.categoria} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                            <h2 className="font-bold text-red">{grupo.categoria}</h2>
                        </div>
                        <div className="px-6">
                            {grupo.itens.map(item => (
                                <Item key={item.p} pergunta={item.p} resposta={item.r} />
                            ))}
                        </div>
                    </div>
                ))}

                <div className="bg-red/5 border border-red/20 rounded-2xl p-6 text-center">
                    <p className="text-gray-600 text-sm">Não encontrou o que procurava?</p>
                    <p className="font-bold mt-1">Entre em contato: <span className="text-red">sac@peccato.com.br</span></p>
                </div>
            </div>
        </div>
    )
}
