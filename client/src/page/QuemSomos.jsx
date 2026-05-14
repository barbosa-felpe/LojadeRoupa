export default function QuemSomos() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-red text-white py-14 px-6 text-center">
                <h1 className="text-4xl font-bold">Quem Somos</h1>
                <p className="text-white/70 mt-2">Conheça a história da Peccato</p>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-14 flex flex-col gap-14">

                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Nossa história</h2>
                    <p className="text-gray-600 leading-relaxed">
                        A Peccato nasceu em 2010 com uma missão simples: trazer moda de qualidade sem abrir mão do estilo. Começamos como uma pequena loja no sul do Brasil e, ao longo dos anos, crescemos para mais de 20 pontos de venda espalhados pelo país.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Nosso nome reflete nossa filosofia: a moda não é um pecado — é uma forma de expressão. Cada peça que desenvolvemos carrega essa essência, unindo conforto, durabilidade e tendência.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { titulo: "Missão", texto: "Oferecer moda acessível e de qualidade, permitindo que cada pessoa expresse sua identidade com autenticidade." },
                        { titulo: "Visão", texto: "Ser a marca de moda mais querida do Brasil, presente no guarda-roupa e no dia a dia de milhões de pessoas." },
                        { titulo: "Valores", texto: "Qualidade, autenticidade, sustentabilidade e respeito às pessoas — clientes, colaboradores e fornecedores." },
                    ].map(card => (
                        <div key={card.titulo} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="w-2 h-8 bg-red rounded-full mb-4" />
                            <h3 className="text-lg font-bold mb-2">{card.titulo}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{card.texto}</p>
                        </div>
                    ))}
                </div>

                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Nossos números</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { valor: "20+", label: "Lojas" },
                            { valor: "15", label: "Anos de mercado" },
                            { valor: "500+", label: "Colaboradores" },
                            { valor: "1M+", label: "Clientes satisfeitos" },
                        ].map(item => (
                            <div key={item.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                                <p className="text-3xl font-bold text-red">{item.valor}</p>
                                <p className="text-gray-500 text-sm mt-1">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
