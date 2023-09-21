import { useState } from 'react';


export const useProduct = () =>{
    const [cont, setcont] = useState(0)

    const handleCont = (num:number) =>{
        setcont(anterior => Math.max( anterior + num, 0));
    }

    return{
        cont,
        handleCont
    }
}