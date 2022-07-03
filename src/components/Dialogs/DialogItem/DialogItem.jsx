import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "dialog/" + props.id;

    return (
        <NavLink to={path} activeClassName={s.activeLink}>
            {<img src={props.avatar} alt=""/>}
            <div>{props.name}</div>
        </NavLink>
    )
}
export default DialogItem;