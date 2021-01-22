import * as actions from "./actions";
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware])


describe('setSearchField',()=>{
    it('creates an action to change search field',()=>{
        const text = 'abc'
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        };

        expect(actions.setSearchField(text)).toEqual(expectedAction)
    })
})


describe('requestRobots',()=>{
    const store = mockStore()
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING,
    };

    it('handles requesting robots API',()=>{
        store.dispatch(actions.requestRobots())
        expect( store.getActions()).toEqual([expectedAction])
    })
})