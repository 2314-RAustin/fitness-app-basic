import React from 'react';
import ExcerciceForm from '../components/ExcerciseForm';
import Card from '../components/Card';

export default ({form, onChange, onSubmit}) => (
    <div className="ExerciseNew_Lateral_Spaces row">
        <div className="col-sm ExerciseNew_Card_Space">
            <Card {...form}/>
        </div>
        <div className="col-sm ExerciseNew_Form_Space">
            <ExcerciceForm onChange={onChange} form={form} onSubmit={onSubmit} />
        </div>
    </div>
)