import React from 'react';

function TripOverView(props) {
    console.log(props.playlisttime)
    return (
        <div >
            {props.directionsReady && 
            <div className="trip-totals">
                <h3>Total Distance:</h3> 
                <p>{(props.overView[0].totalDistance/1000).toFixed(1)} km</p> 
                <h3>Total Time:</h3> 
                <p>{(props.overView[0].totalTime/3600).toFixed(1)} hr </p>
                {props.playlisttime>0 ?
                    <div>
                        <h3>Playlist Time:</h3>
                        <p>{props.playlisttime}</p>                    
                    </div>
                    :
                    null
                }
                <button onClick={props.startTrip} className="buttons">
                    Start Trip
                </button>
            </div>    
            }
        </div>
    )
}

export default TripOverView;