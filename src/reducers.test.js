import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING
} from './constants'

import * as reducers from './reducers'

/**
 * Search Robots
 */
describe('searchRobots', () => {
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''})
    })

    it('should return the changed state', () => {
        const action = {
            type: CHANGE_SEARCH_FIELD,
            payload: 'jo'
        }
        expect(reducers.searchRobots(undefined, action)).toEqual({searchField: 'jo'})
    })
})

/**
 * Request Robots
 */
describe('requestRobots', () => {
    const initialState = {
        isPending: false,
        robots: [],
        error: ''
    };

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialState)
    })

    it('should return the pending state', () => {
        const action = {
            type: REQUEST_ROBOTS_PENDING,
            payload: {}
        }

        expect(reducers.requestRobots(undefined, action)).toEqual(Object.assign({}, initialState, {isPending: true}))
    })

    it('should return the success state', () => {
        const payload = [{
            id: 1,
            name: 'Name',
            email: 'email@email.gr'
        }]
        const action = {
            type: REQUEST_ROBOTS_SUCCESS,
            payload
        }
        expect(reducers.requestRobots(undefined, action)).toEqual(Object.assign({}, initialState, {robots: payload}))
    })

    it('should return the failed state', () => {
        const action = {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'Error'
        }
        expect(reducers.requestRobots(undefined, action)).toEqual(Object.assign({}, initialState, {error: action.payload}))
    })
})