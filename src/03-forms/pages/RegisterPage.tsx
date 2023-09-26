
import {  FormEvent } from "react"
import "../styles/styles.css"
import { useForm } from "../hooks/useForm"
export const RegisterPage = () => {

    const {formData, name, email, password1, password2, onChange, resetForm} = useForm({
        name: "",
        email: "",
        password1: "",
        password2: ""
    });
    const onSubmit = (event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
    }
    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="name"
                    name="name" 
                    value={name}
                    onChange={onChange}
                />
                <input 
                    type="email"
                    placeholder="email"
                    name="email" 
                    value={email}
                    onChange={onChange}
                />
                <input 
                    type="password"
                    placeholder="password"
                    name="password1" 
                    value={password1}
                    onChange={onChange}
                />
                <input 
                    type="password"
                    placeholder="Repeat password"
                    name="password2" 
                    value={password2}
                    onChange={onChange}
                />
                <button type="button" onClick={resetForm}>Reset</button>
                <button type="submit">Crear cuenta</button>
            </form>
        </div>
    )
}
