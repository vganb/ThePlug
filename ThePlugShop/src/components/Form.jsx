import FormInput from "./FormInput"
import { useFormik} from "formik";
import * as Yup from 'yup'
import TextArea from "./TextArea";

export const Form = () => {
  
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
            .min(3, 'Your name must be at least 3 chars long')
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })
    console.log(form)
  
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
        </div>
 
  )
}