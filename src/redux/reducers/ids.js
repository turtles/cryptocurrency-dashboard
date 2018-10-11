import {
    REGISTER_REFRESH_INTERVAL,
    CLEAR_REFRESH_INTERVAL
} from '../actions/idsActions';

const defaultState = {};

/**
 * For tracking the id of instances (such as a setInterval routine)
 */
const ids = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTER_REFRESH_INTERVAL:
            return { ...state, intervalId: action.intervalId };

        case CLEAR_REFRESH_INTERVAL:
            return { ...state, intervalId: null };

        default:
            return state;
    }
}

export default ids;