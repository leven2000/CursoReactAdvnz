import { Formik, Form} from "formik";
import * as Yup from "yup";

import "../styles/styles.css"

import { MyTextInput } from "../Components/MyTextInput";
import { MySelect } from "../Components/MySelect";
import { MyCheckbox } from "../Components/MyCheckbox";

export const FormikAbstract = () => {

    


    return (
        <div>
            <h1>Formik Abstract</h1>

            <Formik
            initialValues={{
                firstName: "",
                lastName:"",
                email: "",
                terms: false,
                jobType: ""
        
            }}
            onSubmit={( values ) =>{
                
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                                .max (15, "Debe tener 15 o menos")
                                .required("Requerido"),
                lastName: Yup.string()
                                .max (15, "Debe tener 15 o menos")
                                .required("Requerido"),
                email: Yup.string()
                                .required("Requerido")
                                .email ("No tiene formato Valido"),    
                terms: Yup.boolean()
                            .oneOf([true], "Debe de aceptar los terminos"),
                jobType: Yup.string()
                            .required("Requerido") 
                            .notOneOf(["Designer"],"Solamente Devs")

                })}
            >

                {
                    (Formik)=>(
                        <Form>

                            <MyTextInput 
                                label="First Name" 
                                name="firstName"
                            />
       
                            <MyTextInput 
                                label="Last Name" 
                                name="lastName"
                            />

                            <MyTextInput 
                                label="Email" 
                                name="email"
                                type="email"
                            />  
                            
                            <MySelect name="jobType" label="Job Type">
                                <option value="">Pick Something</option>
                                <option value="Dev">Dev</option>
                                <option value="Designer">Designer</option>
                            </MySelect>

                            <MyCheckbox label={"Terms"} name={"terms"}/>


                            <button type="submit">Submit</button>
                        </Form>
                    )

                }
            </Formik>
            
        </div>
    )
}
