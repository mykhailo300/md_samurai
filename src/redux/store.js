import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesNumber: 33},
                {id: 2, message: "It`s my first post", likesNumber: 0}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [{
                id: 1,
                name: "Oleh",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Messages_logo.svg",
            },
                {id: 2,
                    name: "Denys",
                    avatar: "https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Messages_logo.svg"
                },
                {
                    id: 3,
                    name: "Mother",
                    avatar: "https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Messages_logo.svg"
                },
                {
                    id: 4,
                    name: "Father",
                    avatar: "https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Messages_logo.svg"
                },
                {
                    id: 5,
                    name: "Grandmother",
                    avatar: "https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Messages_logo.svg"
                }
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "What`s up?"},
                {id: 4, message: "Are you at school?"},
                {id: 5, message: "Lunch is ready"}
            ],
            newMessageText: ""
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: "Oleh",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhoInC-m2Amx8nrRpKaCdIEZ61XYngSQ4v08qkhxneMVRqHwxQScO-Rllo4pukJF_VJiQ&usqp=CAU"
                },
                {
                    id: 2,
                    name: "Denys",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhoInC-m2Amx8nrRpKaCdIEZ61XYngSQ4v08qkhxneMVRqHwxQScO-Rllo4pukJF_VJiQ&usqp=CAU"
                },
            ]
        }
    },
    _callSubscriber: () => {
        console.log("State changed");
    },

    getState() {
      return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;