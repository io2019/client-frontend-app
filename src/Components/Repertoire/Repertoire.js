import React from "react";
import DatePicker from "./DatePicker";
import MoviePicker from "./MoviePicker";
import API from "../../Utils/ApiSide";
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";

class Repertoire extends React.Component{

    constructor(props) {
        super(props);
        this.todayDate = new Date();
        this.state = {
                'date' : {
                    'year': this.todayDate.getFullYear(),
                    'month': this.todayDate.getMonth(),
                    'day': this.todayDate.getDate()
                },
            'showtimes':  [],
                'offset': 0
            };
        this.dayChosen= this.dayChosen.bind(this);
    }

    async componentDidMount(){
        let newDate = new Date();
        let date = newDate.getFullYear() + "-" + ((parseInt(newDate.getMonth()) + 1) < 10 ? ( ("" + parseInt(newDate.getMonth())) + 1) : (parseInt(newDate.getMonth())) + 1)  + "-" + newDate.getDate();
        this.setState({
            'showtimes':  await API.getShowTimes(date),
        });
    }

    async dayChosen(offset){

            let newDate = new Date();
            newDate.setDate(newDate.getDate() + parseInt(offset));
            let date = newDate.getFullYear() + "-" + ((parseInt(newDate.getMonth()) + 1) < 10 ? ( ("" + parseInt(newDate.getMonth())) + 1) : (parseInt(newDate.getMonth())) + 1)  + "-" + newDate.getDate();
            console.log(await API.getShowTimes(date))
            this.setState({
                'showtimes' : await API.getShowTimes(date),
                'date' : {
                    'year': this.todayDate.getFullYear(),
                    'month': this.todayDate.getMonth(),
                    'day': this.todayDate.getDay()
                },
                    'offset': offset
            });
    }



    render() {
        return (
            <div>
                <Box m={2}>
                    <Button size="large" variant="outlined" color="primary">
                        Repertoire
                    </Button>
                </Box>
                    <DatePicker offset={this.state.offset} onDateChange={this.dayChosen}/>

                <MoviePicker showtimes={this.state.showtimes}/>
            </div>

        )
    }
}

export default Repertoire;