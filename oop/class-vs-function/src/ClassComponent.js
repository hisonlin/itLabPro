import React from 'react';

export class ClassComponent extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     name: 'Class Component',
        //     color: 'green',
        //     time: new Date()
        // }
    }
    //You can put the state in the constructor or outside of it
    state = {
        name: 'Class Component',
        color: 'green',
        time: new Date()
    }

    //define property
    content = 'This is a class component';
    timerId=null;

    clickHandler = () => {
        this.setState({
            color: 'blue'
        });
    }

    //componentDidMount (useEffect, dependency [])
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                time: new Date()
            });
        }, 1000);
    }

    //componentWillUnmount (useEffect, return function)
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    //useEffect dependency [state] componentDidUpdate
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState, this.state.time);
        console.log('snapshot', snapshot);
    }

    render() {
        return (
            <div onClick={this.clickHandler}>
                <h1>This is {this.state.name}</h1>
                <p style={{color: this.state.color}}>Current time: {this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

//react redux class component example:
//https://codesandbox.io/p/sandbox/react-redux-with-class-components-r1kqd?file=%2Fsrc%2FApp.js
//https://react-redux.js.org/using-react-redux/connect-mapstate
// https://react-redux.js.org/using-react-redux/connect-mapdispatch

//homework 1:
//modify the project to class component with redux
//tips: component need modify
//mapStateToProps, mapDispatchToProps, connect

//homework 2:
//prepare git environment
//git --version