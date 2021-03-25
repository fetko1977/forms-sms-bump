import { useFormState, useFormDispatch } from '../../../context';
import './FormMenu.scss';

const FormMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    const dispatch = useFormDispatch();
    return (
        <div
            className={ selectedTool === 'form' ? 'toolbar-menu toolbar-menu--visible form-menu' : 'toolbar-menu form-menu'}
            onClick={() => dispatch({ type: 'UPDATE_SELECTED_TOOL', payload: ''})}    
        >
            Form menu here
        </div>
    )
}

export default FormMenu;