import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import Button from "../../components/Buttons/Button"
import FeatureCard from "../../components/Cards/FeatureCard/FeatureCard"
import StepCard from "../../components/Cards/StepCard/StepCard"
import PricingCard from "../../components/Cards/PricingCard/PricingCard"
import AccordionCard from "../../components/Cards/AccordionCard/AccordionCard"
import FooterComponent from "../../components/FooterComponent/FooterComponent"
import styles from './Home.module.scss'

import heroImg from '../../assets/heroImg.png'

import featureImg2 from '../../assets/featureImg1.png'
import featureImg3 from '../../assets/featureImg2.png'
import featureImg1 from '../../assets/featureImg3.png'

import contentImg1 from '../../assets/homeContentImg1.png'
import contentImg2 from '../../assets/homeContentImg2.png'

import testimonialImg1 from '../../assets/testimonialImg1.png'
import testimonialImg2 from '../../assets/testimonialImg2.png'





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
         <div className={styles.testimonialWrapper}>

            <div className={styles.testimonialBox}>
               <div className={styles.testimonial}>
                  <img src={testimonialImg1} alt="" />
                  <h5>“You made it so simple”</h5>
                  <p>My new site is so much faster and easier to work with than my old site.</p>
                  <h6>Corey Valdez</h6>
                  <p>Founder at Zenix</p>
               </div>
               <div className={styles.testimonial}>
                  <img src={testimonialImg2} alt="" />
                  <h5>“Simply the best”</h5>
                  <p>Better than all the rest. I’d recommend this product to beginners.</p>
                  <h6>Ian Klein</h6>
                  <p>Digital Marketer</p>
               </div>

            </div>
         </div>
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
         <div className={styles.ctaWrapper}>
            <div className={styles.ctaBox}>
               <div className={styles.ctaText}>
                  <h3>Build better landing page fast</h3>
                  <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
               </div>
               <div className={styles.ctaButtons}>
                  <button>Learn more &#8594;</button>
                  <Button height={50}>Get it now &#8594;  </Button>
               </div>
            </div>
         </div>
         <FooterComponent></FooterComponent>
      </>)

}