import styles from './Error.module.css';
import Latrel from '../../assets/latrel-error-nofx.PNG'
import GoHome from 'components/GoHome';

export default function Error() {
    return(
        <div className={styles.content}>
            <div>
                <img 
                    className={styles.image} 
                    src={Latrel} 
                    alt="" 
                />
            </div>

            <div className={styles.error}>
                <h1>ERROR!</h1>
                <h5>Não sabemos se foi culpa sua ou nossa...(com certeza sua, nós raramente erramos). Mas por favor, clique no botão abaixo para ser redirecionado ao Início!</h5>
                <button className={styles.errorbtn} onClick={GoHome}>Início</button>
            </div>
        </div>
    )    
}