import { useFormState, useFormDispatch } from '../../../context';
import './NameFieldMenu.scss';

const NameFieldMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    const dispatch = useFormDispatch();
    return (
        <div 
            className={ selectedTool === 'name' ? 'toolbar-menu toolbar-menu--visible name-field-menu' : 'toolbar-menu name-field-menu'}
            onClick={() => dispatch({ type: 'UPDATE_SELECTED_TOOL', payload: ''})}
        >
            Name Field Menu
        </div>
    )
}

export default NameFieldMenu;