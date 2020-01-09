import React from 'react';
import Card from './Card';
export default ({excercices}) => {
    return(
        <div>
            {
                excercices.information.map((excercise) =>
                {
                    return(
                        <Card
                            key={excercise.id}
                            title={excercise.title}
                            description={excercise.description}
                            img={excercise.img}
                            leftColor={excercise.leftColor}
                            rightColor={excercise.rightColor}
                        />
                    )
                })
            }
        </div>
    )
}