import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import profilePhoto from "../../assets/images/user.png";
import React from "react";

export const User = ({user, unFollow, follow, isDisabledButtons, key}) => {
    return(
        <div className={s.user}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : profilePhoto} className={s.photo}
                             alt="Nothing"/>
                    </NavLink>
                </div>
                <div className={s.followButton}>
                    {user.followed ? <button disabled={isDisabledButtons.some(id => id === user.id)} onClick={() => {
                            unFollow(user.id);
                        }}>Unfollow</button>
                        : <button disabled={isDisabledButtons.some(id => id === user.id)} onClick={() => {
                            follow(user.id);
                        }}>Follow</button>}

                </div>
            </div>
            <div className={s.userInformation}>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </div>
            </div>
        </div>
    )
}