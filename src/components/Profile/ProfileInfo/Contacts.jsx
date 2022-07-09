import s from "./ProfileInfo.module.css";

const Contacts = (props) => {
    return <div className={s.contacts}>
        <span className={s.socialNetworks}>Social networks</span>
        {Object.keys(props.profile.contacts).map(function (key) {
            return <div> {key}: {props.profile.contacts[key]}</div>;
        })}
    </div>
}
export default Contacts;