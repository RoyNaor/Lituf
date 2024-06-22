import React from 'react'
import '../styles/NewPost.css'
import {Formik, Form, Field, ErrorMessage} from 'formik'

function 
NewPost() {
  return (
    <div className='NewPost'>
        <Formik initialValues={null} onSubmit={null} validationSchema={null}> 
            <Form>
                <Field id="input" name="title" placeholer="Enter title..."/>
                <Field/>
                <Field/>
            </Form>
        </Formik>
        
    </div>
  )
}

export default 
NewPost