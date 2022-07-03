import './App.css';
import {HashRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import SignIn from "./components/SignIn/SignIn";
import SignOut from "./components/SignOut/SignOut";
import React from "react"
import {compose} from "redux";
import {withRouter} from "react-router";
import {connect, Provider} from "react-redux";
import {initializateApp} from "./redux/appReducer";
import PreLoader from "./components/common/PreLoader/PreLoader";
import store from "./redux/redux-store";

import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'), );



class App extends React.Component {
    componentDidMount() {
        this.props.initializateApp();
    }
    render() {
        if(!this.props.initialized) {
            return <PreLoader isFetching={true}/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                    <Route path="/dialogs/" render={withSuspense(DialogsContainer)}/>
                    <Route path="/users" render={()=> <UsersContainer/>}/>
                    <Route path="/news" render={()=> <News/>}/>
                    <Route path="/signIn" render={()=> <SignIn/>}/>
                    <Route path="/signOut" render={()=> <SignOut/>}/>
                    <Route path="/music" render={()=> <Music/>}/>
                    <Route path="/settings" render={()=> <Settings/>}/>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        initialized: state.app.initialized
    })
}
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializateApp})
)(App)

let SamuraiJSApp = () => {
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default SamuraiJSApp;
