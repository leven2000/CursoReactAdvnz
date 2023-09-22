
import {ProductContext} from "./ProductCard";
import { CSSProperties, useContext } from "react";
import styles from "../styles/styles.module.css";
import  noImage  from "../assets/no-image.jpg";


export interface Props{
    title?: string;
    className?: string;
    style?: CSSProperties; 
}


export const ProductTitle = ({title, className, style}:Props) =>{

    const {product} = useContext(ProductContext);

    let titleToShow: string;

    if(title){
        titleToShow = title;
    }else{
        titleToShow = product.title;
    }

    return(
        <span className={`${styles.productDescription} ${className}`} style={style}>{titleToShow}</span>
    )
}
