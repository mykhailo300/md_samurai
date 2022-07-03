import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import AddPost from "./AddPostForm";


const MyPosts = (props) => {
    let postsElements = props.profilePage.posts.map(p => <Post message={p.message}
                                                               likesNumber={p.likesNumber} key={p.id}/>);

    return (
        <div className={s.myPosts}>
            <div className={s.title}>
                My posts
            </div>
			<div className={s.myPosts}>
				<AddPost addPost={props.addPost}/>
				{postsElements}
			</div>
        </div>
    );
};

export default MyPosts;