import styles from './SupportCard.module.scss'
import { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
interface SupportCardProps {
    header: string;
    children: React.ReactNode;
  }
  
  const SupportCard: React.FC<SupportCardProps> = ({ header, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className={styles.cardWrapper}>
        <div>
          <h6>{header}</h6>
          <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? styles.moved : ''}`}>
            <div><RiArrowDropDownLine/><RiArrowDropDownLine/></div>
          </button>
        </div>
        <div className={`${isOpen ? styles.open : ''}`}>
          {children}
        </div>
      </div>
    );
  };
  export default SupportCard;