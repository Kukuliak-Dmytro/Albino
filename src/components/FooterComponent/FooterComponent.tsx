import styles from './FooterComponent.module.scss';


import { BsTwitterX } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin} from 'react-icons/bs';


const FooterComponent = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footerBox}>
               
                <div className={styles.innerFooterWrapper}>
                    <div>
                        <h4>Brainwave.io</h4>
                        <h5>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</h5>
                        <span>
                            <div><BsTwitterX/></div>
                            <div><BsFacebook/></div>
                            <div><BsInstagram/></div>
                            <div><BsLinkedin/></div>
                        </span>
                    </div>
                    <div>
                        <h5>Company</h5>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Product</h5>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Help desk</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Services</h5>
                        <ul>
                            <li><a href="#">Digital marketing</a></li>
                            <li><a href="#">Content Writing</a></li>
                            <li><a href="#">SEO for Business</a></li>
                            <li><a href="#">UI Design</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Legal</h5>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Return policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;
