import styles from './TeammateCard.module.scss';

interface TeammateCardCrops {
    logoPath: string;
    headerText: string;
    paragraphText: string;
    description: string;
}

const TeammateCard: React.FC<TeammateCardCrops> = ({ logoPath, headerText, paragraphText, description }) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.hoverWrapper}>
                <div className={styles.flip}>
                    <div className={styles.flipWrapper}>
                        <div className={styles.front}>
                            <img src={logoPath} alt={headerText} />
                        </div>
                        <div className={styles.back}>
                            {description}
                        </div>
                    </div>
                </div>
                <div className={styles.text}>
                    <h6>{headerText}</h6>
                    <p>{paragraphText}</p>
                </div>
            </div>
        </div>
    );
};

export default TeammateCard;
