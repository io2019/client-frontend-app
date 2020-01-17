import React from "react";
import Movie from "./Movie";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import PurchaseModal from "../Purchase/PurchaseModal";

class MoviePicker extends React.Component{

    state = {
        "open" : false,
        "id" : 0
    };

    handleClickOpen = (x) => {
        this.setState(
            {
                "id": x,
                "open": true

            }
        )
    };

    handleClose = () => {
        this.setState(
            {
                "open": false
            }
        )
    };

    clickHandler(id){

    }
    render() {


        return (
            <>


                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">title</TableCell>
                                <TableCell align="center">duration(minutes)</TableCell>
                                <TableCell align="center">shows</TableCell>
                    </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                typeof this.props.showtimes === "undefined" ? 'We don\'t play movies that day.' :
                                this.props.showtimes.map((x, key) => {
                                return <TableRow key={key}>
                                        <TableCell align="center">
                                            <Movie movie={x.movie}/>
                                        </TableCell>
                                    <TableCell align="center">
                                        {x.movie.duration}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="outlined" color="primary" onClick={() => this.handleClickOpen(x.id)}>
                                            {x.date.getHours()}.{x.date.getMinutes() === 0 ? "00" : x.date.getMinutes()}
                                        </Button>

                                    </TableCell>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Dialog open={this.state.open} onClose={this.handleClose} fullWidth maxWidth="xl" aria-labelledby="form-dialog-title">
                    <DialogTitle id="max-width-dialog-title">Purchase</DialogTitle>
                    <PurchaseModal id={this.state.id}/>
                </Dialog>
            </>


        )
    }
}

export default MoviePicker;