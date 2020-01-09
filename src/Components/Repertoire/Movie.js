import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";


class Movie extends React.Component
{


    render() {
        return (
            <>
                <Tooltip title={<h2>{this.props.movie.description}</h2>}>
                    <Button>{this.props.movie.title}</Button>
                </Tooltip>

            </>
 )
    }
};

export default Movie;