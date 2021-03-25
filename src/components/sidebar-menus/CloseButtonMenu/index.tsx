import { useFormState, useFormDispatch } from '../../../context';
import './CloseButtonMenu.scss';

const CloseButtonMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    const dispatch = useFormDispatch();

    return (
        <div 
            className={selectedTool === 'close' ? 'toolbar-menu toolbar-menu--visible close-button-menu' : 'toolbar-menu close-button-menu'}
            onClick={() => dispatch({ type: 'UPDATE_SELECTED_TOOL', payload: ''})}
        >
            Close Button Menu
        </div>
    )
}

export default CloseButtonMenu;