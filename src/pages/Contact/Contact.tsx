
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import FooterComponent from '../../components/FooterComponent/FooterComponent';

import styles from './Contact.module.scss'

import ContactCard1 from '../../components/Cards/ContactCard/ContactCard1';
import ContactCard2 from '../../components/Cards/ContactCard/ContactCard2';
import ContactCard3 from '../../components/Cards/ContactCard/ContactCard3';


export function Contact() {
    return (
        
        <>
            <HeaderComponent />
            <div className={styles.heroWrapper}>
                <div className={styles.heroBox}>
                    <h1>Contact us</h1>
                    <p>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                </div>
            </div>
            <div className={styles.infoWrapper}>
                <div className={styles.infoBox}>
                    <ContactCard1></ContactCard1>
                    <ContactCard2></ContactCard2>
                    <ContactCard3></ContactCard3>
                    
                </div>
            </div>
            <FooterComponent />
        </>
    )
}
