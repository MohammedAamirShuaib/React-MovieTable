import React from 'react';

const MovieFoms = ({match, history}) => {
    return ( 
        <div>
            <h1>MovieFoms: {match.params.id}</h1>
            <button className="btn btn-primary" onClick={()=>history.push('/movies')}>Go Back</button>
        </div>
     );
}
 
export default MovieFoms;