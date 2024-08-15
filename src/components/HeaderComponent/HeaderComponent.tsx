import styles from './HeaderComponent.module.scss'
import Button from '../Button/Button'
export default function HeaderComponent(){
return(
    <div className={styles.headerWrapper}>
    <div className={styles.headerLeft}><h5>Brainwave.io</h5></div>
    <div className={styles.headerCenter}><ul>
        <li><a href="">About us</a></li>
        <li><a href="">Pages</a></li>
        <li><a href="">Support</a></li>
        <li><a href="">Contact</a></li></ul></div>
    <div className={styles.headerRight}><Button width={158}>Get started free</Button></div>
    </div>
)
}