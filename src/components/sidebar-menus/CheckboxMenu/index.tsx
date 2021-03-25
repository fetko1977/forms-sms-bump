import { useFormState } from '../../../context';
import './CheckboxMenu.scss';

const CheckboxMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    return (
        <div className={selectedTool === 'checkbox' ? 'toolbar-menu toolbar-menu--visible checkbox-menu' : 'toolbar-menu checkbox-menu'}>
            Checkbox Menu
        </div>
    )
}

export default CheckboxMenu;