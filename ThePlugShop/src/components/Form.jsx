import FormInput from "./FormInput"
import { useFormik} from "formik";
import * as Yup from 'yup'
import TextArea from "./TextArea";
import { useState } from "react";


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const Form = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null);
  
  const onSubmit = async (values) => {
    try {
      const response = await fetch(/* your fetch call here */ {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.status === 200) {
        setFormSubmitted(true);
        console.log('Message are sent');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

      const form = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            textmessage:'',
        },
        validationSchema:Yup.object({
            firstName: Yup.string()
            .required('You need to enter a first name')
            .min(3, 'Your name must be at least 3 chars long'),
            
            lastName: Yup.string()
            .required('You need to enter a last name')
            .min(3, 'Your name must be atleast 3 chars long'),
            email: Yup.string()
            .required('You need to enter an email adress')
            .matches(emailRegex, 'You need to enter a valid email'),
            textmessage: Yup.string()
            .required('You forgot the message to us :)'),
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })
    // console.log(form)
    


    return (
        <div className="">

    <form onSubmit={form.handleSubmit} className="reg-form flex flex-col justify-center items-center" noValidate>
    {/* <div className="form-group"> */}
        {/* <input type="text" id="firstName" onChange={form.handleChange} value={form.values.firstName} className="form-control p-4 border border-black" /> */}
        <FormInput
        label="First Name"
        id="firstName"
        name="firstName"
        type="text"
        value={form.values.firstName}
        onChange={form.handleChange}
        errorMsg={form.errors.firstName && form.touched.firstName && form.errors.firstName}
        onBlur={form.handleBlur}
      />
      <FormInput
        label="Last Name"
        id="lastName"
        name="lastName"
        type="text"
        value={form.values.lastName}
        onChange={form.handleChange}
        errorMsg={form.errors.lastName && form.touched.lastName && form.errors.lastName}
        onBlur={form.handleBlur}
      />
        <FormInput
                label="Email"
                id="email"
                name="email"
                type="email"
                value={form.values.email}
                onChange={form.handleChange}
                errorMsg={form.errors.email && form.touched.email && form.errors.email}
                onBlur={form.handleBlur}
      />

<TextArea
          label="Message us!" 
          name="textmessage"
          value={form.values.textmessage}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          errorMsg={
            form.errors.textmessage &&
            form.touched.textmessage &&
            form.errors.textmessage
          }
        />


        <button type="submit" className="bg-green-900/80 mt-4 mb-5 px-4 py-4 uppercase rounded-md w-1/5">Send</button>
    {/* </div> */}
    </form>
    {formSubmitted && <p>Your message has been sent!</p>}
    {errorMessage && <p>{errorMessage}</p>}
        </div>
 
  )
}