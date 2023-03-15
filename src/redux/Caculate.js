export function caculate(oldstate, action) {
    if (oldstate === void 0) { oldstate = { digit: 0 }; }
    var state = Object.assign({}, oldstate);
    switch (action.type) {
        case "Add":
            state.digit += 1;
            break;
    }
    return state;
}
