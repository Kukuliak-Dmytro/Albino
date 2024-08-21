import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import TeammateCard from "../../components/Cards/TeammateCard/TeammateCard";

import styles from './About.module.scss'



import aboutImg from '../.././assets/aboutImg.png'

import contentImg1 from '../../assets/aboutContentImg1.png'
import contentImg2 from '../../assets/aboutContentImg2.png'
import contentImg3 from '../../assets/aboutContentImg3.png'
import contentImg4 from '../../assets/aboutContentImg4.png'

import teamImg1 from '../../assets/teamImg1.png'
import teamImg2 from '../../assets/teamImg2.png'
import teamImg3 from '../../assets/teamImg3.png'
import teamImg4 from '../../assets/teamImg4.png'
import teamImg5 from '../../assets/teamImg5.png'
import teamImg6 from '../../assets/teamImg6.png'
import teamImg7 from '../../assets/teamImg7.png'


export function About() {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <div className={styles.heroWrapper}>
                <div className={styles.heroBox}>
                    <h1>Our story</h1>
                    <p>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                    <img src={aboutImg} alt="a team of experts" />
                    <div className={styles.heroText}>
                        <div>
                            <h1>We are here to help the customers to get their success.</h1>
                        </div>
                        <div>
                            <p>We share common trends and strategies for improving your rental income and making sure you stay in high demand of service.</p>
                            <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build a page without coding any other page.</p></div>
                    </div>
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.contentBox}>
                    <div className={styles.contentImages}>
                        <div className={styles.col1}>
                            <img src={contentImg1} alt="" />
                            <img src={contentImg3} alt="" />
                        </div>
                        <div className={styles.col2}>
                            <img src={contentImg2} alt="" />
                            <img src={contentImg4} alt="" />
                        </div>
                    </div>
                    <div className={styles.contentText}>
                        <h1>High skilled coders
                            from worldwide.</h1>
                        <p>We share common trends and strategies for improving your rental income and making sure you stay in high demand of service. </p>
                        <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build a page without coding any other page.</p>
                    </div>
                </div>
            </div>
            <div className={styles.teamWrapper}>
                <div className={styles.teamBox}>
                    <h1>Meet our team</h1>
                    <p>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                    <div className={styles.teammates}>
                        <TeammateCard
                            logoPath={teamImg1}
                            headerText="Joe Bridges"
                            paragraphText="Founder"
                            description="Joe is the visionary behind our company, with over 20 years of experience in the industry. His leadership and passion for innovation drive our success."
                        />
                        <TeammateCard
                            logoPath={teamImg2}
                            headerText="Jeffrey Walters"
                            paragraphText="Chief Executive Officer"
                            description="Jeffrey is responsible for steering the company towards growth and profitability. His strategic thinking and business acumen are unparalleled."
                        />
                        <TeammateCard
                            logoPath={teamImg3}
                            headerText="Jason Reed"
                            paragraphText="Chief Technology Officer"
                            description="Jason leads our technology team, ensuring we stay ahead of the curve with cutting-edge solutions. His expertise in software development is a key asset."
                        />
                        <TeammateCard
                            logoPath={teamImg4}
                            headerText="Nellie Padilla"
                            paragraphText="Creative Director"
                            description="Nellie is the creative force behind our brand. With a keen eye for design, she brings our projects to life with stunning visuals and innovative concepts."
                        />
                        <TeammateCard
                            logoPath={teamImg5}
                            headerText="Dean Bell"
                            paragraphText="Lead Programmer"
                            description="Dean is our lead programmer, specializing in full-stack development. His coding skills and problem-solving abilities keep our projects running smoothly."
                        />
                        <TeammateCard
                            logoPath={teamImg6}
                            headerText="Pearl Brooks"
                            paragraphText="Digital Marketer"
                            description="Pearl crafts our digital marketing strategies, ensuring we reach our target audience effectively. Her expertise in SEO and social media is unmatched."
                        />
                        <TeammateCard
                            logoPath={teamImg7}
                            headerText="Isaiah Griffin"
                            paragraphText="UX Designer"
                            description="Isaiah is our UX designer, focused on creating seamless and intuitive user experiences. His designs are not only beautiful but also highly functional."
                        />

                        <div className={styles.applyCard}>
                            <h5>Interested to join
                                our team ?</h5>
                            <a href="">Apply now  &#8594;</a>
                        </div>

                    </div>
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </>
    )
}