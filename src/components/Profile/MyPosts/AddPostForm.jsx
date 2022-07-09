import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./MyPosts.module.css";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength150 = maxLengthCreator(150);

const AddPostForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit} className={s.addPost}>
            <div>
                <Field component={Textarea} name={"textOfPost"} value = {props.value}
                        validate = {[required, maxLength150]} placeholder={"Goodbyes"}/>
            </div>
            <div>
                <button>Add a post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: "addPost"
})(AddPostForm)

const AddPost = (props) => {

    const onSubmit = (formData) => {
        props.addPost(formData.textOfPost)
    }
    return <div>
        <AddPostReduxForm onSubmit={onSubmit}/>
    </div>
}

export default AddPost;
