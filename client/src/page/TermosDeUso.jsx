const SECOES = [
    {
        titulo: "1. Aceitação dos termos",
        texto: "Ao acessar e utilizar o site da Peccato, você concorda com estes Termos de Uso. Caso não concorde com alguma disposição, recomendamos que não utilize nossos serviços."
    },
    {
        titulo: "2. Cadastro e conta",
        texto: "Para realizar compras, você deve criar uma conta com informações verdadeiras e atualizadas. É sua responsabilidade manter a confidencialidade de sua senha e notificar-nos imediatamente em caso de uso não autorizado de sua conta."
    },
    {
        titulo: "3. Produtos e preços",
        texto: "Nos reservamos o direito de alterar preços, descrições e disponibilidade de produtos a qualquer momento sem aviso prévio. Erros de preço poderão resultar no cancelamento do pedido, com reembolso integral ao cliente."
    },
    {
        titulo: "4. Pedidos e pagamentos",
        texto: "A confirmação do pedido está sujeita à aprovação do pagamento e disponibilidade em estoque. Reservamo-nos o direito de recusar ou cancelar pedidos em casos de suspeita de fraude ou inconsistência nos dados fornecidos."
    },
    {
        titulo: "5. Propriedade intelectual",
        texto: "Todo o conteúdo do site (textos, imagens, logotipos, layout e código) é propriedade da Peccato e protegido por leis de direitos autorais. É proibida a reprodução sem autorização prévia por escrito."
    },
    {
        titulo: "6. Limitação de responsabilidade",
        texto: "A Peccato não se responsabiliza por danos indiretos, incidentais ou consequentes decorrentes do uso do site. Nossa responsabilidade máxima fica limitada ao valor do pedido em questão."
    },
    {
        titulo: "7. Legislação aplicável",
        texto: "Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de Cascavel – PR para dirimir eventuais conflitos."
    },
]

export default function TermosDeUso() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-red text-white py-14 px-6 text-center">
                <h1 className="text-4xl font-bold">Termos de Uso</h1>
                <p className="text-white/70 mt-2">Regras e condições para uso dos nossos serviços</p>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-14 flex flex-col gap-8">
                <p className="text-sm text-gray-400">Última atualização: 01 de maio de 2026</p>

                <p className="text-gray-600 leading-relaxed text-sm">
                    Estes Termos de Uso regulam a relação entre a Peccato Moda (CNPJ 26.636.428/0001-19) e os usuários do site. Leia com atenção antes de utilizar nossos serviços.
                </p>

                {SECOES.map(s => (
                    <section key={s.titulo} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-3">
                        <h2 className="font-bold">{s.titulo}</h2>
                        <p className="text-sm text-gray-500 leading-relaxed">{s.texto}</p>
                    </section>
                ))}

                <p className="text-xs text-gray-400 text-center">Dúvidas? Entre em contato: juridico@peccato.com.br</p>
            </div>
        </div>
    )
}
