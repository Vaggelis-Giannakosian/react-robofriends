import React, {Component, ErrorInfo} from 'react'

interface IAppProps {
    children: JSX.Element
}

interface IAppState {
    hasError: boolean
}

class ErrorBoundry extends Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            hasError: true
        })
    }

    render(): JSX.Element {

        return this.state.hasError ?
            <h1>Oooops. Something went wrong</h1> :
            this.props.children;
    }

}

export default ErrorBoundry

