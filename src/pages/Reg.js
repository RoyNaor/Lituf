import React from 'react'
import '../styles/Reg.css'
import PetsIcon from '@mui/icons-material/Pets';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Reg() {
    const initialValues = {
        username: "",
        password: "",
        mobile: "",
        email: ""
      };
    
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required()
    });
    
    const onSubmit = async (data) => {
        try {
          axios.post("http://10.100.102.7:3001/auth", data).then(() => {
            console.log("IT WORKED");
          })
        } catch (error) {
          console.error('There was an error!', error);
        }
    };

    return (
        <div className='Reg'>
            <div className='left-side-reg'></div>
            <div className='right-side-reg'>
                <div className="page-title-reg"> 
                    <h2> הרשמה </h2>
                    <PetsIcon/>
                </div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className="formContainer">
                        <label>שם משתמש: </label>
                        <ErrorMessage name="username" component="span" />
                        <Field
                            autocomplete="off"
                            id="inputCreatePost"
                            name="username"
                            placeholder=""
                        />
                        <label> סיסמא: </label>
                        <ErrorMessage name="password" component="span" />
                        <Field
                            autocomplete="off"
                            id="inputCreatePost"
                            name="password"
                            placeholder=""
                            type="password"
                        />
                        <label> טלפון נייד: </label>
                        <ErrorMessage name="mobile" component="span" />
                        <Field
                            autocomplete="off"
                            id="inputCreatePost"
                            name="mobile"
                            placeholder=""
                        />
                        <label> דואר אלקטורני: </label>
                        <ErrorMessage name="email" component="span" />
                        <Field
                            autocomplete="off"
                            id="inputCreatePost"
                            name="email"
                            placeholder=""
                            type="email"
                        />
                        <button type="submit"> אישור </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Reg;
