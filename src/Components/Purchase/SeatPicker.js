import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #3f51b5 30%, #1a237e 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 100,
        width: 500,
        padding: '0 30px',
        margin: "0 auto",
        display: "block"
    },
    label: {
        textTransform: 'capitalize',
    },
});
function Screen() {
    const classes = useStyles();
    return (
        <Button
            classes={{
                root: classes.root, // class name, e.g. `classes-nesting-root-x`
                label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
        >
            SCREEN
        </Button>
    );

}

class SeatPicker extends React.Component{
    state = {
        checkedSeats: this.props.pickedSeats,
        seatsChanged: false
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
        this.setState({seatsChanged: true});
        if(this.isChecked(value)) {
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
        this.props.onSeatsChange(this.state.seatsChanged);
        this.props.onNextState();
    };

    render() {
        if(this.state.checkedSeats !== this.props.pickedSeats) {

        }
        let width = this.props.width;
        let seats2d = this.props.seats;
        return (
            <>
            <h2>SeatPicker</h2>
                <Screen/>
                <Table size="small" padding="none" style={{ width: 400, margin: 'auto' }}>
                    <TableBody>
                        <FormControl component={Grid}>
                            {seats2d.map((seatsRow, i) => {

                                    return(<FormGroup row><TableRow size="small">
                                        <React.Fragment key={i}>

                                                {seatsRow.map((seat, j) => {
                                                    if (seat === 1){

                                                        return(
                                                            <TableCell size="small">
                                                            <React.Fragment key={width*i+j}>
                                                                <Checkbox size="small" disabled checked></Checkbox>
                                                            </React.Fragment>
                                                            </TableCell>
                                                        )
                                                    }
                                                    else {
                                                        return(
                                                            <TableCell size="small">
                                                            <React.Fragment key={width*i+j}>
                                                                <Checkbox
                                                                    size="small"
                                                                    checked={this.isChecked(width*i+j)}
                                                                    value={width*i+j}
                                                                    onChange={this.handleCheckboxChange}
                                                                />
                                                            </React.Fragment>
                                                            </TableCell>
                                                        )}
                                                })}
                                                <TableCell size="small">
                                                {i + 1}
                                                </TableCell>

                                        </React.Fragment>
                                        </TableRow>
                                        </FormGroup>
                                    )
                                }
                            )}
                        </FormControl>
                    </TableBody>
                </Table>
                <Box m={2} >
                <Button
                    variant="contained"
                    color="primary"
                    disabled={this.state.checkedSeats.length === 0}
                    onClick={this.handleNextState}
                >
                    Next
                </Button>
                </Box>

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
                {/*<Grid*/}
                {/*    container*/}
                {/*    direction="row"*/}
                {/*    justify="flex-end"*/}
                {/*    alignItems="center"*/}
                {/*    spacing={5}*/}
                {/*>*/}
                {/*    <Grid item>*/}
                {/*    </Grid>*/}

                {/*</Grid>*/}
            </>
        )
    }
}

export default SeatPicker;