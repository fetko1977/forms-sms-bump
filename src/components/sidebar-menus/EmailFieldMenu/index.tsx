import { useFormState } from '../../../context';
import './EmailFieldMenu.scss';

const EmailFieldMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    return (
        <div className={ selectedTool === 'email' ? 'toolbar-menu toolbar-menu--visible email-field-menu' : 'toolbar-menu email-field-menu'}>
            Email Field Menu
        </div>
    )
}

export default EmailFieldMenu;