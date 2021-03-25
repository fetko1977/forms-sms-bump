import { useFormState, useFormDispatch } from '../../../context';
import './TextMenu.scss';

const TextMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    const dispatch = useFormDispatch();
    return (
        <div 
            className={selectedTool === 'text' ? 'toolbar-menu toolbar-menu--visible text-menu' : 'toolbar-menu text-menu'}
            onClick={() => dispatch({ type: 'UPDATE_SELECTED_TOOL', payload: ''})}
        >
            Text menu here
        </div>
    )
}

export default TextMenu;