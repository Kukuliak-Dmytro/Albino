import styles from './ContactCard3.module.scss'
import { GrLocation } from "react-icons/gr";
import { useRef } from 'react';

export default function ContactCard3() {
    const button = useRef<HTMLButtonElement>(null);
    const alert = useRef<HTMLDivElement>(null);
    const locationText = useRef<HTMLParagraphElement>(null);

    const alertOnEnter = () => {
        alert.current!.classList.add(`${styles.active}`);
    }

    const alertOnLeave = () => {
        alert.current!.classList.remove(`${styles.active}`);
        setTimeout(() => {
            alert.current!.textContent = 'Copy?';
        }, 250);
    }

    const animateOnClick = () => {
        button.current!.classList.add(`${styles.animate}`);
        alert.current!.textContent = 'Copied!';
        if(locationText.current?.textContent!=null)
        navigator.clipboard.writeText(locationText.current.textContent);
        setTimeout(() => {
            button.current!.classList.remove(`${styles.animate}`);
        }, 400);
    }

    return (
        <div className={styles.info}>
            <button onClick={animateOnClick} ref={button} onMouseEnter={alertOnEnter} onMouseLeave={alertOnLeave}>
                <div className={styles.svgWrapper}>
                    <GrLocation></GrLocation>
                </div>
                <div className={styles.alert} ref={alert}>Copy?</div>
            </button>
            <div>
                <h5>Visit us</h5>
                <p ref={locationText}>34 Madison Street,<br /> NY, USA 10005</p>
            
            </div>
        </div>
    );
}
