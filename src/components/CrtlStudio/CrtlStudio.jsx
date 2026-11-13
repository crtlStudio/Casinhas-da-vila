import styles from './CrtlStudio.module.css'
import crtl from '../../assets/images/Logo_sFundo.png'


export default function CrtlStudio (){
    return(
        <>
        <footer className={styles.credits}>
            <span>Desenvolvido por</span>
            <a href="https://crtlstudio.pt" target="_blank" rel="noopener noreferrer">
                <img src={crtl} alt="crtlStudio" className={styles.creditsLogo} />
            </a>
        </footer>
        </>
    )
}