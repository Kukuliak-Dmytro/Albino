import styles from './HeaderComponent.module.scss'
import Button from '../Buttons/Button'
import { useState } from 'react'
export default function HeaderComponent() {
    const [menuCollapsed, setMenuCollapsed]=useState(true);
    return (
    <div className={styles.headerWrapper}>
    <div className={styles.headerLeft}><h5>Brainwave.io</h5></div>
    <div className={`${styles.headerCenter} ${menuCollapsed ? '' : styles.shown}`}>
        <ul>
        <a href=""><li>About us</li></a>
        <a href=""><li>Pages</li></a>
        <a href=""><li>Support</li></a>
        <a href=""><li>Contact</li></a>
        </ul>
        </div>
        <button className={styles.toggleBtn} onClick={()=>setMenuCollapsed(!menuCollapsed)}>dfdX</button>

    <div className={styles.headerRight}>
        <Button width={158}>Get started free</Button></div>
    </div >
)
}