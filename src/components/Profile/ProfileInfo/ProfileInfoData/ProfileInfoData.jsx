import lookingForAJob from "../../../../assets/images/lookingForAJob.jpg";
import notLookingForAJob from "../../../../assets/images/notLookingForAJob.jpg";
import React from "react";
import s from "./ProfileInfoData.module.css"

const ProfileInfoData = ({isOwner, profile, goToEditMode}) => {
    return <div>
        <div>
            <div>
                <span className={s.usualTitle}>Main information: </span>
                <div className={s.fullName}>
                    {profile.fullName}
                </div>
                <div className={s.aboutMe}>
                    <span className={s.usualSpan}>About me: {profile.aboutMe}</span>
                </div>

                <div className={s.lookingForAJob}>
                    <img src={profile.lookingForAJob ? lookingForAJob : notLookingForAJob}
                         className={s.lookingForAJobImage} alt=""/>
                    <span className={s.lookingForAJobText}>
                        My professional skills: {profile.lookingForAJob && profile.lookingForAJobDescription}
                </span>
                </div>
            </div>
            <div className={s.contacts}>
                <span className={s.usualTitle}>Contacts: </span>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
            </div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit personal information</button>
            </div>}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><span>{contactTitle}: {contactValue}</span></div>
}

export default ProfileInfoData;