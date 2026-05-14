import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CheckCircle2, ChevronRight, CreditCard, QrCode, FileText, Package } from "lucide-react"
import Logo from "../asset/logo_vermelha.png"

const SUMMARY_ITEMS = [
    { id: 1, title: "Camiseta Básica Preta", qty: 1, price: 89.90 },
    { id: 2, title: "Calça Slim Fit", qty: 1, price: 232.00 },
]

const STEPS = ["Entrega", "Pagamento", "Confirmação"]

function StepIndicator({ current }) {
    return (
        <div className="flex items-center gap-2 mb-10">
            {STEPS.map((label, i) => {
                const done = i < current
                const active = i === current
                return (
                    <div key={i} className="flex items-center gap-2">
                        <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors
                                ${done ? "bg-green-500 text-white" : active ? "bg-red text-white" : "bg-gray-200 text-gray-400"}`}>
                                {done ? <CheckCircle2 size={16} /> : i + 1}
                            </div>
                            <span className={`text-sm font-medium ${active ? "text-red" : done ? "text-green-500" : "text-gray-400"}`}>
                                {label}
                            </span>
                        </div>
                        {i < STEPS.length - 1 && (
                            <ChevronRight size={16} className="text-gray-300 mx-1" />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

function InputField({ label, ...props }) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-bold">{label}</label>
            <input
                className="bg-white h-11 border-1 border-gray-200 rounded-xl px-4 box-border text-sm focus:outline-none focus:border-red transition-colors"
                {...props}
            />
        </div>
    )
}

function Step1Entrega({ data, onChange, onNext }) {
    function handleSubmit(e) {
        e.preventDefault()
        onNext()
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Endereço de entrega</h2>

            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                    <InputField label="Nome completo" placeholder="Seu nome" value={data.nome} onChange={e => onChange("nome", e.target.value)} required />
                </div>
                <InputField label="CPF" placeholder="000.000.000-00" value={data.cpf} onChange={e => onChange("cpf", e.target.value)} required />
                <InputField label="Telefone" placeholder="(00) 00000-0000" value={data.telefone} onChange={e => onChange("telefone", e.target.value)} required />
                <InputField label="CEP" placeholder="00000-000" value={data.cep} onChange={e => onChange("cep", e.target.value)} required />
                <InputField label="Estado" placeholder="SP" value={data.estado} onChange={e => onChange("estado", e.target.value)} required />
                <div className="col-span-2">
                    <InputField label="Endereço" placeholder="Rua, Avenida..." value={data.endereco} onChange={e => onChange("endereco", e.target.value)} required />
                </div>
                <InputField label="Número" placeholder="123" value={data.numero} onChange={e => onChange("numero", e.target.value)} required />
                <InputField label="Complemento" placeholder="Apto, Bloco..." value={data.complemento} onChange={e => onChange("complemento", e.target.value)} />
                <InputField label="Bairro" placeholder="Seu bairro" value={data.bairro} onChange={e => onChange("bairro", e.target.value)} required />
                <InputField label="Cidade" placeholder="Sua cidade" value={data.cidade} onChange={e => onChange("cidade", e.target.value)} required />
            </div>

            <button className="bg-red text-white h-12 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:bg-[#A11515] cursor-pointer font-medium mt-2">
                Continuar para pagamento
            </button>
        </form>
    )
}

function Step2Pagamento({ data, onChange, onNext, onBack }) {
    const methods = [
        { id: "cartao", label: "Cartão de crédito", icon: <CreditCard size={18} /> },
        { id: "pix", label: "PIX", icon: <QrCode size={18} /> },
        { id: "boleto", label: "Boleto bancário", icon: <FileText size={18} /> },
    ]

    function handleSubmit(e) {
        e.preventDefault()
        onNext()
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Forma de pagamento</h2>

            <div className="flex flex-col gap-2">
                {methods.map(m => (
                    <label key={m.id} className={`flex items-center gap-3 border-2 rounded-xl p-4 cursor-pointer transition-colors
                        ${data.metodo === m.id ? "border-red bg-red/5" : "border-gray-200 hover:border-gray-300"}`}>
                        <input
                            type="radio"
                            name="metodo"
                            value={m.id}
                            checked={data.metodo === m.id}
                            onChange={() => onChange("metodo", m.id)}
                            className="accent-red"
                        />
                        <span className="text-red">{m.icon}</span>
                        <span className="font-medium">{m.label}</span>
                    </label>
                ))}
            </div>

            {data.metodo === "cartao" && (
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-5 rounded-xl border-1 border-gray-200">
                    <div className="col-span-2">
                        <InputField label="Número do cartão" placeholder="0000 0000 0000 0000" value={data.numero} onChange={e => onChange("numero", e.target.value)} required />
                    </div>
                    <div className="col-span-2">
                        <InputField label="Nome no cartão" placeholder="Como está no cartão" value={data.nomeCartao} onChange={e => onChange("nomeCartao", e.target.value)} required />
                    </div>
                    <InputField label="Validade" placeholder="MM/AA" value={data.validade} onChange={e => onChange("validade", e.target.value)} required />
                    <InputField label="CVV" placeholder="000" value={data.cvv} onChange={e => onChange("cvv", e.target.value)} required />
                    <div className="col-span-2 flex flex-col gap-1">
                        <label className="text-sm font-bold">Parcelas</label>
                        <select
                            className="bg-white h-11 border-1 border-gray-200 rounded-xl px-4 text-sm focus:outline-none focus:border-red transition-colors"
                            value={data.parcelas}
                            onChange={e => onChange("parcelas", e.target.value)}
                        >
                            <option value="1">1x sem juros</option>
                            <option value="2">2x sem juros</option>
                            <option value="3">3x sem juros</option>
                            <option value="6">6x sem juros</option>
                            <option value="12">12x com juros</option>
                        </select>
                    </div>
                </div>
            )}

            {data.metodo === "pix" && (
                <div className="flex flex-col items-center gap-3 bg-gray-50 p-6 rounded-xl border-1 border-gray-200">
                    <div className="w-36 h-36 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center">
                        <QrCode size={80} className="text-gray-300" />
                    </div>
                    <p className="text-sm text-gray-500 text-center">O QR Code será gerado após confirmar o pedido.</p>
                    <div className="bg-white border-1 border-gray-200 rounded-xl px-4 py-2 text-sm font-mono text-gray-600 w-full text-center">
                        peccato@loja.com.br
                    </div>
                </div>
            )}

            {data.metodo === "boleto" && (
                <div className="flex flex-col gap-3 bg-gray-50 p-6 rounded-xl border-1 border-gray-200">
                    <div className="flex items-center gap-2 text-gray-500">
                        <FileText size={20} />
                        <span className="text-sm">O boleto será gerado após confirmar o pedido e vence em <strong>3 dias úteis</strong>.</span>
                    </div>
                    <p className="text-xs text-gray-400">O pedido só será processado após a confirmação do pagamento.</p>
                </div>
            )}

            <div className="flex gap-3 mt-2">
                <button type="button" onClick={onBack}
                    className="flex-1 h-12 rounded-xl border-2 border-gray-200 font-medium cursor-pointer hover:bg-gray-50 transition-colors">
                    Voltar
                </button>
                <button className="flex-[2] bg-red text-white h-12 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:bg-[#A11515] cursor-pointer font-medium">
                    Revisar pedido
                </button>
            </div>
        </form>
    )
}

function Step3Confirmacao({ entrega, pagamento, subtotal, shipping, total, onBack, onConfirm }) {
    const metodoLabel = { cartao: "Cartão de crédito", pix: "PIX", boleto: "Boleto bancário" }

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Revise seu pedido</h2>

            <div className="bg-gray-50 rounded-xl border-1 border-gray-200 p-5 flex flex-col gap-3">
                <h3 className="font-bold text-sm uppercase tracking-wide text-gray-400">Endereço de entrega</h3>
                <p className="font-medium">{entrega.nome}</p>
                <p className="text-sm text-gray-600">
                    {entrega.endereco}, {entrega.numero}{entrega.complemento ? ` - ${entrega.complemento}` : ""}<br />
                    {entrega.bairro} — {entrega.cidade}, {entrega.estado} — CEP {entrega.cep}
                </p>
            </div>

            <div className="bg-gray-50 rounded-xl border-1 border-gray-200 p-5 flex flex-col gap-2">
                <h3 className="font-bold text-sm uppercase tracking-wide text-gray-400">Pagamento</h3>
                <p className="font-medium">{metodoLabel[pagamento.metodo] || "—"}</p>
                {pagamento.metodo === "cartao" && pagamento.numero && (
                    <p className="text-sm text-gray-600">**** **** **** {pagamento.numero.slice(-4)}{pagamento.parcelas > 1 ? ` · ${pagamento.parcelas}x` : ""}</p>
                )}
            </div>

            <div className="flex gap-3 mt-2">
                <button onClick={onBack}
                    className="flex-1 h-12 rounded-xl border-2 border-gray-200 font-medium cursor-pointer hover:bg-gray-50 transition-colors">
                    Voltar
                </button>
                <button onClick={onConfirm}
                    className="flex-[2] bg-red text-white h-12 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:bg-[#A11515] cursor-pointer font-medium">
                    Confirmar pedido
                </button>
            </div>
        </div>
    )
}

function Sucesso() {
    return (
        <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
            <div className="bg-green-100 rounded-full p-5">
                <Package size={52} className="text-green-600" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-bold">Pedido confirmado!</h2>
            <p className="text-gray-500 max-w-sm">
                Seu pedido foi recebido e está sendo processado. Você receberá um e-mail com os detalhes em breve.
            </p>
            <p className="text-sm text-gray-400">Pedido <span className="font-bold text-black">#PEC-{Math.floor(Math.random() * 90000) + 10000}</span></p>
            <Link
                to="/"
                className="mt-3 bg-red text-white px-10 h-12 rounded-xl flex items-center transition-all hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:bg-[#A11515]"
            >
                Voltar para a loja
            </Link>
        </div>
    )
}

export default function Checkout() {
    const [step, setStep] = useState(0)
    const [done, setDone] = useState(false)

    const [entrega, setEntrega] = useState({
        nome: "", cpf: "", telefone: "", cep: "", estado: "",
        endereco: "", numero: "", complemento: "", bairro: "", cidade: "",
    })
    const [pagamento, setPagamento] = useState({
        metodo: "cartao", numero: "", nomeCartao: "", validade: "", cvv: "", parcelas: "1",
    })

    const subtotal = SUMMARY_ITEMS.reduce((acc, i) => acc + i.price * i.qty, 0)
    const shipping = 20
    const total = subtotal + shipping

    function changeEntrega(field, val) { setEntrega(p => ({ ...p, [field]: val })) }
    function changePagamento(field, val) { setPagamento(p => ({ ...p, [field]: val })) }

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">

            <header className="bg-white border-b border-gray-200 px-10 py-4 flex items-center">
                <Link to="/"><img src={Logo} alt="Peccato" className="h-10 w-auto" /></Link>
                <span className="ml-6 text-gray-400 text-sm hidden sm:block">Checkout seguro</span>
            </header>

            <div className="flex justify-center gap-10 p-10 flex-1">

                <section className="bg-white rounded-2xl shadow-sm border-1 border-gray-100 p-8 w-[60%]">
                    {done ? (
                        <Sucesso />
                    ) : (
                        <>
                            <StepIndicator current={step} />
                            {step === 0 && <Step1Entrega data={entrega} onChange={changeEntrega} onNext={() => setStep(1)} />}
                            {step === 1 && <Step2Pagamento data={pagamento} onChange={changePagamento} onNext={() => setStep(2)} onBack={() => setStep(0)} />}
                            {step === 2 && (
                                <Step3Confirmacao
                                    entrega={entrega}
                                    pagamento={pagamento}
                                    subtotal={subtotal}
                                    shipping={shipping}
                                    total={total}
                                    onBack={() => setStep(1)}
                                    onConfirm={() => setDone(true)}
                                />
                            )}
                        </>
                    )}
                </section>

                {!done && (
                    <aside className="w-[28%]">
                        <div className="bg-white rounded-2xl shadow-sm border-1 border-gray-100 p-6 flex flex-col gap-4 sticky top-10">
                            <h2 className="text-lg font-bold">Resumo do pedido</h2>

                            <div className="flex flex-col gap-3">
                                {SUMMARY_ITEMS.map(item => (
                                    <div key={item.id} className="flex justify-between items-start text-sm gap-3">
                                        <span className="text-gray-600 leading-tight">{item.title} <span className="text-gray-400">×{item.qty}</span></span>
                                        <span className="font-medium whitespace-nowrap">R$ {(item.price * item.qty).toFixed(2).replace('.', ',')}</span>
                                    </div>
                                ))}
                            </div>

                            <hr className="border-gray-200" />

                            <div className="flex flex-col gap-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Subtotal</span>
                                    <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Frete</span>
                                    <span>R$ {shipping.toFixed(2).replace('.', ',')}</span>
                                </div>
                            </div>

                            <hr className="border-gray-200" />

                            <div className="flex justify-between font-bold text-base">
                                <span>Total</span>
                                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                            </div>
                        </div>
                    </aside>
                )}
            </div>
        </main>
    )
}
