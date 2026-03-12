import { useLocation } from "react-router-dom"

export default function PageHeader() {

    const titulos = [
        { path: '/categoria/camisetas', titulo: 'Camisetas' },
        { path: '/categoria/moletons', titulo: 'Moletons' },
        { path: '/categoria/calcas', titulo: 'Calças' },
        { path: '/categoria/jaquetas', titulo: 'Jaquetas' },
        { path: '/categoria/bones', titulo: 'Bonés' },
        { path: '/categoria/gorros', titulo: 'Gorros' },
        { path: '/categoria/acessorios', titulo: 'Acessórios' },
    ]

    const { pathname } = useLocation()

    const pagina = titulos.find(item => item.path === pathname)

    const breadcrumb = pathname.split('/')

    return (
        <div className="ml-3 mb-5">
            <h1 className="text-4xl mb-1 mt-5 font-bold ">{pagina ? pagina.titulo : ''}</h1>
            <p>{`${breadcrumb[1]} > ${breadcrumb[2]}`}</p>
        </div>
    )
}