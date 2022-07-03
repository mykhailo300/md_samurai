import React from "react"
import {Redirect} from "react-router";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render() {
            if(!this.props.isAuth) return <Redirect to="/signIn"/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}



