import {ProductContext} from "./ProductCard";
import { CSSProperties, useContext } from "react";
import styles from "../styles/styles.module.css";
import  noImage  from "../assets/no-image.jpg";

export interface Props{
    img?: string;
    className?: string;
    style?: CSSProperties; 
}


export const ProductImage = ({img, className, style}:Props) =>{
    const {product} = useContext(ProductContext);

    let imgToShow: string;

    if(img){
        imgToShow = img
    }
    else if( product.img){
        imgToShow = product.img;
    }
    else{
        imgToShow = noImage;
    }

    return(
        <img src={imgToShow} alt="Product Image" className={`${styles.productImg} ${className}`} style={style}/>
    )
}