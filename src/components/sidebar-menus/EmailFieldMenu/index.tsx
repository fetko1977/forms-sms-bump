import { useFormState, useFormDispatch } from '../../../context';
import './EmailFieldMenu.scss';

const EmailFieldMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    const dispatch = useFormDispatch();
    return (
        <div
            className={ selectedTool === 'email' ? 'toolbar-menu toolbar-menu--visible email-field-menu' : 'toolbar-menu email-field-menu'}
            onClick={() => dispatch({ type: 'UPDATE_SELECTED_TOOL', payload: ''})}
        >
            Email Field Menu
        </div>
    )
}

export default EmailFieldMenu;