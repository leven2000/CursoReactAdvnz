import {ProductContext} from "./ProductCard";
import { useContext } from "react";
import styles from "../styles/styles.module.css";
import  noImage  from "../assets/no-image.jpg";

export const ProductButtons = () =>{

    const {handleCont, count} = useContext(ProductContext)


    return(
        <div className={styles.productDescription}>
        <button className={styles.buttonMinus} onClick={() =>handleCont(-1)}>-</button>

        <div className={styles.countLabel}>{count}</div>

        <button className={styles.buttonAdd} onClick={() =>handleCont(1)}>+</button>
    </div>
    )
}
