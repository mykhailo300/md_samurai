import React from "react";
import Paginator from "../common/Paginator/Paginator";
import {User} from "./User";

let Users = ({selectedPage, onSetSelectedPage, totalUsersCount, pageSize, ...props}) => {

    return (
        <div>
            <Paginator selectedPage={selectedPage} totalItemsCount={totalUsersCount}
                       pageSize={pageSize} onSetSelectedPage={onSetSelectedPage} portionSize = "10"/>
            {
                props.users.map(u => <User key={u.id} user={u} unFollow={props.unFollow}
                                           follow={props.follow} isDisabledButtons={props.isDisabledButtons}/>)
            }
        </div>)
}

export default Users;