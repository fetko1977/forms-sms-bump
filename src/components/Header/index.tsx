import React from 'react'
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as FormEditIcon } from '../../assets/images/Pen-icon.svg';
import { ReactComponent as FormEditExitIcon } from '../../assets/images/Exit-icon.svg';
import Select, { OptionTypeBase } from 'react-select';

import { useFormDispatch, useFormState } from '../../context';

import './Header.scss';
const Header = () => {
    const { selectedForm } = useFormState();
    const {states, selectedState} = selectedForm;
    const dispatch = useFormDispatch();

    const handleFormStateChange = (selectedOption: OptionTypeBase ) => {
        dispatch({ type: 'UPDATE_STATE_OF_SELECTED_FORM', payload: selectedOption });
    }
    return (
        <div className="header">
            <div className="header__logo">
                <Logo />
            </div>
            <div className="header__form-info">
                <div className="header__form-info-name">
                    <FormEditIcon /> Form 1
                </div>
                <div className="header__form-state-select-wrapper">
                    <Select 
                        value={selectedState}
                        onChange={handleFormStateChange}
                        options={states}
                        className="header__form-state-select"
                        classNamePrefix="smsb"
                    />
                </div>
            </div>
            <div className="header__form-edit-exit">
                <button className="header__form-edit-exit-btn" onClick={() => console.log('clicked')}>
                    <FormEditExitIcon /> Exit
                </button>
            </div>
        </div>
    )
}

export default Header
