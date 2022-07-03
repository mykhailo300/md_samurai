import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUser} from "../../redux/authReducer";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {compose} from "redux";
import {Redirect} from "react-router";
import s from "./../common/FormsControls/FormsControls.module.css"

const maxLength30 = maxLengthCreator(30);

const SignInForm = ({handleSubmit, error}) => {
    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <Field component={Input} placeholder="Email" name={"email"} validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field component={Input} placeholder="Password" name={"password"} validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field component={Input} type="checkbox" name={"rememberMe"}/>Remember me
            </div>
            {error && <div className={s.errorField}>
                {error}
            </div>}
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

const SingInReduxForm = reduxForm({
    form: "login"
})(SignInForm)

const SignIn = (props) => {
    const onSubmit = (formData) => {
        let {email, password, rememberMe} = formData;
        props.loginUser(email, password, rememberMe);
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Sign in</h1>
        <SingInReduxForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {loginUser})
)(SignIn);

