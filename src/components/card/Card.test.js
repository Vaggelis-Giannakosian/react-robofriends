import Card from './Card'
import {shallow, mount, render} from 'enzyme'


it('simple',()=>{
    expect.assertions(3)

    const robot = {
        id:1,
        name:'Vangelis',
        email:'e.giannakosian@gmail.com'
    }
    expect(4).toBe(4)
    expect(shallow(<Card/>).length).toEqual(1)
    expect(shallow(<Card id={robot.id} name={robot.name} email={robot.email} />)).toMatchSnapshot()
})