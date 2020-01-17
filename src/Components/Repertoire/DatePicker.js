import React from "react";
import Button from "@material-ui/core/Button";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
class DatePicker extends React.Component{

    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
    }


    handleDateChange(i) {
        this.props.onDateChange(i);
    }

    render() {
        let days = [];
        let date = new Date();
        for(let i = 0 ; i < 8 ; i++){
            days.push(
                <div>
                <h2>{date.getDate()}</h2>
                    {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]}
                    <br/>
                {date.getMonth() + 1}/
                {date.getFullYear()}
                {this.props.offset === i &&
                    <span> </span>
                }
            </div>);
            date.setDate(date.getDate() + 1);

        }
        return (
            <>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={1}
                        >
                        {days.map( (e, i) => {
                            if(this.props.offset === i){

                                return (
                                    <Grid key={i} item>
                                        <Button onClick={() => this.handleDateChange(i)} variant="contained" color="secondary">{e}</Button>
                                    </Grid>
                                );
                            }else{
                                return(
                                    <Grid key={i} item>
                                    <Button onClick={() => this.handleDateChange(i)} variant="contained" color="primary">{e}</Button>
                                    </Grid>
                                );
                            }

                        })}
                        </Grid>


            </>

        )
    }
}

export default DatePicker;