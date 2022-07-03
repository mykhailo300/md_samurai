import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (textOfPost) => {
            dispatch(addPostActionCreator(textOfPost));
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;