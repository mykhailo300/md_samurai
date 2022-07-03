const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
        dialogs: [
            {
                id: 1,
                name: "Oleh",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Messages_logo.svg",
            },
            {
                id: 2,
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
    }

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessageUser = {
                id: 6,
                name: "Me",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Messages_logo.svg"
            };
            let newMessage = {
                id: 6, message: action.textOfMessage
            };
            return {
                ...state,
                dialogs: [...state.dialogs, newMessageUser],
                messages: [...state.messages, newMessage],
            }
        }

        default:
            return state;
    }
};

export const sendMessageActionCreator = (textOfMessage) => ({type: SEND_MESSAGE, textOfMessage});

export default dialogsReducer;