import React from 'react';
import styles from './ApplyCard.module.scss';
import teamImg1 from '../../../assets/teamImg1.png'; // Adjust the path as needed

const ApplyCard: React.FC = () => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.hoverWrapper}>
                <div className={styles.flipWrapper}>
                    <div className={styles.front}>
                
                            <img src={teamImg1} alt="Team Member" />
                            <h5>Here could be you</h5>
                
                    </div>
                    <div className={styles.back}>
                
                            <h5>Interested to join our team?</h5>
                            <a href="">Apply now &#8594;</a>
                
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplyCard;
