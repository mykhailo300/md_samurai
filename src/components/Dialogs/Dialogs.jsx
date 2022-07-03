import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import * as PropTypes from "prop-types";
import SendMessage from "./AddMessageForm";

function SendMessageForm(props) {
    return null;
}

SendMessageForm.propTypes = {sendMessage: PropTypes.func};
const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}
                                                                         key={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <SendMessage sendMessage = {props.sendMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;