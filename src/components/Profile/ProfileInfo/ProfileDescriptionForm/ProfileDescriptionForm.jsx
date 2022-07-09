import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import {Field, reduxForm} from "redux-form";
import Contacts from "./Contacts";

const ProfileDescriptionReduxForm = (props) => {
    let [editMode, setEditMode] = useState(false);
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {editMode ?
                    <div>
                        <button onClick={() => setEditMode(false)}
                                className={s.editContactsButton}>Save changes</button>
                        <div className={s.contactsN}>
                            <div>
                                <Contacts {...props}/>
                            </div>
                            <div>
                                <Field component={"input"}></Field>
                                <Field component={"input"}></Field>
                                <Field component={"input"}></Field>
                            </div>
                        </div>
                    </div>
                     : <div>
                        <button onClick={() => setEditMode(true)}
                                className={s.editContactsButton}>Edit contacts links</button>
                        <Contacts {...props}/>
                    </div>}
            </div>
        </form>
    )
}
const ReduxFormWrapper = reduxForm({
    form: "contacts"
})(ProfileDescriptionReduxForm);

const ProfileDescriptionForm = (props) => {
    let onSubmit = (formData) => {
        //calls a call of thunk creator
    }
    return <ReduxFormWrapper {...props} onSubmit={onSubmit}/>
}
export default ProfileDescriptionForm;
