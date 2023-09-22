import { ReactElement } from "react";


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
export interface onChangeArgs{
    product: Product;
    count:number;
}

export interface ProductInCart extends Product{
    count: number;
}