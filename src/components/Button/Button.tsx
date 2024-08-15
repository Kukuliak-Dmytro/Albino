import React from "react";
import styles from './Button.module.scss';

interface ButtonProps {
    width?: number;
    height?: number;
    children: React.ReactNode;
}

 const Button: React.FC<ButtonProps> = ({ width, height, children }) => {   
    return (
        <button className={styles.buttonWrapper} style={{ width: `${width}px`, height: `${height}px` }}>
            {children}
        </button>
    );
}
export default Button;
