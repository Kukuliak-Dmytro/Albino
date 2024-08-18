import React from "react";
import styles from './StepCard.module.scss'

interface StepCardProps {
    listNumber:number;
    headerText: string;
    paragraphText: string;

}
const StepCard: React.FC<StepCardProps> = ({ listNumber, headerText, paragraphText }) => {
    return (
        <div className={styles.cardWrapper}>
            <div>{listNumber}</div>
            <div>                
                <h6>{headerText}</h6>
                <p>{paragraphText}</p>
            </div>

        </div >
    )
}
export default StepCard;