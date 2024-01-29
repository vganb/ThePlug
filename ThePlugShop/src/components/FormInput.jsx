

const FormInput = ({className, errorMsg, label, ...rest}) => {
  return (
    <div className={`form-group ${className} flex flex-col`}>
      <label htmlFor="firstName" className="form-label text-center text-md" >{ label }</label>
      <input className="form-control p-4 border outline-slate-500 w-full items-center" {...rest} />
      { errorMsg && <p className="invalid-input">{ errorMsg }</p>}
      {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
    </div>
  )
}
export default FormInput