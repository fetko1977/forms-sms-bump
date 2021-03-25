import { useFormState } from '../../../context';
import './NameFieldMenu.scss';

const NameFieldMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    return (
        <div className={ selectedTool === 'name' ? 'toolbar-menu toolbar-menu--visible name-field-menu' : 'toolbar-menu name-field-menu'}>
            Name Field Menu
        </div>
    )
}

export default NameFieldMenu;