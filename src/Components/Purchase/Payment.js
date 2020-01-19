import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import "../../App.css"
import TextField from "@material-ui/core/TextField";

class Payment extends React.Component {

    state = {
        client: {
            'firstname': '',
            'lastname': '',
            'email': '',
            'phonenumber': ''
        },
        isValid: false
    };

    rowWithSeat = (seat) => Math.floor(seat / this.props.width) + 1;
    seatInRow = (seat) => seat % this.props.width + 1;

    handleSubmit = () => {
        this.props.onSubmit(this.state.client);
    };

    handleTextChange = (event) => {
        let {id, value} = event.target;
        let newClient = this.state.client;
        newClient[id] = value;
        this.setState({client: newClient});
        this.checkValid();
    };

    checkValid = () => {
        let {client, isValid} = this.state;
        // console.log(isValid, client);
        if(isValid === false && client.firstname !== '' && client.lastname !== '' && client.email !== '' ) {
            this.setState({isValid: true})
        } else if (isValid === true && (client.firstname === '' || client.lastname === '' || client.email === '')) {
            this.setState({isValid: false})
        }
    };
    render() {
        return(
            <>
                <h1>Payment</h1>
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        container
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={6}>
                            <TextField
                                required
                                margin="dense"
                                onChange={this.handleTextChange}
                                id="firstname"
                                label="Firstname"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                margin="dense"
                                onChange={this.handleTextChange}
                                id="lastname"
                                label="Lastname"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                margin="dense"
                                onChange={this.handleTextChange}
                                id="email"
                                label="Email"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                margin="dense"
                                onChange={this.handleTextChange}
                                id="phonenumber"
                                label="Phone number"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Button disabled={!this.state.isValid} variant="contained" color="primary" onClick={this.handleSubmit} size="large">
                                <SendIcon/>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <TableContainer className="container" component={Paper}>
                            <Table stickyHeader aria-label="relief table">
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
                                                <TableRow hover>
                                                    <TableCell>{this.rowWithSeat(seat)}</TableCell>
                                                    <TableCell>{this.seatInRow(seat)}</TableCell>
                                                    <TableCell>
                                                        {this.props.pickedReliefs[i]}
                                                    </TableCell>
                                                </TableRow>
                                            </React.Fragment>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid item><Button variant="contained" color="secondary" onClick={this.props.onPreviousState}>Previous</Button></Grid>
                </Grid>

            </>
        )
    }
}

export default Payment;