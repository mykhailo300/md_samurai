import {connect} from "react-redux";
import {
    follow, setIsDisabledButton,
    setSelectedPage,
    setTotalUsersCount,
    setUsers,
    unFollow,
    getUsers
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import PreLoader from "../common/PreLoader/PreLoader";
import {compose} from "redux";
import {
    getAllUsers,
    getIsDisabledButtons,
    getIsFetching,
    getPageSize,
    getSelectedPage,
    getTotalUsersCount
} from "../../redux/users-selectors";

class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.selectedPage)
    }

    onSetSelectedPage = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber);
    }

    render() {
        return <>
            <PreLoader isFetching={this.props.isFetching}/>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   selectedPage={this.props.selectedPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onSetSelectedPage={this.onSetSelectedPage}
                   setIsDisabledButton={this.props.setIsDisabledButton}
                   isDisabledButtons={this.props.isDisabledButtons}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        selectedPage: getSelectedPage(state),
        isFetching: getIsFetching(state),
        isDisabledButtons: getIsDisabledButtons(state),
    }
};

export default compose(
    connect(mapStateToProps,
        {
            follow,
            unFollow,
            setUsers,
            setSelectedPage,
            setTotalUsersCount,
            setIsDisabledButton,
            getUsers
        }),
)(UsersComponent)
