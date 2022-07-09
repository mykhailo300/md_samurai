import {Field} from "redux-form";
import React from "react";
import s from "../ProfileInfoData/ProfileInfoData.module.css"
import {Input} from "../../../common/FormsControls/FormsControls";

const SpanInputCreator = ({spanText, name, type = "text", component = Input}) => {
    return (
        <div>
            <span className={s.usualSpan}>{spanText}: </span>
            <Field component={component} type={type} name={name} validate={[]}/>
        </div>
    )
}
export default SpanInputCreator;