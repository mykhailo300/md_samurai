import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileInfo,
    getUserStatus,
    savePhoto,
    saveProfileInfo,
    setProfilePage,
    updateUserStatus
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.loggedInUserId;
            if (!userId) {
                this.props.history.push("/signIn");
            }

        }
        this.props.getProfileInfo(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props} isOwner = {!this.props.match.params.userId}/>
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
    connect(mapStateToProps, {setProfilePage, getProfileInfo, getUserStatus,
        updateUserStatus, savePhoto, saveProfileInfo}),
    withRouter,
)(ProfileContainer);

