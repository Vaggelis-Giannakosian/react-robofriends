import './Hello.css'

const Hello = (props) => {

    return (
        <div>
            <h1>Hello World!</h1>
            <p className='tl'>{props.greeting}</p>
        </div>
    );

}


export default Hello;