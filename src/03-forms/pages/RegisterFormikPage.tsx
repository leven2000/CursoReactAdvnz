
import {  FormEvent } from "react"
import * as Yup from "yup";
import { Formik, Form} from "formik";

import "../styles/styles.css"

import { MyTextInput } from "../Components/MyTextInput"
export const RegisterFormikPage = () => {

   
    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
            initialValues={{
                userName: "",
                email:"",
                password1: "",
                password2: "",

            }}
            onSubmit={( values ) =>{
                
            }}
            validationSchema={Yup.object({
                userName: Yup.string()
                                .max (15, "Debe tener maximo 15")
                                .min(2, "Debe Tener almenos 2 caracteres")
                                .required("Requerido"),
                password1: Yup.string()
                                .max (15, "Debe tener 15 o menos")
                                .required("Requerido"),
                password2: Yup.string()
                                .max (15, "Debe tener 15 o menos")
                                .required("Requerido")
                                .oneOf([Yup.ref("password1")], "Las contraseñas deben coincidir"),
                email: Yup.string()
                                .required("Requerido")
                                .email ("No tiene formato Valido"),    
                })}
            >

            {
                (Formik)=>(
                    <Form>
                        <MyTextInput 
                            label="Username" 
                            name="userName"
                        />
       
                        <MyTextInput 
                            label="Constraseña" 
                            name="password1"
                        />
                        <MyTextInput 
                            label="Repetir Constraseña" 
                            name="password2"
                        />                        
                        <MyTextInput 
                            label="Email" 
                            name="email"
                            type="email"
                        />  

                        <button type="submit">Submit</button>
                        <button type="button" onClick={Formik.handleReset}>
                            Reiniciar
                        </button>
                    </Form>
                )
            }
            </Formik>
        </div>
    )
}
