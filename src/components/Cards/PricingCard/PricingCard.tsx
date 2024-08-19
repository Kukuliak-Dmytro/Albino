import React from "react";
import styles from './PricingCard.module.scss'
import Button from "../../Buttons/Button";

interface PricingCardProps {
    tier: string;
    price: number;
}
const PricingCard: React.FC<PricingCardProps> = ({ tier, price }) => {
    return (
        <div className={styles.cardWrapper}>
            <span className={styles.tier}>{tier}</span>
            <h1>${price}</h1>
            <p>One time purchase</p>
            <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            <Button width={300}>Get started for free</Button>

        </div >
    )
}
export default PricingCard;