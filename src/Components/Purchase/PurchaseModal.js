import React from "react";
import API from "../../Utils/ApiSide";
import Alert from "@material-ui/lab/Alert";
import SeatPicker from "./SeatPicker";
import ReliefPicker from "./ReliefPicker";
import Payment from "./Payment";

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
        alertMsg: ""
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

    render() {
        console.log(this.state.pickedSeats);
        let alertMessage;
        let renderedPurchaseState;
        if(this.state.purchaseState === 'seatPicker') {
            renderedPurchaseState = <SeatPicker
                seats={this.array1dTo2d(this.state.showtime.seats, this.state.showtime.width)}
                width={this.state.showtime.width}
                pickedSeats={this.state.pickedSeats}
                onPickSeats={this.handlePickSeats}
                onNextState={this.handleNextState}
                />
        } else if (this.state.purchaseState === 'reliefPicker') {
            renderedPurchaseState = <ReliefPicker
                pickedSeats={this.state.pickedSeats}
                onNextState={this.handleNextState}
                onPreviousState={this.handlePreviousState}/>
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
                {renderedPurchaseState}
            </>
        )
    }
}

export default PurchaseModal;