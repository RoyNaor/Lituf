import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import PetsIcon from '@mui/icons-material/Pets';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/home');
    };
    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("את/ה חייב/ת למלא שם משתמש"),
        password: Yup.string().min(3).max(15).required(),
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://10.100.102.7:3001/auth/login", data);
            if (response.data.error) {
                alert(response.data.error);
            } else {
                sessionStorage.setItem("accessToken", response.data.token);
                sessionStorage.setItem("username", response.data.username);
                navigateToHome();
            }
        } catch (error) {
            console.error("Login failed", error);
            alert("Login failed due to an internal server error.");
        }
    };

    return (
        <div className='Login'>
            <div className='left-side-login'></div>
            <div className='right-side-login'>
                <div className="page-title">
                    <h2> התחברות </h2>
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
                            autoComplete="off"
                            id="inputCreatePost"
                            name="username"
                            placeholder=""
                        />
                        <label> סיסמא: </label>
                        <ErrorMessage name="password" component="span" />
                        <Field
                            autoComplete="off"
                            id="inputCreatePost"
                            name="password"
                            type="password"
                            placeholder=""
                        />

                        <Link to='/reg'> אין לך משתמש? <b>הרשם עכשיו!</b> </Link>
                        <Link to='/home'> התחבר <b> כאורח</b> </Link>
                        <button type="submit"> התחבר </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Login;
