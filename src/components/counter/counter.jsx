import React, { Component } from 'react';


class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps',prevProps);
        console.log('prevState', prevState);
    };

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    styles = {
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'italic',
    };

    render() {
        const {counter, onIncrement, onDecrement, onReset, onDelete} = this.props;
        return (
        <React.Fragment>
            <div className="row">
                <div className="col-2">
                    <span style={ this.styles}>{counter.product}</span>
                </div>
                <div className="col-1">
                    <span style={ this.styles} className={this.valueClass()}>{this.formatValue()}</span>
                </div>
                <div className="col">
                    <button style={ this.styles} onClick={() => onIncrement(counter)} className="btn btn-primary btn-sm">+</button>
                    <button style={ this.styles} 
                    disabled={counter.value===0 ? 'disabled' : ''}
                    onClick={() => onDecrement(counter)} className="btn btn-secondary btn-sm m-2">-</button>
                    <button style={ this.styles} onClick={() =>onDelete(counter.id)} className="btn btn-danger btn-sm">x</button>
                </div>
            </div>
        </React.Fragment>
        );
    }

    valueClass() {
        let valueClass = "badge m-2 badge-";
        valueClass += (this.props.counter.value === 0) ? "warning" : "primary";
        return valueClass;
    }

    formatValue() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
export default Counter;