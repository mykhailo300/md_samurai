import s from "./ProfileInfo.module.css";
import lookingForAJob from "../../../assets/images/lookingForAJob.jpg";
import notLookingForAJob from "../../../assets/images/notLookingForAJob.jpg";
import React from "react";
import ProfileDescriptionForm from "./ProfileDescriptionForm/ProfileDescriptionForm";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileDescription = (props) => {
    return <div>
        <div>
            <div className={s.fullName}>
                {props.profile.fullName}
            </div>
            <div className={s.aboutMe}>
                {props.profile.aboutMe}
            </div>
            <div className={s.lookingForAJob}>
                <img src={props.profile.lookingForAJob ? lookingForAJob : notLookingForAJob}
                     className={s.lookingForAJobImage} alt=""/>
                <span className={s.lookingForAJobText}>
                {props.profile.lookingForAJobDescription}
            </span>
            </div>
        </div>
        <ProfileStatusWithHooks/>
        {props.isOwner && <ProfileDescriptionForm {...props}/>}
    </div>
}
export default ProfileDescription;
