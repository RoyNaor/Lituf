
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import '../styles/NewPost.css'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

function NewPost() {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("את/ה חייב/ת למלא כותרת"),
    postText: Yup.string().required("את/ה חייב/ת למלא את התוכן"),
    username: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://10.100.102.11:3001/posts", data);
      console.log("IT WORKED", response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };
  return (
    <div className="NewPost">
        <div className="close-icon">
                <Link className="toHome" to="/"><CloseIcon/></Link>
        </div>
        <div className="page-title"> 
             <h2>פוסט חדש</h2>
        </div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>כותרת: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="title"
            placeholder=""
          />
          <label>תוכן:</label>
          <ErrorMessage name="postText" component="span"/>
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="postText"
            placeholder=""
            style={{ height: '60px' }}
            />
          <label>שם משתמש: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="username"
            placeholder=""
          />

          <button type="submit"> צור פוסט</button>
        </Form>
      </Formik>
    </div>
  );
}

export default NewPost;
