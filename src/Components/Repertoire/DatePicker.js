import React from "react";

class DatePicker extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        let days = [];
        let date = new Date();
        for(let i = 0 ; i < 15 ; i++){
            days.push(<button>
                <h6>{date.getDate()}</h6>
                <h6>{date.getMonth() + 1}</h6>
                <h6>{date.getFullYear()}</h6>
                {this.props.offset == i &&
                <h3>
                    Active
                </h3>
                }
            </button>)
            date.setDate(date.getDate() + 1);

        }
        return (
            <div>
                <h1>DatePicker</h1>
                {days.map( x => {
                    return <div>{x}</div>;
                })}
            </div>

        )
    }
}

export default DatePicker;