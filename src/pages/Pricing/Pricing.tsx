import styles from './Pricing.module.scss'
import AccordionCard from '../../components/Cards/AccordionCard/AccordionCard'
import PricingCard from '../../components/Cards/PricingCard/PricingCard'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'
export function Pricing(){
    return(
      <>
      <HeaderComponent></HeaderComponent>
        <div className={styles.pricingWrapper}>
        <div className={styles.pricingBox}>
           <h2>Pricing & Plans</h2>
           <span>
              <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
           </span>
           <div className={styles.pricingCards}>
              <PricingCard tier="BASIC" price={29}></PricingCard>
              <PricingCard tier="STANDART" price={49}></PricingCard>
              <PricingCard tier="PREMIUM" price={99}></PricingCard>
           </div>
           <div className={styles.faq}>
             <AccordionCard     />
             <AccordionCard     />
             <AccordionCard     />
             <AccordionCard     />
          <a href="#">Click to learn more &#8594;</a>
              

           </div>
           <div className={styles.contact}>Haven't got your answer? <a href="">Contact our support now</a></div>
           
        </div>

     </div>
     <FooterComponent></FooterComponent>
     </>
    )
}