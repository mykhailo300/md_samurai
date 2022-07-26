import s from "./ProfileInfo.module.css";
import PreLoader from "../../common/PreLoader/PreLoader";
import React, {useState} from "react";
import ProfileInfoData from "./ProfileInfoData/ProfileInfoData";
import ProfileInfoDataForm from "./ProfileInfoDataForm/ProfileInfoDataForm";

const ProfileInfo = ({profile, saveProfileInfo, isOwner, ...props}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <PreLoader isFetching ={true}/>
    }

    const onSubmit = (formData) => {
        saveProfileInfo(formData).then(() => {
            setEditMode(false);
        })
    }

    return (
        <div className={s.profileInfo}>
            {editMode ?
                <ProfileInfoDataForm initialValues = {profile} onSubmit = {onSubmit} profile ={profile}/> :
                <ProfileInfoData goToEditMode={() => {setEditMode(true)}} profile = {profile} isOwner = {isOwner}/>
            }
        </div>
    );
};

export default ProfileInfo;