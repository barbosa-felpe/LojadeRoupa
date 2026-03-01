import { Link } from "react-router-dom"

import Logo from '../asset/logo.png'
import { IoCartOutline } from "react-icons/io5";

import styles from './Navbar.module.css'
import SubNavbar from "./SubNavbar";

function Navbar() {

    const produto = 'moletom'

    return (
        <>
            <nav className={styles.navbar} >

                <Link to={'/'}><img src={Logo} alt="Logo Peccato" /></Link>

                <ul>
                    <Link to='/login'><li>Login</li></Link>
                    <Link to='/'><li>Crie uma Conta</li></Link>
                    <Link to='/'><li>< IoCartOutline /></li></Link>
                </ul>
            </nav>

            <SubNavbar produto={produto} />
        </>
    )
}

export default Navbar