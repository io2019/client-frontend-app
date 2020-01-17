const API = {
    getShowtimeById(id){
        let showtime = {};
        if(id === 1){
            showtime = {
                width: 21,
                height: 15,
                seats: [0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0]
            }
        }
        if(id === 2){
            showtime = {
                width: 21,
                height: 15,
                seats: [0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1]
            }
        }
        if(id === 3){
            showtime = {
                width: 20,
                height: 15,
                seats: [1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0]
            }
        }
        if(id === 4){
            showtime = {
                width: 16,
                height: 10,
                seats: [1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0]
            }
        }
        if(id === 5){
            showtime = {
                width: 16,
                height: 10,
                seats: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                ]
            }
        }
        return showtime;
    },
    getShowTimes(date){
        let showtime = {};
        if(date === "2020-0-18"){
        showtime = {

            'showtimes': [
                {
                    "id": 1,
                    "date": new Date("2019-11-16T17:00:00Z"),
                    "movie": {
                        "id": 988332,
                        "title": "Tusk",
                        "description": "A brash and arrogant podcaster gets more than he bargained for when he travels to Canada to interview a mysterious recluse... who has a rather disturbing fondness for walruses.",
                        "duration": 110
                    }
                },
                {
                    "id": 2,
                    "date": new Date("2019-11-16T15:00:00Z"),
                    "movie": {
                        "id": 1312323,
                        "title": "Avatar",
                        "description": "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
                        "duration": 180
                    }
                },
                {
                    "id": 3,
                    "date": new Date("2019-11-16T15:00:00Z"),
                    "movie": {
                        "id": 1312323,
                        "title": "Django",
                        "description": "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
                        "duration": 180
                    }
                },
                {
                    "id": 4,
                    "date": new Date("2019-11-16T18:30:00Z"),
                    "movie": {
                        "id": 1312323,
                        "title": "Django",
                        "description": "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
                        "duration": 180
                    }
                }
            ]
        }

        }else if(date === "2020-0-19"){
            showtime = {

                'showtimes': [
                    {
                        "id": 5,
                        "date": new Date("2019-11-16T20:45:00Z"),
                        "movie": {
                            "id": 988332,
                            "title": "Testosteron",
                            "description": "Kornel - an ornithologist who became the most popular Polish scientist, has married a famous pop singer. However, the bride runs from the church, on the way kissing one of the guests.",
                            "duration": 110
                        }
                    }
                ]
            }
        }

        return showtime
    }
};

export default API;