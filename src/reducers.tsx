import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING
} from './constants'
import {IRobot} from "./containers/App/App";


interface ISearchState {
    searchField: string
}

const initialStateSearch: ISearchState = {
    searchField: '',
}

interface ISearchAction {
    type?: string,
    payload?: string
}

export const searchRobots = (state: ISearchState = initialStateSearch, action: ISearchAction = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state;
    }
}

interface IRequestState {
    isPending: boolean,
    robots: IRobot[],
    error: string
}

const initialStateRobots: IRequestState = {
    isPending: false,
    robots: [],
    error: ''
}

interface IRequestAction {
    type?: string,
    payload?: string
}

export const requestRobots = (state: IRequestState = initialStateRobots, action: IRequestAction = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {isPending: false, robots: action.payload})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {isPending: false, error: action.payload})
        default:
            return state;
    }
}
