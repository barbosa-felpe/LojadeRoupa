import styles from './Navbar.module.css'

function SubNavbar(){
    return(
        <nav className={styles.subnavbar}>
            <ul>
                <li>Camisetas</li>
                <li>Moletons</li>
                <li>Calças</li>
                <li>Jaquetas</li>
                <li>Bonés</li>
                <li>Gorros</li>
                <li>Acessórios</li>
            </ul>
        </nav>
    )
}

export default SubNavbar