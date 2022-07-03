import s from "./Post.module.css";

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://www.pngkey.com/png/detail/137-1377461_contacts-contact-icon.png" className={s.ava}></img>
			{props.message}
			<div>
				<span>likes : {props.likesNumber}</span>
			</div>
		</div>
	);
};

export default Post;