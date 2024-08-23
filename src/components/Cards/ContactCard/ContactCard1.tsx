import styles from './ContactCard1.module.scss'
import { BiPhone } from 'react-icons/bi'
import { useRef } from 'react';
export default function ContactCard1() {
    const button = useRef<HTMLButtonElement>(null);
    const alert = useRef<HTMLDivElement>(null);
    const phoneNumber = useRef<HTMLParagraphElement>(null);


    const alertOnEnter = () => {
        alert.current!.classList.add(`${styles.active}`);
    }
    const alertOnLeave = () => {
        alert.current!.classList.remove(`${styles.active}`);
        setTimeout(() => {
            alert.current!.textContent = 'Copy?';

        }, 250)
    }
    const animateOnClick = () => {
        button.current!.classList.add(`${styles.animate}`)
        alert.current!.textContent = 'Copied!';
        navigator.clipboard.writeText(phoneNumber.current!.innerHTML);
        setTimeout(() => {
            button.current!.classList.remove(`${styles.animate}`)

        }, 400)
    }

    return (
        <div className={styles.info}>
            <button onClick={animateOnClick} ref={button} onMouseEnter={alertOnEnter} onMouseLeave={alertOnLeave}>

                <BiPhone></BiPhone>
                <div className={styles.alert} ref={alert}  >Copy?</div>

            </button>
            <div>
                <h5>Call us</h5>
                <p ref={phoneNumber}>+1-940-394-2948</p>
                <p>+1-389-385-3807</p>
            </div>
        </div>
    )
}