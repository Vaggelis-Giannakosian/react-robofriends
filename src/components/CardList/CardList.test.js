import {shallow,mount} from 'enzyme'
import CardList from "./CardList";
import {robots as mockRobots} from "../../robots"

it('test CardList',()=>{
    expect(mount(<CardList  robots={ mockRobots }/>)).toMatchSnapshot()
})