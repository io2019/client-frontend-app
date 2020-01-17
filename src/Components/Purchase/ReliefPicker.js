import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class ReliefPicker extends React.Component {
    render() {
        return(
            <>
                <h1>Relief</h1>
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid item><Button variant="contained" color="secondary" onClick={this.props.onPreviousState}>Previous</Button></Grid>
                    <Grid item><Button variant="contained" color="primary" onClick={this.props.onNextState}>Next</Button></Grid>

                </Grid>
            </>
        )
    }
}

export default ReliefPicker;