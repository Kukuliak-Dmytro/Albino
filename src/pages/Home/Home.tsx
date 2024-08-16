import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import Button from "../../components/Button/Button"
import styles from './Home.module.scss'
import heroImg from '../../assets/heroImg.png'

export function Home() {
   return (
      <>
         <HeaderComponent />
         <div className={styles.heroWrapper}>
            <div className={styles.heroText}>
               <h1>Get things done by awesome remote team</h1>
               <p>We share common trends and strategies for improving your rental income and making sure you stay in high demand.</p>
               <span>
                  <Button width={227} height={59}>Get started for free &#8594;</Button>
                  <h6><a href="">Learn more</a></h6>
               </span>
            </div>
          
            <div className={styles.heroImg}>
               <img src={heroImg} alt="" />
            </div>
         </div>

      </>)

}