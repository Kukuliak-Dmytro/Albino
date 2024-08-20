import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import styles from './About.module.scss'

import aboutImg from '../.././assets/aboutImg.png'
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
            <FooterComponent></FooterComponent>
        </>
    )
}