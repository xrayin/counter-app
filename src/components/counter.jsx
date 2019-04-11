import React, {Component} from 'react';

class Counter extends Component {


    //You use this constructor methood when = () => function description doesn't work to bind the objects.
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement().bind(this);
    // }

    render() {

        const {counter, onIncrement, onDecrement, onDelete} = this.props;

        return (
                <div className="row">
                    <div className="col-1">
                        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    </div>
                    <div className="col">
                        <button onClick={() => onIncrement(counter)} className="btn btn-secondary btn-sm"> + </button>
                        <button onClick={() => onDecrement(counter)} className="btn btn-secondary btn-sm m-2" disabled={counter.value === 0 ? "disabled" : ""}> - </button>
                        <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm"> x </button>
                    </div>
                </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : this.props.counter.value;
    }

}

export default Counter;