import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

class ReliefPicker extends React.Component {
    state = {
      pickedReliefs: this.props.seatsChanged ? this.props.pickedSeats.map(() => "normal") :this.props.pickedReliefs
    };

    rowWithSeat = (seat) => Math.floor(seat / this.props.width) + 1;
    seatInRow = (seat) => seat % this.props.width + 1;

    handleRadioChange = (event) => {
        let value = event.target.value;
        let index = parseInt(event.target.name);
        let newPickedReliefs = this.state.pickedReliefs;
        if (value === "reduced") {
            newPickedReliefs[index] = "reduced";
        } else {
            newPickedReliefs[index] = "normal";
        }
        this.setState({pickedReliefs: newPickedReliefs})
    };
    handlePreviousState = () => {
        this.props.onSeatsChange(false);
        this.props.onPickRelief(this.state.pickedReliefs);
        this.props.onPreviousState();
    };
    handleNextState = () => {
        this.props.onSeatsChange(false);
        this.props.onPickRelief(this.state.pickedReliefs);
        this.props.onNextState();
    };

    render() {
        return(
            <>
                <h1>Relief</h1>
                <TableContainer component={Paper}>
                    <Table aria-label="relief table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Row</TableCell>
                                <TableCell>Seat</TableCell>
                                <TableCell>Relief</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {this.props.pickedSeats.map((seat, i) => {

                                return (
                                    <React.Fragment key={i}>
                                        <TableRow>
                                            <TableCell>{this.rowWithSeat(seat)}</TableCell>
                                            <TableCell>{this.seatInRow(seat)}</TableCell>
                                            <TableCell>
                                                <RadioGroup
                                                    row
                                                    name={i+'relief'}
                                                    value={this.state.pickedReliefs[i]}
                                                    onChange={this.handleRadioChange}
                                                >
                                                    <FormControlLabel
                                                        value="normal"
                                                        control={<Radio color="primary" />}
                                                        label="Normal" />
                                                    <FormControlLabel
                                                        value="reduced"
                                                        control={<Radio color="secondary" />}
                                                        label="Reduced" />
                                                </RadioGroup>
                                            </TableCell>
                                        </TableRow>
                                    </React.Fragment>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid item><Button variant="contained" color="secondary" onClick={this.handlePreviousState}>Previous</Button></Grid>
                    <Grid item><Button variant="contained" color="primary" onClick={this.handleNextState}>Next</Button></Grid>

                </Grid>
            </>
        )
    }
}

export default ReliefPicker;