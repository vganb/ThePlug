
const FormInput = ({className, errorMsg, label, ...rest}) => {
  return (
    <div className={`form-group ${className} w-2/4 flex flex-col content-center`}>
      <label htmlFor="firstName" className="form-label flex flex-col text-lg mb-1" >{ label }</label>
      <input className="form-control p-2 border outline-slate-500 w-full" {...rest} />
      { errorMsg && <p className="text-red-500 invalid-input">{ errorMsg }</p>}

    </div>
  )
}
export default FormInput