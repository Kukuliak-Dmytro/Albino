import styles from './HeaderComponent.module.scss'
export default function HeaderComponent(){
return(
    <div className={styles.headerWrapper}>
    <div className={styles.headerLeft}>a</div>
    <div className={styles.headerCenter}>b</div>
    <div className={styles.headerRight}>c</div>
    </div>
)
}