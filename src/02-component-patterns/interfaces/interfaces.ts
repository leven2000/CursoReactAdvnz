import { ReactElement } from "react";

export interface ProductCardProps{
    children?: ReactElement | ReactElement[];
    product: Product;
}

export interface Product{
    id:string;
    title: string;
    img?: string;
}

export interface ProductContextProps{
    count: number;
    handleCont: (num:number)=>void;
    product: Product;
}

export interface ProductCardHOCProps{
    
}
