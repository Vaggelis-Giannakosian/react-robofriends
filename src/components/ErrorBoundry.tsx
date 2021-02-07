import React, {Component, ErrorInfo} from 'react'

interface IAppProps {}

interface IAppState {
    hasError:boolean
}

class ErrorBoundry extends Component<IAppProps, IAppState>{

    constructor(props : IAppProps) {
        super(props);

        this.state = {
            hasError:false
        }
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        this.setState({
            hasError:true
        })
    }

    render() {
        if (this.state.hasError)
        {
            return <h1>Oooops. Something went wrong</h1>;
        }

        return this.props.children;
    }

}

export default ErrorBoundry

