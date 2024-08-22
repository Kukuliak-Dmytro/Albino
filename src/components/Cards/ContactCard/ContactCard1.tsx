import styles from './ContactCard1.module.scss'
import { BiPhone } from 'react-icons/bi'
import { useRef } from 'react';
export default function ContactCard1() {
    const button = useRef<HTMLButtonElement>(null);

    const animateOnClick = () => {
        button.current?.classList.add(`${styles.animate}`)
        setTimeout(() => {
            button.current?.classList.remove(`${styles.animate}`)
        }, 1000)
    }
    return (
        <div className={styles.info}>
            <button onClick={animateOnClick} ref={button}><BiPhone></BiPhone></button>
            <div>
                <h5>Call us</h5>
                <p>+1-940-394-2948</p>
                <p>+1-389-385-3807</p>
            </div>
        </div>
    )
}