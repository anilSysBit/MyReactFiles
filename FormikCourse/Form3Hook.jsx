import { useFormik } from 'formik'
import React from 'react';
import { Formik,Form,Field,ErrorMessage } from 'formik';

const Form3Hook = () => {
    const formik = useFormik(({
        initialValues: {email:""},
        onSubmit: values =>{
            console.log(values);
        }
    }))
  return (
    <div className="formContainer">
    <Formik>
        {({isSubmitting})=>(
            <Form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email    : </label>
                <Field type="email" name="email"/>
                <ErrorMessage name='email' component="div" />
                <button type='submit' className='btn btn-submit' disabled={isSubmitting}>submit</button>
            </Form>
        )}
    </Formik>
</div>
  )
}

export default Form3Hook