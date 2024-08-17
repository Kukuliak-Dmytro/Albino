import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import Button from "../../components/Buttons/Button"
import FeatureCard from "../../components/Cards/FeatureCard/FeatureCard"

import styles from './Home.module.scss'

import heroImg from '../../assets/heroImg.png'
import featureImg2 from '../../assets/featureImg1.png'
import featureImg3 from '../../assets/featureImg2.png'
import featureImg1 from '../../assets/featureImg3.png'



export function Home() {
   return (
      <>
         <HeaderComponent />
         {/* <div className={styles.heroWrapper}>
            <div className={styles.heroBox}>
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
         </div>
         <div className={styles.featuresWrapper}>
            <div className={styles.featuresBox}>
               <FeatureCard logoPath={featureImg1} headerText="Project management" paragraphText="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. "/>
               <FeatureCard logoPath={featureImg2} headerText="Time tracking" paragraphText="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. "/>
               <FeatureCard logoPath={featureImg3} headerText="Beautiful mobile app" paragraphText="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. "/>
            </div>
         </div> */}

      </>)

}