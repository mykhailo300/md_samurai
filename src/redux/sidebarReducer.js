let initialState = {
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
};

let sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;