import { Formik, Form  } from "formik";

import formJson from "../Data/custom-form.json";
import { MyTextInput } from "../Components/MyTextInput";
import { MySelect } from "../Components/MySelect";


const InitialValues: {[key:string]: any} = {}

for (const input of formJson) {
    InitialValues[input.name] = input.value
}

export const DynamicForm = () => {
  return (
    <div>
        <h1> Dynamic Form</h1>

        <Formik
            initialValues={{InitialValues}}
            onSubmit={(values) =>{

            }}
        >
            {(formik) =>(
                <Form>
                    {formJson.map(({type, name, placeholder, label, options}) =>{

                        if(type === "input" || type ==="password" || type === "email"){
                            return <MyTextInput 
                                        key={name}
                                        type={(type as any)}  
                                        name={name} label={label} 
                                        placeholder={placeholder}
                            />
                        }else if(type=== "select"){
                            return <MySelect
                                    key={name}
                                    label={label}
                                    name={name}
                            >
                              <option value="">Select an Option</option>    
                              {
                                options?.map(opt =>(
                                    <option key={opt} value={opt}>{opt}</option>
                                ))
                              }                  
                            </MySelect>
                        }
                        return <h1>Error</h1>
                    })}
                    <button type="submit">Submit</button>
                </Form>
            )}

        </Formik>
    </div>
  )
}
