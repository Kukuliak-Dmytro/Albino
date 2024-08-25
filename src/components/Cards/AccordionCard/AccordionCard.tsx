import { useState } from "react";
import styles from './AccordionCard.module.scss'
interface AccordionCardProps {
    header: string;
    content: string;
}
export default function AccordionCard({ header, content }: AccordionCardProps) {
    const [accorionCollapsed, setAccordionCollapsed] = useState(true);
    function symbol() {
        if (window.innerWidth <= 768) {
            return  accorionCollapsed ? '+' : '-' 
        }
        else
            return "?"
    }

    return <div className={styles.cardWrapper}>
        <div>
            <button onClick={() => setAccordionCollapsed(!accorionCollapsed)}>{symbol()}</button>
            <h6>{header}</h6>
        </div>

        <div className={`${styles.accordionBody} ${accorionCollapsed ? ' ' : styles.shown}`}>
           <p>{content}</p>
        </div>
    </div>;
}
