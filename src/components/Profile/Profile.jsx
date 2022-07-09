import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css"
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";

const Profile = (props) => {
    return (
        <div className={s.profileWrapper}>
            <ProfileInfo profile={props.profile}
                         isOwner={props.isOwner}
                         saveProfileInfo = {props.saveProfileInfo}/>
            <ProfilePhoto profile={props.profile}
                          savePhoto={props.savePhoto}
                          isOwner={props.isOwner}
                          status={props.status}
                          updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;