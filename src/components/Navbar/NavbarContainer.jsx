import Navbar from "./Navbar";
import FriendItem from "./FriendItem/FriendItem";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends.map(f => <FriendItem name={f.name} id={f.id} avatar={f.avatar} key = {f.id}/>)
    }
}

export default connect(mapStateToProps)(Navbar);
