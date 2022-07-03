import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./Dialogs.module.css";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength15 = maxLengthCreator(15);

const sendMessageForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit} className={s.sendMessage}>
            <div>
                <Field component={Textarea} name={"textOfMessage"} validate = {[required, maxLength15]}/>
            </div>
            <div>
                <button>Send a message</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: "sendMessage"
})(sendMessageForm)

const SendMessage = (props) => {
    const onSubmit = (formData) => {
        props.sendMessage(formData.textOfMessage)
    }
    return <div>
        <AddPostReduxForm onSubmit={onSubmit}/>
    </div>
}

export default SendMessage;
