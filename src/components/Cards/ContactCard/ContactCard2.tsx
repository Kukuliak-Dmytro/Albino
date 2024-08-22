import styles from './ContactCard2.module.scss'


import { BiMailSend } from 'react-icons/bi'
export default function ContactCard2(){
    return(
        <div className={styles.info}>
                        <button>
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