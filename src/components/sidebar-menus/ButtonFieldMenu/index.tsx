import { useFormState, useFormDispatch } from '../../../context';
import './ButtonFieldMenu.scss';

const ButtonFieldMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    const dispatch = useFormDispatch();
    return (
        <div 
            className={ selectedTool === 'button' ? 'toolbar-menu toolbar-menu--visible button-field-menu' : 'toolbar-menu button-field-menu'}
            onClick={() => dispatch({ type: 'UPDATE_SELECTED_TOOL', payload: ''})}
        >
            Button Field Menu
        </div>
    )
}

export default ButtonFieldMenu;