import styles from './HeaderComponent.module.scss'
import Button from '../Buttons/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom';
export default function HeaderComponent() {
    const [menuCollapsed, setMenuCollapsed] = useState(true);
    return (
        <>
            <div className={`${styles.headerWrapper} ${menuCollapsed ? '' : styles.headerShown}`}>
                <div className={styles.headerLeft}><Link to ='/Albino/'>
                    <h5>Brainwave.io</h5>
                </Link></div>
                <div className={`${styles.headerCenter} ${menuCollapsed ? '' : styles.shown}`}>
                    <ul>
                        <Link to='/Albino/about/'><li>About us</li></Link>
                        <Link to='/Albino/pricing/'><li>Pricing</li></Link>
                        <Link to=''><li>Support</li></Link>
                        <Link to=''><li>Contact</li></Link>
                    </ul>
                </div>
                <button className={styles.menuBtn} onClick={() => { setMenuCollapsed(!menuCollapsed) }}>
                    <span className={`${menuCollapsed ? "" : styles.show}`}></span>
                    <span className={`${menuCollapsed ? "" : styles.show}`}></span>
                    <span className={`${menuCollapsed ? "" : styles.show}`}></span>
                </button>


                <div className={styles.headerRight}>
                    <Button width={158}>Get started free</Button></div>
            </div >

        </>
    )
}