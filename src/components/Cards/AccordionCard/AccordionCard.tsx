import { useState } from "react";
import styles from './AccordionCard.module.scss'
export default function AccordionCard({ }) {
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
            <h6>Can I use Albino for my clients?</h6>
        </div>

        <div className={`${styles.accordionBody} ${accorionCollapsed ? ' ' : styles.shown}`}>
            <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.</p>
        </div>
    </div>;
}
