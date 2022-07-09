import s from "./ProfileStatus.module.css"
import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    let onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    return <div>
        <div className={s.statusWrapper}>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>Status: {props.status || ""}</span>
                </div>}
            {editMode &&
                <div>
                    <input onChange={onChangeStatus}
                           autoFocus={true} onBlur={deActivateEditMode} value={[status]}
                           className={s.inputStatus} type="text"/>
                </div>}
        </div>
    </div>

}

export default ProfileStatus;