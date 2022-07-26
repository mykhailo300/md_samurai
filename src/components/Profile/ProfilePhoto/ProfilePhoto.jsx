import s from "./ProfilePhoto.module.css";
import profilePhoto from "../../../assets/images/user.png";
import PreLoader from "../../common/PreLoader/PreLoader";
import ProfileStatusWithHooks from "../ProfileInfo/ProfileStatus/ProfileStatusWithHooks";
import React from "react";

const ProfilePhoto = (props) => {
    let onChangeProfilePhoto = (e) => {

        if(e.target.files) {
            props.savePhoto(e.target.files[0]);
        }
    }
    if(props.profile === null) {
        return <PreLoader/>
    }
    return <div className={s.avaAndStatus}>
        <div>
            {props.isOwner && <input type="file" className={s.choosePhoto} onChange = {onChangeProfilePhoto}/>}
        </div>
        <div className={s.ava}>
            <img src={props.profile.photos.large || profilePhoto} alt="No" className={s.profilePhoto} />
        </div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateUserStatus}/>
    </div>
}
export default ProfilePhoto