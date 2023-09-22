import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import  noImage  from "../assets/no-image.jpg";
import { ReactElement, useContext, createContext, CSSProperties  } from "react";
import { Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export interface Props{
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
    style?: CSSProperties; 
    onChange?: ( args:onChangeArgs) => void;
    value?: number;
}



export const ProductCard = ({ children ,product, className, style, onChange, value}: Props) => {

    const {cont, handleCont} = useProduct({ onChange, product, value});

    return (
        <Provider value={{
            count : cont,
            handleCont,
            product
        }}>
            <div className={`${styles.productCard} ${className}`}
                  style={style}>          
                {children}
            </div>
        </Provider>
    )
}
