import {ProductContext} from "./ProductCard";
import { CSSProperties, useContext } from "react";
import styles from "../styles/styles.module.css";
import  noImage  from "../assets/no-image.jpg";

interface Props{
    className?: string;
    style?: CSSProperties; 
}


export const ProductButtons = ({className, style}:Props) =>{

    const {handleCont, count} = useContext(ProductContext)


    return(
        <div className={`${styles.productDescription} ${className}`} style={style}>
        <button className={styles.buttonMinus} onClick={() =>handleCont(-1)}>-</button>

        <div className={styles.countLabel}>{count}</div>

        <button className={styles.buttonAdd} onClick={() =>handleCont(1)}>+</button>
    </div>
    )
}
