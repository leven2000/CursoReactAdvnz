import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface Props{
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProduct = (  {onChange, product, value = 0}: Props ) =>{

    const [cont, setcont] = useState(value);

    const isControlled = useRef(!!onChange);

    const handleCont = (num:number) =>{

        if(isControlled.current ){
            return onChange!!({count: num, product})
        }
        const newValue = Math.max( cont + num, 0)

        setcont(newValue);

        onChange && onChange({count: newValue, product: product});
    }
    useEffect(() => {

        setcont( value );

    },[value])
    return{
        cont,
        handleCont
    }
}