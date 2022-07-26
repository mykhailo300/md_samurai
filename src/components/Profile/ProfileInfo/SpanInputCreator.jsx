import s from "./ProfileInfoData/ProfileInfoData.module.css"
import {Field} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";

const SpanInputCreator = ({spanText, name, type = "text", component = Input}) => {
    return (
        <div>
            <span className={s.usualSpan}>{spanText}</span><Field name={name}
                                                                  type={type}
                                                                  component={component}
        />
        </div>
    )
}

export default SpanInputCreator;
