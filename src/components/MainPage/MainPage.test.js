import MainPage from './MainPage'
import {shallow, mount, render} from 'enzyme'
import {robots} from "../../robots";


it('Main Page',()=>{
    const mounted = shallow(<MainPage robots={ robots }/>)

    expect(mounted.length).toEqual(1)
    expect(mounted).toMatchSnapshot()
})