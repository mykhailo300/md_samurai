import s from "./ProfileStatus.module.css"
import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateUserStatus(this.state.status)
    }
    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            <div className={s.statusWrapper}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "'Status'"}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange = {this.onChangeStatus}
                               autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status} className={s.inputStatus} type="text" />
                    </div>}
            </div>
        </div>
    }
}

export default ProfileStatus;