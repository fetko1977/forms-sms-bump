import './Form.scss';
import React from 'react';
import { useFormState } from '../../context';

const Form = () => {
    const { responsiveMode } = useFormState();
    return (
        <div className="form-wrapper">
            <div className={`form form--${responsiveMode}`}>
                Form
            </div>
        </div>
    )
}

export default Form;
