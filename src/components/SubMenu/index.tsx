import React from 'react'
import { TrashIcon, UndoIcon, RedoIcon } from '../../icons';

import { useFormDispatch, useFormState } from '../../context';

import './SubMenu.scss';
const SubMenu = () => {
    const { selectedForm } = useFormState();
    const {editMode, editSuccess} = selectedForm;
    const dispatch = useFormDispatch();

    const changeMode = (mode: string) => {
        if (editMode === mode) {
            return;
        }

        dispatch({ type: 'UPDATE_MODE_OF_SELECTED_FORM', payload: mode});
    }

    const changeEditSuccess = (success: boolean) => {
        if (editSuccess === success) {
            return;
        }

        dispatch({ type: 'UPDATE_SUCCESS_OF_SELECTED_FORM', payload: success});
    }

    return (
        <div className="sub-menu">
            <div className="sub-menu__mode-selector">
                <button 
                    className={editMode === 'design' ? 'sub-menu__select-btn selected' : 'sub-menu__select-btn'}
                    onClick={() => changeMode('design')}
                >1.Design</button>
                <button 
                    className={editMode === 'behavior' ? 'sub-menu__select-btn selected' : 'sub-menu__select-btn'}
                    onClick={() => changeMode('behavior')}
                >2.Behavior</button>
            </div>
            <div className="sub-menu__actions">
                <div className="sub-menu__actions-form-actions">
                    <button 
                        className={editSuccess ? 'sub-menu__actions-form-actions-btn' : 'sub-menu__actions-form-actions-btn selected'}
                        onClick={() => changeEditSuccess(false)}
                    >Form 1</button>
                    <button 
                        className={editSuccess ? 'sub-menu__actions-form-actions-btn selected' : 'sub-menu__actions-form-actions-btn'}
                        onClick={() => changeEditSuccess(true)}
                    >Success</button>
                </div>
                <div className="sub-menu__actions-form-edit-history">
                    <div className="sub-menu__actions-form-edit-history-actions">
                        <button 
                            className="sub-menu__actions-form-edit-history-actions-btn"
                            onClick={() => alert('Undo')}
                        ><UndoIcon /> Undo</button>
                        <button 
                            className="sub-menu__actions-form-edit-history-actions-btn"
                            onClick={() => alert('Redo')}
                        ><RedoIcon /> Redo</button>
                    </div>
                    <div className="sub-menu__actions-form-edit-history-delete">
                        <button 
                            className="sub-menu__actions-form-edit-history-delete-btn"
                            onClick={() => alert('Delete Element')}
                        ><TrashIcon /> Delete Element</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubMenu;
