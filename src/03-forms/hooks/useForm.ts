import { ChangeEvent, useState } from "react";



export const useForm = <T>(initialState: T) => {

    const [formData, setFormData] = useState(initialState);

  

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData);
    }

    const resetForm = () =>{
        setFormData(initialState);
    }

    return{
        ...formData,
        formData,
        onChange,
        resetForm
    }
}