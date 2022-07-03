import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const SignInOut = (props) => {
	if(props.isAuth) {
		return <div>
			{props.login}
			<NavLink to="/signOut" className={s.singOut}>Sign out</NavLink>
		</div>
	} else {
		return <NavLink to="/signIn">Sign in</NavLink>
	}
}

const Header = (props) => {
	return (
		<div className={s.header}>
			<div className={s.logo}>
				<img alt = "logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/480px-Android_O_Preview_Logo.png"></img>
			</div>
			<div className={s.menu}>
				Menu
			</div>
			<div className={s.authBlock}>
				<SignInOut {...props}/>
			</div>
		</div>
	)
};

export default Header;