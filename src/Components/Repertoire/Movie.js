import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import PurchaseModal from "../Purchase/PurchaseModal";

class Movie extends React.Component
{
    state = {
        "open" : false
    }

    handleClickOpen = () => {
    this.setState(
        {
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
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
                    <PurchaseModal id={1}/>
                </Dialog>
            </>
 )
    }
};

export default Movie;