import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return(
        <div className={s.message}><div>{props.message}</div></div>
    )
}

export default Message;