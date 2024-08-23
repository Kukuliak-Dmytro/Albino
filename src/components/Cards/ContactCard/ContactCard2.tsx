import styles from './ContactCard2.module.scss'

import { useRef } from 'react';
import { BiMailSend } from 'react-icons/bi'
export default function ContactCard2() {
    const button = useRef<HTMLButtonElement>(null);
    const alert = useRef<HTMLDivElement>(null);
    const mail = useRef<HTMLParagraphElement>(null);


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
        button.current?.classList.add(`${styles.animate}`)
        alert.current!.textContent = 'Copied!';
        navigator.clipboard.writeText(mail.current!.innerHTML);
        setTimeout(() => {
            button.current?.classList.remove(`${styles.animate}`)
        }, 1000)
    }
    return (
        <div className={styles.info}>
            <div>
                <div className={styles.alert} ref={alert}  >Copy?</div>
                <button onClick={animateOnClick} ref={button} onMouseEnter={alertOnEnter} onMouseLeave={alertOnLeave}>
                    <div className={styles.slideWrapper}>
                        <BiMailSend></BiMailSend>
                    </div>
                    <div className={styles.slideWrapper}>
                        <BiMailSend></BiMailSend>
                    </div>
                    <div className={styles.slideWrapper}>
                        <BiMailSend></BiMailSend>
                    </div>
                    <div className={styles.slideWrapper}>
                        <BiMailSend></BiMailSend>
                    </div>
                    <div className={styles.slideWrapper}>
                        <BiMailSend></BiMailSend>
                    </div>
                    <div className={styles.slideWrapper}>
                        <BiMailSend></BiMailSend>
                    </div>
                    <div className={styles.slideWrapper}>
                        <BiMailSend></BiMailSend>
                    </div>
                    <div className={styles.slideWrapper}>
                        <BiMailSend></BiMailSend>
                    </div>
                    <div className={styles.slideWrapper}>
                        <BiMailSend></BiMailSend>
                      </div>
                </button>
            </div>
            <div>
                <h5>Email us</h5>
                <p ref={mail}>support@brainwave.io
                </p>
                <p>contact@brainwave.io</p>
            </div>
        </div>
    )
}