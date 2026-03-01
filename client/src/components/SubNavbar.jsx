import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

function SubNavbar(){
    return(
        <nav className={styles.subnavbar}>
            <ul>
                <Link to={'/categoria/camisetas'} ><li>Camisetas</li></Link>
                <Link to={'/categoria/moletons'} ><li>Moletons</li></Link>
                <Link to={'/categoria/calcas'} ><li>Calças</li></Link>
                <Link to={'/categoria/jaquetas'} ><li>Jaquetas</li></Link>
                <Link to={'/categoria/bones'} ><li>Bonés</li></Link>
                <Link to={'/categoria/gorros'} ><li>Gorros</li></Link>
                <Link to={'/categoria/acessorios'} ><li>Acessórios</li></Link>
                
                
                
                
            </ul>
        </nav>
    )
}

export default SubNavbar