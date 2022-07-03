import Dialogs from "./Dialogs";
import {sendMessageActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (textOfMessage) => {
            dispatch(sendMessageActionCreator(textOfMessage));
        },
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);