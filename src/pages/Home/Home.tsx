import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import Button from "../../components/Buttons/Button"
import FeatureCard from "../../components/Cards/FeatureCard/FeatureCard"
import StepCard from "../../components/Cards/StepCard/StepCard"

import styles from './Home.module.scss'

import heroImg from '../../assets/heroImg.png'

import featureImg2 from '../../assets/featureImg1.png'
import featureImg3 from '../../assets/featureImg2.png'
import featureImg1 from '../../assets/featureImg3.png'

import contentImg1 from '../../assets/contentImg1.png'
import contentImg2 from '../../assets/contentImg2.png'




export function Home() {
   return (
      <>
         <HeaderComponent />
         <div className={styles.heroWrapper}>
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
               <FeatureCard logoPath={featureImg1} headerText="Project management" paragraphText="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. " />
               <FeatureCard logoPath={featureImg2} headerText="Time tracking" paragraphText="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. " />
               <FeatureCard logoPath={featureImg3} headerText="Beautiful mobile app" paragraphText="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. " />
            </div>
         </div>
         <div className={styles.contentWrapper1}>
            <div className={styles.contentBox1}>
               <div className={styles.contentText1}>
                  <h2>Getting started with Albino is easier than ever</h2>
                  <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino.</p>
                  <Button width={227} height={59}>Get started for free &#8594;</Button>
               </div>
               <div className={styles.contentImg1}>
                  <img src={contentImg1} alt="" />
               </div>

            </div>
         </div>
         <div className={styles.factsWrapper}>
            <div className={styles.factsBox}>
               <div className={styles.fact}>
                  <h1>1M+</h1>
                  <p>Customers visit Albino every months</p>
               </div>
               <div className={styles.fact}>
                  <h1>93%</h1>
                  <p>Satisfaction rate from our customers.</p>
               </div>
               <div className={styles.fact}>
                  <h1>4.9</h1>
                  <p>Average customer ratings out of 5.00!</p>
               </div>

            </div>
         </div>
         <div className={styles.contentWrapper2}>
            <div className={styles.contentBox2}>
               <div className={styles.contentText2}>
                  <h2>Manage your projects fast</h2>
                  <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
               </div>
               <div className={styles.contentImg2}>
                  <div><img src={contentImg2} alt="" /></div>
                  <div className={styles.stepsBox}>
                     <StepCard listNumber={1} headerText="Create a project" paragraphText="With lots of unique blocks, you can easily build a page without coding. "></StepCard>
                     <StepCard listNumber={2} headerText="Assign related people" paragraphText="With lots of unique blocks, you can easily build a page without coding. "></StepCard>
                     <StepCard listNumber={3} headerText="Make it done on-time" paragraphText="With lots of unique blocks, you can easily build a page without coding. "></StepCard>
                  </div>
               </div>
            </div>
         </div>
      </>)

}