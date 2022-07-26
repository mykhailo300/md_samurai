import {reduxForm} from "redux-form";
import s from "./../ProfileInfoData/ProfileInfoData.module.css"
import SpanInputCreator from "../SpanInputCreator";
import React from "react";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const ProfileInfoDataReduxForm = ({handleSubmit, profile, error}) => {
    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save changes</button>
            </div>
            {error && <div className={s.summaryError}>{error}</div>}

            <span className={s.usualTitle}>Main information: </span>
            <SpanInputCreator spanText="Full name: " name={"fullName"}/>
            <SpanInputCreator spanText="Looking for a job: " name={"lookingForAJob"} type={"checkbox"}/>
            <SpanInputCreator spanText="My professional skills: " name={"lookingForAJobDescription"} component={Textarea}/>
            <SpanInputCreator spanText="About me: " name={"aboutMe"} component={Textarea}/>

            <div>
                <span className={s.usualTitle}>Contacts: </span>{Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    {<SpanInputCreator spanText={key} name ={"contacts." + key}/>}
                </div>
            })}
            </div>
        </form>
    </div>
}

const ProfileInfoDataForm = (props) => {
    const ProfileFormWithRedux = reduxForm({
        form: "saveProfile",
        enableReinitialize: true,
        destroyOnUnmount: false
    })(ProfileInfoDataReduxForm);

    return <ProfileFormWithRedux onSubmit={props.onSubmit} {...props}/>
}

export default ProfileInfoDataForm;