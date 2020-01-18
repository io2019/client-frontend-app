import React from "react";
import API from "../../Utils/ApiSide";
import Alert from "@material-ui/lab/Alert";
import SeatPicker from "./SeatPicker";
import ReliefPicker from "./ReliefPicker";
import Payment from "./Payment";
import {Container} from "@material-ui/core";

/*      PURCHASE STATES
*
*   seatPicker,
*   reliefPicker,
*   payment
*
* */
class PurchaseModal extends React.Component{
    state = {
        purchaseState: 'seatPicker',
        showtime: API.getShowtimeById(this.props.id),
        pickedSeats: [],
        pickedReliefs: [],
        alertMsg: "",
        seatsChanged: false
    };
    array1dTo2d = (array, length) => {
        let seats1d = array.map(el => el);
        let seats2d = [];
        while(seats1d.length) seats2d.push(seats1d.splice(0, length));
        return seats2d;
    };

    handleNextState = () => {
        let {purchaseState} = this.state;
        if(purchaseState === 'seatPicker'){
            this.setState({purchaseState: 'reliefPicker'});
        } else if (purchaseState === 'reliefPicker'){
            this.setState({purchaseState: 'payment'});
        } else {
            this.setState({alertMsg: "Something went wrong - the option you selected is not valid."})
        }
    };
    handlePreviousState = () => {
        let {purchaseState} = this.state;
        if(purchaseState === 'reliefPicker'){
            this.setState({purchaseState: 'seatPicker'});
        } else if (purchaseState === 'payment'){
            this.setState({purchaseState: 'reliefPicker'});
        } else {
            this.setState({alertMsg: "Something went wrong - the option you selected is not valid."})
        }
    };
    handlePickSeats = (seats) => {
        this.setState({pickedSeats: seats});
    };
    handlePickReliefs = (reliefs) => {
        this.setState({pickedReliefs: reliefs});
    };
    handleChangeSeats = (change) => {
        this.setState({seatsChanged: change});
    };
    render() {
        console.log(this.state.pickedReliefs);
        let alertMessage;
        let renderedPurchaseState;
        if(this.state.purchaseState === 'seatPicker') {
            renderedPurchaseState = <SeatPicker
                seats={this.array1dTo2d(this.state.showtime.seats, this.state.showtime.width)}
                width={this.state.showtime.width}
                pickedSeats={this.state.pickedSeats}
                onPickSeats={this.handlePickSeats}
                onNextState={this.handleNextState}
                onSeatsChange={this.handleChangeSeats}
                />
        } else if (this.state.purchaseState === 'reliefPicker') {
            renderedPurchaseState = <ReliefPicker
                pickedSeats={this.state.pickedSeats}
                pickedReliefs={this.state.pickedReliefs}
                width={this.state.showtime.width}
                seatsChanged={this.state.seatsChanged}
                onPickRelief={this.handlePickReliefs}
                onNextState={this.handleNextState}
                onPreviousState={this.handlePreviousState}
                onSeatsChange={this.handleChangeSeats}
            />
        } else if (this.state.purchaseState === 'payment') {
            renderedPurchaseState = <Payment
                onNextState={this.handleNextState}
                onPreviousState={this.handlePreviousState}/>
        }
        if(this.state.alertMsg){
            alertMessage = <Alert severity="error">{this.state.alertMsg}</Alert>
        }
        return (
            <>
                {alertMessage}
                <Container>
                    {renderedPurchaseState}
                </Container>

            </>
        )
    }
}

export default PurchaseModal;