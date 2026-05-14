import { useState } from "react"
import { Link } from "react-router-dom"
import { Trash2, ShoppingBag } from "lucide-react"

const INITIAL_ITEMS = [
    { id: 1, title: "Camiseta Básica Preta", sku: "CAM-001", price: 89.90, qty: 1, src: null },
    { id: 2, title: "Calça Slim Fit", sku: "CAL-042", price: 232.00, qty: 1, src: null },
]

function CartItem({ item, onRemove, onQtyChange }) {
    return (
        <div className="flex items-center gap-6 bg-gray-100 p-6 rounded-2xl shadow-sm">

            {item.src
                ? <img className="w-28 h-28 rounded-xl object-cover bg-white shrink-0" src={item.src} alt={item.title} />
                : <div className="w-28 h-28 shrink-0 rounded-xl border-2 border-gray-200 bg-white flex justify-center items-center text-xs font-bold text-gray-400 text-center">Sem Imagem</div>
            }

            <div className="flex flex-1 items-center justify-between gap-4 flex-wrap">

                <div className="flex flex-col gap-1 min-w-[120px]">
                    <h2 className="text-lg font-bold leading-tight">{item.title}</h2>
                    <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                </div>

                <div className="flex items-center border-1 border-gray-200 rounded-2xl overflow-hidden bg-white text-lg">
                    <button
                        onClick={() => onQtyChange(item.id, item.qty - 1)}
                        className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                    >−</button>
                    <span className="w-9 h-9 flex items-center justify-center font-medium select-none border-x-1 border-gray-200">{item.qty}</span>
                    <button
                        onClick={() => onQtyChange(item.id, item.qty + 1)}
                        className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                    >+</button>
                </div>

                <span className="font-bold text-lg min-w-[80px] text-right">
                    R$ {(item.price * item.qty).toFixed(2).replace('.', ',')}
                </span>

                <button
                    onClick={() => onRemove(item.id)}
                    className="text-gray-400 hover:text-red transition-colors cursor-pointer"
                    title="Remover item"
                >
                    <Trash2 size={20} />
                </button>
            </div>
        </div>
    )
}

function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center gap-5 py-24 text-center">
            <ShoppingBag size={72} className="text-gray-300" strokeWidth={1.2} />
            <h2 className="text-2xl font-bold text-gray-700">Seu carrinho está vazio</h2>
            <p className="text-gray-400 max-w-xs">Você ainda não adicionou nenhum produto. Explore nossa loja e encontre algo que você vai amar.</p>
            <Link
                to="/categoria/todas"
                className="mt-2 bg-red text-white px-8 h-12 rounded-xl flex items-center transition-all hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:bg-[#A11515]"
            >
                Explorar produtos
            </Link>
        </div>
    )
}

export default function Cart() {
    const [items, setItems] = useState(INITIAL_ITEMS)
    const [coupon, setCoupon] = useState("")

    const subtotal = items.reduce((acc, i) => acc + i.price * i.qty, 0)
    const shipping = items.length > 0 ? 20 : 0
    const discount = 0
    const total = subtotal + shipping - discount

    function handleRemove(id) {
        setItems(prev => prev.filter(i => i.id !== id))
    }

    function handleQtyChange(id, newQty) {
        if (newQty < 1) return
        setItems(prev => prev.map(i => i.id === id ? { ...i, qty: newQty } : i))
    }

    return (
        <main className="min-h-screen w-full flex justify-center gap-10 p-10">

            <section className="flex flex-col w-[65%]">
                <h1 className="text-4xl py-5 font-bold">
                    Carrinho
                    {items.length > 0 && (
                        <span className="ml-3 text-lg font-normal text-gray-400">({items.length} {items.length === 1 ? 'item' : 'itens'})</span>
                    )}
                </h1>

                {items.length === 0
                    ? <EmptyCart />
                    : (
                        <div className="flex flex-col gap-4">
                            {items.map(item => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onRemove={handleRemove}
                                    onQtyChange={handleQtyChange}
                                />
                            ))}
                        </div>
                    )
                }
            </section>

            {items.length > 0 && (
                <section className="flex items-start mt-20 w-[25%]">
                    <div className="bg-gray-100 shadow-2xl p-6 rounded-2xl w-full flex flex-col gap-4">
                        <h2 className="text-2xl font-bold">Resumo do pedido</h2>

                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={coupon}
                                onChange={e => setCoupon(e.target.value)}
                                placeholder="Código do cupom"
                                className="bg-white border-1 px-4 border-gray-200 rounded-xl flex-1 h-10 text-sm"
                            />
                            <button className="bg-red text-white px-4 rounded-xl text-sm cursor-pointer hover:bg-[#A11515] transition-colors h-10">
                                Aplicar
                            </button>
                        </div>

                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex justify-between">
                                <span className="font-bold">Subtotal:</span>
                                <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold">Desconto:</span>
                                <span className="text-green-600">− R$ {discount.toFixed(2).replace('.', ',')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold">Frete:</span>
                                <span>R$ {shipping.toFixed(2).replace('.', ',')}</span>
                            </div>
                        </div>

                        <hr className="border-gray-300" />

                        <div className="flex justify-between font-bold text-lg">
                            <span>Total:</span>
                            <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                        </div>

                        <Link
                            to="/checkout"
                            className="bg-red text-white h-12 w-full rounded-xl transition-all hover:-translate-y-2 hover:shadow-xl active:translate-y-0 active:bg-[#A11515] cursor-pointer font-medium flex items-center justify-center"
                        >
                            Finalizar pedido
                        </Link>
                    </div>
                </section>
            )}
        </main>
    )
}
