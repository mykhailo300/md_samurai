import s from "./FormsControls.module.css"
import react from "react";

const FormControls = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={((hasError) ? s.error : "") + " " + s.formTextarea}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = {...props};
    return (
        <FormControls {...props}><textarea{...input} {...restProps}/></FormControls>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = {...props};
    return (
        <FormControls {...props}><input {...input} {...restProps}/></FormControls>
    )
}
