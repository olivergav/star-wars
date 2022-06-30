let store = [];
const MAGIC = 'MAGIC';

function reducer(state, action) {
    if (action.type === MAGIC) {
        return [...state, action.payload]
    }
    return state;
}

function dispatch(action) {
   store = reducer(store, action)
}


const action1 = {
    type: MAGIC,
    payload: {answer: 42}
}

dispatch(action1);