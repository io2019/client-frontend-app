function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }

    return array;
}

const API = {
    async getShowtimeById(id){
        const axios = require('axios').default;
        const showroom = await axios.get("http://localhost:8080/showtimes/" + id);
        // if(id === 1){
        //     showtime = {
        //         width: 21,
        //         height: 15,
        //         seats: [0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0]
        //     }
        // }
        const width = showroom.data.showroom.noOfColumns;
        const height= showroom.data.showroom.noOfRows;
        const seats = zeros([width, height])
        let showtime = {};
        console.log(showroom.data.takenSeats.length)
        if(showroom.data.takenSeats.length == 0){
            showtime = {
                width: width,
                height: height,
                seats: seats

            }
        }else{
            showroom.data.takenSeats.forEach((x) => {
                seats[parseInt(x) / parseInt(width)][parseInt(x) % parseInt(width)] = 1;
                showtime = {
                    width: width,
                    height: height,
                    seats: seats

                }
            })
        }
    console.log(showtime)
        return showtime;
    },
   async getShowTimes(date){
        const axios = require('axios').default;
        const response = await axios.get('http://localhost:8080/showtimes?startDate=' + date + "T0000" + "&endDate=" + date  + "T2400");
        //  const response = await axios.get("http://localhost:8080/showtimes/5");

        return response.data ? response.data : [];
    },
    async payment(client, seats, reliefs, showId){
        const axios = require('axios').default;
        const seatsReliefs = []
        seats.forEach((x, i) => {
            seatsReliefs.push({
                "seatPosition": x,
                "ticketType": {
                    'id': (reliefs[i] == "reduced"? 12 : 11),
                    "name": reliefs[i],
                    "price": (reliefs[i] == "reduced"? 21 : 26),
                    "isActive": true
                },
                "showtimeId":showId
            })
        })
        await axios.post('http://localhost:8080/orders/', {
            "client": client,
            "tickets": seatsReliefs
        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }
};

export default API;