// a reducer takes in two things.
// 1. It takes in the action

//2. A copy of current state

// (action, store)

const comments = (state = [], action) => {
    console.log(state, action)
    return state;
}

export default comments