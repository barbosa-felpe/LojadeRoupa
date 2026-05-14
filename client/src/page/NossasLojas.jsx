import { MapPin, Clock, Phone } from "lucide-react"

const LOJAS = [
    { cidade: "Cascavel – PR", endereco: "Av. Brasil, 1.200 – Centro", horario: "Seg a Sex: 9h–20h | Sáb: 9h–18h | Dom: 10h–16h", tel: "(45) 3321-0000" },
    { cidade: "Londrina – PR", endereco: "Rua Minas Gerais, 550 – Centro", horario: "Seg a Sex: 9h–20h | Sáb: 9h–18h | Dom: 10h–16h", tel: "(43) 3322-1111" },
    { cidade: "Maringá – PR", endereco: "Av. Brasil, 800 – Zona 01", horario: "Seg a Sex: 9h–20h | Sáb: 9h–18h | Dom: 10h–16h", tel: "(44) 3323-2222" },
    { cidade: "Curitiba – PR", endereco: "Rua XV de Novembro, 300 – Centro", horario: "Seg a Sex: 9h–21h | Sáb: 9h–19h | Dom: 11h–17h", tel: "(41) 3324-3333" },
    { cidade: "São Paulo – SP", endereco: "Rua Augusta, 1.500 – Consolação", horario: "Seg a Sex: 10h–21h | Sáb: 10h–20h | Dom: 12h–18h", tel: "(11) 3325-4444" },
    { cidade: "Florianópolis – SC", endereco: "Av. Beira Mar Norte, 200 – Centro", horario: "Seg a Sex: 9h–20h | Sáb: 9h–18h | Dom: 10h–16h", tel: "(48) 3326-5555" },
]

export default function NossasLojas() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-red text-white py-14 px-6 text-center">
                <h1 className="text-4xl font-bold">Nossas Lojas</h1>
                <p className="text-white/70 mt-2">Encontre a loja Peccato mais próxima de você</p>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col gap-6">
                <p className="text-gray-500 text-sm">Mostrando <strong>{LOJAS.length}</strong> lojas</p>

                <div className="grid md:grid-cols-2 gap-5">
                    {LOJAS.map(loja => (
                        <div key={loja.cidade} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-3">
                            <h2 className="font-bold text-lg">{loja.cidade}</h2>
                            <div className="flex flex-col gap-2 text-sm text-gray-500">
                                <div className="flex gap-2 items-start">
                                    <MapPin size={15} className="text-red shrink-0 mt-0.5" />
                                    <span>{loja.endereco}</span>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <Clock size={15} className="text-red shrink-0 mt-0.5" />
                                    <span>{loja.horario}</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Phone size={15} className="text-red shrink-0" />
                                    <span>{loja.tel}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
