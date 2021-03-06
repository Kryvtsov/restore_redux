import React, { Component } from 'react';
import './style.css'
import ErrorIndicator from "../error-indicator";
export default class ErrorBoundry extends Component {
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        return this.props.children;
    }
}
