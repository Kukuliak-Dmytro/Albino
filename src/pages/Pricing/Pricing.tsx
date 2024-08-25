import styles from './Pricing.module.scss'
import AccordionCard from '../../components/Cards/AccordionCard/AccordionCard'
import PricingCard from '../../components/Cards/PricingCard/PricingCard'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'
export function Pricing() {
   return (
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
                  <AccordionCard
                     header="Can I use Albino for my clients?"
                     content="Yes, you can use Albino for your clients' projects. The license covers personal and commercial use, allowing you to create and deliver projects for your clients without any restrictions."
                  />
                  <AccordionCard
                     header="Does it work with WordPress?"
                     content="Albino is designed to integrate seamlessly with WordPress. It provides easy-to-use templates and blocks that are fully compatible with the latest versions of WordPress, enabling you to create stunning websites quickly."
                  />
                  <AccordionCard
                     header="Do I get free updates?"
                     content="Yes, purchasing Albino grants you access to free updates. Whenever new features, improvements, or security patches are released, you will receive them at no additional cost, ensuring your projects stay up-to-date."
                  />
                  <AccordionCard
                     header="Will you provide support?"
                     content="Absolutely! We offer dedicated support to help you with any issues or questions you may have while using Albino. Our support team is available to assist you with setup, customization, and troubleshooting."
                  />

                  <a href="#">Click to learn more &#8594;</a>


               </div>
               <div className={styles.contact}>Haven't got your answer? <a href="">Contact our support now</a></div>

            </div>

         </div>
         <FooterComponent></FooterComponent>
      </>
   )
}