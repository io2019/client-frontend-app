import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
// import {FormControlLabel} from "@material-ui/core";

class SeatPicker extends React.Component{
    state = {
        checkedSeats: this.props.pickedSeats
    };

    isChecked = (seat) => {
        let checkBoxState = false;
        this.state.checkedSeats.forEach(checkedSeat => {
            if(seat === checkedSeat) {
                checkBoxState = true;
                return 0;
            }

        });
        return checkBoxState;
    };

    handleCheckboxChange = event => {
        let value = parseInt(event.target.value);
        let newCheckedSeats = this.state.checkedSeats;
        if(this.isChecked(value)) {
            console.log(newCheckedSeats);
            newCheckedSeats = this.state.checkedSeats.filter(seat => seat !== value);
            this.setState({checkedSeats: newCheckedSeats});
        } else {
            newCheckedSeats.push(value);
            this.setState({checkedSeats: newCheckedSeats});
        }
    };

    handleNextState = () => {
        let sortedSeats = this.state.checkedSeats;
        sortedSeats.sort((a, b) => a - b);
        this.props.onPickSeats(sortedSeats);
        this.props.onNextState();
    };

    render() {
        let width = this.props.width;
        let seats2d = this.props.seats;
        // let seats2d = [];
        // while(seats1d.length) seats2d.push(seats1d.splice(0,width));
        // console.log(seats2d);
        return (
            <>
                <h1>SeatPicker</h1>
                <FormControl component={Grid}>
                    {seats2d.map((seatsRow, i) => {

                        return(
                            <React.Fragment key={i}>
                                <FormGroup row>
                                    {seatsRow.map((seat, j) => {
                                    if (seat === 1){

                                        return(
                                            <React.Fragment key={width*i+j}>
                                                <Checkbox disabled checked/>
                                            </React.Fragment>
                                        )
                                    }
                                    else {
                                        return(
                                            <React.Fragment key={width*i+j}>
                                                <Checkbox
                                                    checked={this.isChecked(width*i+j)}
                                                    value={width*i+j}
                                                    onChange={this.handleCheckboxChange}
                                                />
                                            </React.Fragment>
                                        )}
                                    })}
                                </FormGroup>
                            </React.Fragment>)
                        }
                    )}
                </FormControl>
                {/*<Grid*/}
                {/*    container*/}
                {/*    direction="row"*/}
                {/*    justify="center"*/}
                {/*    alignItems="center"*/}
                {/*    spacing={1}*/}
                {/*>*/}
                {/*    {seats1d.map((seat, i) => {*/}
                {/*        if (seat === 1){*/}
                {/*            return(*/}
                {/*                <>*/}
                {/*                    <FormControlLabel*/}
                {/*                        control={<Checkbox disabled checked/>}*/}
                {/*                        label={"R:"+(Math.floor(i/this.props.width)+1)+" M:"+(i%this.props.width+1)}*/}
                {/*                        />*/}
                {/*                    /!*<Grid key={i} item xs={1}>*!/*/}
                {/*                        /!*<Checkbox disabled checked/>*!/*/}
                {/*                    /!*</Grid>*!/*/}
                {/*                </>*/}
                {/*            )*/}
                {/*        }*/}
                {/*        else {*/}
                {/*        return(*/}
                {/*        <>*/}
                {/*            <FormControlLabel*/}
                {/*            control={<Checkbox />}*/}
                {/*            label={"R:"+(Math.floor(i/this.props.width)+1)+" M:"+(i%this.props.width+1)}*/}
                {/*        />*/}
                {/*           /!*<Grid key={i} item xs={1}><Checkbox /></Grid>*!/*/}
                {/*        </>*/}
                {/*        )}*/}
                {/*    })}*/}
                {/*</Grid>*/}
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    spacing={5}
                >
                    {/*<Grid item><Button variant="contained" color="secondary" onClick={this.props.onPreviousState}>Previous</Button></Grid>*/}
                    <Grid item><Button variant="contained" color="primary" onClick={this.handleNextState}>Next</Button></Grid>

                </Grid>
            </>
        )
    }
}

export default SeatPicker;