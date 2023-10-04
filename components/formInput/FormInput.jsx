import "./FormInput.css";

const FormInput = ( props ) => {
    if (props.type === 'textarea') {
        return (
            <>
                <label className="form-label">{ props.input }</label>
                <textarea
                    className="form-input form-textarea"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                ></textarea>
            </>
        )
    } else {
        return (
            <>
                <label className="form-label">{ props.input }</label>
                <input
                    className="form-input"
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            </>
        );
    }
}

export default FormInput
