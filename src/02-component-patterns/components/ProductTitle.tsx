
import {ProductContext} from "./ProductCard";
import { useContext } from "react";
import styles from "../styles/styles.module.css";
import  noImage  from "../assets/no-image.jpg";

export const ProductTitle = ({title = ""}) =>{
    const {product} = useContext(ProductContext);

    let titleToShow: string;

    if(title){
        titleToShow = title;
    }else{
        titleToShow = product.title;
    }

    return(
        <span className={styles.productDescription}>{titleToShow}</span>
    )
}
