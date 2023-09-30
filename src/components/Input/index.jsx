/* eslint-disable react/prop-types */
const Input = ({ label, id, name, type, register, error }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                id={id}
                name={name}
                type={type}
                className="form-control"
                {...register(name)}
            />
            {error && <div>{error.message}</div>}
        </div>
    )
}

export default Input