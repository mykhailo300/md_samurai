import s from "./ProfileInfo.module.css";
import PreLoader from "../../common/PreLoader/PreLoader";
import lookingForAJob from "../../../assets/images/lookingForAJob.jpg"
import notLookingForAJob from "../../../assets/images/notLookingForAJob.jpg"
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
	if(!props.profile) {
		return <PreLoader />
	}
	return (
		<div className={s.profileInfo}>
			{/*<div>
				<img alt={"what"} src="https://assets.website-files.com/5f1175d8eef44a6c5d6661fb/611b61b8b620321af5b1086a_content-aggregation.png" className={s.background}></img>
			</div>*/}
			<div className={s.avaAndStatus}>
				<div className={s.ava}>
					<img src={props.profile.photos.large} alt="No photo"/>
				</div>
				<ProfileStatus status ={props.status} updateUserStatus = {props.updateUserStatus}/>
			</div>


			<div className={s.profileDescription}>
				<div className={s.fullName}>
					{props.profile.fullName}
				</div>
				<div className={s.aboutMe}>
					{props.profile.aboutMe}
				</div>
				<div className={s.lookingForAJob}>
					<img src={props.profile.lookingForAJob ? lookingForAJob : notLookingForAJob} className={s.lookingForAJobImage} alt=""/>
					<span className={s.lookingForAJobText}>
						{props.profile.lookingForAJobDescription}
					</span>
				</div>
				<div className={s.contacts}>
					<span className={s.socialNetworks}>Social networks</span>
					{Object.keys(props.profile.contacts).map(function(key) { return <div> {key}: {props.profile.contacts[key]}</div>; })}
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;