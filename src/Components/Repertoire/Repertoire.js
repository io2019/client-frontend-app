import React from "react";
import DatePicker from "./DatePicker";
import MoviePicker from "./MoviePicker";
import API from "../../Utils/ApiSide";
import Grid from "@material-ui/core/Grid";

class Repertoire extends React.Component{

    constructor(props) {
        super(props);
        this.todayDate = new Date();
        let date = this.todayDate.getFullYear() + "-" + this.todayDate.getMonth() + "-" + this.todayDate.getDate();
        this.state = {
                'date' : {
                    'year': this.todayDate.getFullYear(),
                    'month': this.todayDate.getMonth(),
                    'day': this.todayDate.getDate()
                },
            'showtimes': API.getShowTimes(date).showtimes,
                'offset': 0
            };
        this.dayChosen= this.dayChosen.bind(this);
    }

    dayChosen(offset){
        console.log(offset)
        if(offset >= 0 && offset < 8){

            let newDate = new Date()
            console.log(newDate.getDate());
            newDate.setDate(newDate.getDate() + parseInt(offset));
            let date = newDate.getFullYear() + "-" + newDate.getMonth() + "-" + newDate.getDate();
            console.log(date);
            this.setState({
                'showtimes' : API.getShowTimes(date).showtimes,
                'date' : {
                    'year': this.todayDate.getFullYear(),
                    'month': this.todayDate.getMonth(),
                    'day': this.todayDate.getDay()
                },
                    'offset': offset
            });
        }

    }



    render() {
        return (
            <div>
                <h1>Repertoire</h1>
                    <DatePicker offset={this.state.offset} onDateChange={this.dayChosen}/>

                <MoviePicker showtimes={this.state.showtimes}/>
            </div>

        )
    }
}

export default Repertoire;