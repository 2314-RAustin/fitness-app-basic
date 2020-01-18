import React from 'react';
import Card from './Card';
export default ({excercices})  => {
    return(
        <React.Fragment>
            {
                excercices.map( (excercise)  =>
                {
                    return(
                        <Card
                            key={excercise.id}
                            {...excercise}
                        />
                    )
                })
            }
        </React.Fragment>
    )
}