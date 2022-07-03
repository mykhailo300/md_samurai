import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileInfo, getUserStatus, setProfilePage, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.loggedInUserId;
            if(!userId) {
                this.props.history.push("/signIn");
            }

        }
        this.props.getProfileInfo(userId);
        this.props.getUserStatus(userId);
    }
    render() {
        return <Profile {...this.props} status = {this.props.status} profile={this.props.profile} updateUserStatus = {this.props.updateUserStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        loggedInUserId: state.auth.userId
    }
};

export default compose(
    connect(mapStateToProps, {setProfilePage, getProfileInfo, getUserStatus, updateUserStatus}),
    withRouter,
)(ProfileContainer);

