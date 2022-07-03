import usersReducer, {
    followSuccess, setIsDisabledButton, setIsFetching,
    setSelectedPage,
    setTotalUsersCount,
    setUsers,
    unFollowSuccess
} from "../usersReducer";

test("after following user`s property followed should be true", () => {
    // test data
    let action = followSuccess(1);
    let state = {
        users: [
            {id: 1, followed: false}
        ]
    }
    // 2. action
    let newState = usersReducer(state, action);
    // 3. expectation
    expect(newState.users[0].followed).toBe(true);
});

test("after unfollowing user`s property followed should be false", () => {
    // test data
    let action = unFollowSuccess(1);
    let state = {
        users: [
            {id: 1, followed: false}
        ]
    }
    // 2. action
    let newState = usersReducer(state, action);
    // 3. expectation
    expect(newState.users[0].followed).toBe(false);
});

test("after setting users array users should be filled by users", () => {
    // test data
    let action = setUsers([
        {
            "name": "Shubert",
            "id": 1,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "Hacker",
            "id": 2,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        }
    ]);
    let state = {
        users: []
    }
    // 2. action
    let newState = usersReducer(state, action);
    // 3. expectation
    expect(newState.users.length).toBe(2);
});

test("after selecting a page a property selectedPage should contain page from action", () => {
    // test data
    let action = setSelectedPage(6);
    let state = {
        selectedPage: 3
    }
    // 2. action
    let newState = usersReducer(state, action);
    // 3. expectation
    expect(newState.selectedPage).toBe(6);
});

test("after setting total count of users property totalUsersCount should be less that or equal 50", () => {
    // test data
    let action = setTotalUsersCount(78);
    let state = {
        totalUsersCount: 0
    }
    // 2. action
    let newState = usersReducer(state, action);
    // 3. expectation
    expect(newState.totalUsersCount).toBeLessThanOrEqual(50);
});

test("after setting isFetching as true property it should be true and vica versa", () => {
    // test data
    let action = setIsFetching(true);
    let state = {
        isFetching: false
    }
    // 2. action
    let newState = usersReducer(state, action);
    // 3. expectation
    expect(newState.isFetching).toBe(true);
});

test("after setting an isDisabledButtons array if isFetching is true it should contain an element that is in action", () => {
    // test data
    let action = setIsDisabledButton(5, true);
    let state = {
        isDisabledButtons: []
    }
    // 2. action
    let newState = usersReducer(state, action);
    // 3. expectation
    expect(newState.isDisabledButtons[0]).toBe(5);
});


