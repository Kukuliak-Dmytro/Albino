import React from "react";
import styles from './FeatureCard.module.scss'

interface FeatureCardProps {
    logoPath: string;
    headerText: string;
    paragraphText: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({ logoPath, headerText, paragraphText }) => {
    return (
        <div className={styles.cardWrapper}>
            <img src={logoPath} alt="" />
            <h6>{headerText}</h6>
            <p>{paragraphText}</p>

        </div >
    )
}
export default FeatureCard;