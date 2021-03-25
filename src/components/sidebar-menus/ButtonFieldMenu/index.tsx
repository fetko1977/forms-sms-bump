import { useFormState } from '../../../context';
import './ButtonFieldMenu.scss';

const ButtonFieldMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    return (
        <div className={ selectedTool === 'button' ? 'toolbar-menu toolbar-menu--visible button-field-menu' : 'toolbar-menu button-field-menu'}>
            Button Field Menu
        </div>
    )
}

export default ButtonFieldMenu;