import './Form.scss';
import React from 'react';
import Theme from '../Theme';
import { useFormState } from '../../context';

const Form = () => {
    const { responsiveMode, selectedForm } = useFormState();
    const { selectedTheme } = selectedForm;

    return (
        <div className="form-wrapper">
            <div className={`form form--${responsiveMode}`}>
                <Theme selectedTheme={selectedTheme} />
            </div>
        </div>
    )
}

export default Form;
