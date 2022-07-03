import {reduxForm} from "redux-form";
import {logOutUser} from "../../redux/authReducer";
import s from "./SignOut.module.css"
import {connect} from "react-redux";
import {Redirect} from "react-router";
import React from "react";

const SignOutForm = (props) => {
    return (
        <div className={s.signOutField}>
            <p>You really want to sign out?</p>
            <form onSubmit={props.handleSubmit}>
                <button>Sign out</button>
            </form>
        </div>
    )
}

const SignOutFormRedux = reduxForm({
    form: "logOut"
})(SignOutForm)


const SignOut = (props) => {
    const onSubmit = () => {
        props.logOutUser();
    }
    if(!props.isAuth) {
        return <Redirect to={"/signIn"}/>
    }
    return (
        <SignOutFormRedux onSubmit = {onSubmit}/>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {logOutUser})(SignOut);