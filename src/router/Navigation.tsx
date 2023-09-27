
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate} from "react-router-dom";

import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";

import logo from "../logo.svg"
import { FormikYupPage } from "../03-forms/pages/FormikYupPage";
import { FormikComponents } from "../03-forms/pages/FormikComponents";
import { FormikAbstract } from "../03-forms/pages/FormikAbstract";
import { RegisterFormikPage } from "../03-forms/pages/RegisterFormikPage";
import { DynamicForm } from "../03-forms/pages/DynamicForm";


export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo } alt="react logo"/>
            
                <ul>
                    <li>
                        <NavLink to="/formik-yup" className={ ({isActive}) => isActive? "nav-active": "" } >Formik Yup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className={ ({isActive}) => isActive? "nav-active": "" }>Register Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register-formik" className={ ({isActive}) => isActive? "nav-active": "" }>Register Formik Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-basic" className={ ({isActive}) => isActive? "nav-active": "" }>Formik Basic</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-components" className={ ({isActive}) => isActive? "nav-active": "" }>Formik Components</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-abstract" className={ ({isActive}) => isActive? "nav-active": "" }>Formik Abstract</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dynamic-form" className={ ({isActive}) => isActive? "nav-active": "" }>Dynamic Form</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="register" element={<RegisterPage/>}/>
                <Route path="formik-basic" element={<FormikBasicPage/>}/>
                <Route path="formik-yup" element={<FormikYupPage/>}/>       
                <Route path="formik-components" element={<FormikComponents/>}/> 
                <Route path="formik-abstract" element={<FormikAbstract/>}/>
                <Route path="register-formik" element={<RegisterFormikPage/>}/>
                <Route path="dynamic-form" element={<DynamicForm/>}/>

                <Route path="/*" element={<Navigate to={"/home" } replace />}/>                    
            </Routes>
        </div>
    </BrowserRouter>
  )
}
