import React from "react";

class Movie extends React.Component{

    render() {
        return (
            <>
                <h1>Movie</h1>
                <a className = "waves-effect waves-light btn modal-trigger" href = "#modal1" > Modal < /a>

                    <div id="modal1" className="modal">
                        <div className="modal-content">
                            <h4>Modal Header</h4>
                            <p>A bunch of text</p>
                        </div>
                        <div className="modal-footer">
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                        </div>
                    </div>

            </>


        )
    }
}

export default Movie;