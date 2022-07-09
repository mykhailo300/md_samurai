import React, {useState} from "react";
import s from "./ProfileDescriptionForm.module.css";
import {reduxForm} from "redux-form";
import SpanInputCreator from "./SpanInputCreator";
import {connect} from "react-redux";
import {saveProfileInfo} from "../../../../redux/profileReducer";

const ProfileDescriptionReduxForm = (props) => {
    let [editMode, setEditMode] = useState(false);
    return (
        <form onSubmit={props.handleSubmit}>
            {editMode ?
                <div>
                    <button className={s.editContactsButton}>Save changes
                    </button>
                    <div className={s.formFields}>
                        {<SpanInputCreator spanText="LookingForAJob(true or false):" name="lookingForAJob"
                                           type="checkbox"/>}
                        {<SpanInputCreator spanText="looking For A Job Description"
                                           name="lookingForAJobDescription"/>}
                        {<SpanInputCreator spanText="Full-name:" name="fullName"/>}
                        {<SpanInputCreator spanText="About me:" name="aboutMe"/>}

                        <span className={s.contactsTitle}>Contacts: </span>
                        {<SpanInputCreator spanText="GitHub:" name="github"/>}
                        {<SpanInputCreator spanText="VK:" name="vk"/>}
                        {<SpanInputCreator spanText="Facebook:" name="facebook"/>}
                        {<SpanInputCreator spanText="Instagram:" name="instagram"/>}
                        {<SpanInputCreator spanText="Twitter:" name="twitter"/>}
                        {<SpanInputCreator spanText="Web-site:" name="website"/>}
                        {<SpanInputCreator spanText="Youtube:" name="youtube"/>}
                        {<SpanInputCreator spanText="Main link:" name="mainLink"/>}
                    </div>
                </div>
                : <div>
                    <button onClick={() => setEditMode(true)}
                            className={s.editContactsButton}
                            type={"button"}
                    >Edit personal information
                    </button>
                </div>}
        </form>
    )
}
const ReduxFormWrapper = reduxForm({
    form: "savePersonalInfo"
})(ProfileDescriptionReduxForm);

const ProfileDescriptionForm = (props) => {
    const onSubmit = (formData) => {
        let {lookingForAJob, lookingForAJobDescription, fullName, aboutMe, github, vk, facebook, instagram,
        twitter, website, youtube, mainLink} = formData;
        props.saveProfileInfo({
            userId: props.userId,
            lookingForAJob,
            lookingForAJobDescription, fullName, aboutMe,
            github, vk, facebook, instagram, twitter, website, youtube, mainLink
        })
    }
    return <ReduxFormWrapper onSubmit = {onSubmit}/>
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
    }
}
export default connect(mapStateToProps, {saveProfileInfo})(ProfileDescriptionForm);
