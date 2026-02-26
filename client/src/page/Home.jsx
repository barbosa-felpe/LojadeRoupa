import styles from './Home.module.css'


import Navbar from "../components/Navbar"
import SwiperDisplay from '../components/Drop'
import Colecao from '../components/Colecao'
import Carroussel from '../components/Carroussel'
import Footer from '../components/Footer'

function Home() {
    return (
        <>

            <Navbar />

            <Carroussel />

            <main className={styles.main_container}>
                

                <SwiperDisplay title="Drop"/>

                <Colecao />

                <SwiperDisplay title="Lançamentos"/>
            </main>

            <Footer />
        </>
    )
}

export default Home