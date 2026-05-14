const SECOES = [
    {
        titulo: "1. Informações que coletamos",
        texto: "Coletamos informações fornecidas por você no momento do cadastro (nome, e-mail, CPF, telefone e endereço), dados de navegação no site (páginas visitadas, produtos visualizados) e informações de pagamento — que são processadas de forma criptografada por operadoras certificadas e nunca armazenadas em nossos servidores."
    },
    {
        titulo: "2. Como usamos suas informações",
        texto: "Utilizamos seus dados para processar pedidos, enviar confirmações e atualizações de entrega, personalizar sua experiência de compra, enviar comunicações de marketing (com opção de descadastro a qualquer momento) e cumprir obrigações legais e fiscais."
    },
    {
        titulo: "3. Compartilhamento de dados",
        texto: "Não vendemos suas informações pessoais a terceiros. Podemos compartilhar dados estritamente necessários com transportadoras para entrega do pedido, operadoras de pagamento para processamento de transações, e fornecedores de tecnologia que nos auxiliam a operar o site, todos sob contrato de confidencialidade."
    },
    {
        titulo: "4. Cookies",
        texto: "Utilizamos cookies para manter sua sessão ativa, lembrar suas preferências, medir o desempenho do site e oferecer publicidade relevante. Você pode desativar cookies nas configurações do seu navegador, porém algumas funcionalidades do site podem ser afetadas."
    },
    {
        titulo: "5. Seus direitos (LGPD)",
        texto: "Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem o direito de acessar, corrigir, excluir e exportar seus dados pessoais. Para exercer esses direitos, entre em contato pelo e-mail privacidade@peccato.com.br."
    },
    {
        titulo: "6. Segurança",
        texto: "Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, vazamento ou destruição. Nosso site utiliza protocolo HTTPS e as transmissões de pagamento são protegidas por criptografia TLS."
    },
    {
        titulo: "7. Alterações nesta política",
        texto: "Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças relevantes por e-mail ou mediante aviso em destaque no site. A data da última atualização aparece ao final deste documento."
    },
]

export default function Privacidade() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-red text-white py-14 px-6 text-center">
                <h1 className="text-4xl font-bold">Política de Privacidade</h1>
                <p className="text-white/70 mt-2">Como tratamos e protegemos seus dados pessoais</p>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-14 flex flex-col gap-8">
                <p className="text-sm text-gray-400">Última atualização: 01 de maio de 2026</p>

                <p className="text-gray-600 leading-relaxed text-sm">
                    A Peccato valoriza a privacidade de seus clientes. Esta política descreve como coletamos, utilizamos e protegemos suas informações pessoais ao utilizar nosso site e serviços.
                </p>

                {SECOES.map(s => (
                    <section key={s.titulo} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-3">
                        <h2 className="font-bold">{s.titulo}</h2>
                        <p className="text-sm text-gray-500 leading-relaxed">{s.texto}</p>
                    </section>
                ))}

                <p className="text-xs text-gray-400 text-center">Dúvidas? Entre em contato: privacidade@peccato.com.br</p>
            </div>
        </div>
    )
}
