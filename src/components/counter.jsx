import React, {Component} from 'react';

class Counter extends Component {

    render() {

        const {counter, onIncrement, onDecrement, onDelete} = this.props;

        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses(counter)}>{this.formatCount(counter)}</span>
                </div>
                <div className="col">
                    <button onClick={() => onIncrement(counter)} className="btn btn-primary btn-sm">+</button>
                    <button onClick={() => onDecrement(counter)} className="btn btn-secondary btn-sm m-2"
                    disabled={this.props.counter.value === 0 ? "disabled" : ""}>-</button>
                    <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm">x</button>
                    {/*<div>{this.renderTags()}</div>*/}
                </div>
            </div>
        );
    }

    // renderTags() {
    //     if (counter.tags.length === 0) {
    //         return <p>No tags available!</p>;
    //     }
    //
    //     return <ul>{counter.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }

    getBadgeClasses = (counter) => {
        let classes = "badge m-2 ";
        classes += counter.value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    }

    formatCount = (counter) => {
        const {value} = counter;
        return value === 0 ? 'Zero' : value;
    }

}

export default Counter;
