import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import  noImage  from "../assets/no-image.jpg";
import { ReactElement, useContext, createContext  } from "react";
import { ProductContextProps, ProductCardProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;


export const ProductCard = ({ children ,product}: ProductCardProps) => {

    const {cont, handleCont} = useProduct();

    return (
        <Provider value={{
            count : cont,
            handleCont,
            product
        }}>
            <div className={styles.productCard}>
            
                {children}
                {/* <ProductImage img={product.img}/>

                <ProductTitle title={product.title}/>

                <ProductButtons handleCont={handleCont} cont={cont}/> */}
            </div>
        </Provider>
    )
}
