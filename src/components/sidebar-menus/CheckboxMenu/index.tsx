import { useFormState, useFormDispatch } from '../../../context';
import './CheckboxMenu.scss';

const CheckboxMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    const dispatch = useFormDispatch();
    return (
        <div 
            className={selectedTool === 'checkbox' ? 'toolbar-menu toolbar-menu--visible checkbox-menu' : 'toolbar-menu checkbox-menu'}
            onClick={() => dispatch({ type: 'UPDATE_SELECTED_TOOL', payload: ''})}
        >
            Checkbox Menu
        </div>
    )
}

export default CheckboxMenu;