import styles from './ContactCard3.module.scss'
import { BiCurrentLocation } from 'react-icons/bi'
export default function ContactCard3(){
    return(        
        <div className={styles.info}>
        <button><BiCurrentLocation></BiCurrentLocation></button>
        <div>
            <h5>Call us</h5>
            <p>+1-940-394-2948</p>
            <p>+1-389-385-3807</p>
        </div>
    </div>
    )
}