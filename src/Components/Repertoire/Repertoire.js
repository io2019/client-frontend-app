import React from "react";
import DatePicker from "./DatePicker";
import MoviePicker from "./MoviePicker";
import API from "../../Utils/ApiSide";

class Repertoire extends React.Component{

    constructor(props) {
        super(props);
        this.todayDate = new Date();
        this.state = {
                'showtimes': API.getShowTimes().showtimes,
                'date' : {
                    'year': this.todayDate.getFullYear(),
                    'month': this.todayDate.getMonth(),
                    'day': this.todayDate.getDate()
                },
                'offset': 0
            };
        this.dayChosen= this.dayChosen.bind(this);
    }

    dayChosen(offset){
        if(offset > 0 && offset < 10){
            this.todayDate.setDate(this.todayDate + offset)
            this.setState({
                'date' : {
                    'year': this.todayDate.getFullYear(),
                    'month': this.todayDate.getMonth(),
                    'day': this.todayDate.getDay()
                },
                    'offset': offset
            })
        }

    }



    render() {
        return (
            <div>
                <h1>Repertoire</h1>
                <DatePicker offset={this.state.offset} onDateChange={this.dayChosen}/>
                <MoviePicker/>
            </div>

        )
    }
}

export default Repertoire;