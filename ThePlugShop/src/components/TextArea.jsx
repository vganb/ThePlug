import FormInput from "./FormInput"



const TextArea = ({label, id, name, value, onChange, onBlur, errorMsg}) => {
  return (
    <div className="form-group flex flex-col w-2/4">
        <label htmlFor={id}>{label}</label>
        <textarea 
        name={name} 
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="form-control mt-1 px-1 py-2 border border-black"
        />
        { errorMsg && <p className="error-message">{ errorMsg }</p>}
    </div>
  )
}
export default TextArea