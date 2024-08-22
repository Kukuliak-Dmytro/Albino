import styles from './ContactCard2.module.scss'

import { useRef } from 'react';
import { BiMailSend } from 'react-icons/bi'
export default function ContactCard2() {
    const button = useRef<HTMLButtonElement>(null);

    const animateOnClick = () => {
        button.current?.classList.add(`${styles.animate}`)
        setTimeout(() => {
            button.current?.classList.remove(`${styles.animate}`)
        }, 1000)
    }
    return (
        <div className={styles.info}>
            <button onClick={animateOnClick} ref={button}>
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
            <div>
                <h5>Call us</h5>
                <p>+1-940-394-2948</p>
                <p>+1-389-385-3807</p>
            </div>
        </div>
    )
}