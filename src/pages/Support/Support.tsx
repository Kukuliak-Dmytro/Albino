import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import styles from './Support.module.scss';
import SupportCard from "../../components/Cards/SupportCard/SuppordCard";
export function Support() {
  return (
    <>
      <HeaderComponent />
      <div className={styles.supportWrapper}>
        <div className={styles.supportBox}>
          <div className={styles.title}>
            <h1>Terms & Conditions</h1>
            <p>By accessing and placing an order with UXTheme, you confirm that you are in agreement with and bound by the terms and conditions</p>
          </div>
          
          <div className={styles.body}>
            <div>
                <p>
                By accessing and placing an order with UXTheme, you confirm that you are in agreement with and bound by the terms and conditions contained in the Terms Of Use outlined below. These terms apply to the entire website and any email or other type of communication between you and UXTheme. Under no circumstances shall UXTheme team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if UXTheme team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof. UXTheme will not be responsible for any outcome that may occur during the course of usage of our resources.
                </p>
            </div>
            <SupportCard header="License">
              <p>By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions...</p>
            </SupportCard>

            <SupportCard header="Security">
              <ul>
                <li>You have rights for royalty free use of our resources for any or all of your personal.</li>
                <li>You are not required to attribute or link to UXTheme in any of projects.</li>
                <li>We reserve the rights to change prices and revise the resources usage policy in any moment.</li>
              </ul>
            </SupportCard>

            <SupportCard header="Embedded content from other websites">
              <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
            <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p></p>
            </SupportCard>

            <SupportCard header="Changes about terms">
              <p>If we change our terms of use we will post those changes on this page. Registered users will be sent an email that outlines changes made to the terms of use.</p>
            </SupportCard>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
