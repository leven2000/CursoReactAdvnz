import { Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import "../styles/styles.css"

export const FormikComponents = () => {

    


    return (
        <div>
            <h1>Formik Components</h1>

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

                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text"/>
                            <ErrorMessage name="firstName" component="span"/>

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage name="lastName" component="span"/>

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text"/>
                            <ErrorMessage name="email" component="span"/>

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">Pick Something</option>
                                <option value="Dev">Dev</option>
                                <option value="Designer">Designer</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>


                            <label><Field name="terms" type="checkbox"/> Terms</label>                    
                            <ErrorMessage name="terms" component="span"/>

                            <button type="submit">Submit</button>
                        </Form>
                    )

                }
            </Formik>
            
        </div>
    )
}
