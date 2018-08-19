import React, { Component } from 'react';
import { createStore, increment, decrement } from './store';

const counterStore = createStore({ n: 0 });

export default class Counter extends Component {
    state = counterStore.getState();

    refresh = newState => {
        if(this.mounted) {
            this.setState(newState);
        }
    };

    componentDidMount() {
        this.mounted = true;
        counterStore.subscribe(this.refresh);
    }

    componentWillUnmount() {
        this.mounted = false;
        counterStore.unsubscribe(this.refresh);
    }

    inc = () => counterStore.dispatch(increment);
    dec = () => counterStore.dispatch(decrement);

    render() {
        return (
            <div>
                <button onClick={this.inc}> + </button>
                <h2>{this.state.n}</h2>
                <button onClick={this.dec}> - </button>
            </div>
        )
    }
}

