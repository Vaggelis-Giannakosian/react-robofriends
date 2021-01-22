import App from './App'
import {shallow, mount, render} from 'enzyme'
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {requestRobots, searchRobots} from "../../reducers";


const rootReducer = combineReducers({searchRobots,requestRobots})
const store = createStore(rootReducer,  applyMiddleware(thunkMiddleware))

it('App',()=>{
    expect(mount( <Provider store={store}>
                  <App/>
              </Provider>).length).toEqual(1)


    expect(mount( <Provider store={store}>
        <App/>
    </Provider>)).toMatchSnapshot()
})