import { useFormState } from '../../../context';
import './PhoneFiledMenu.scss';

const PhoneFiledMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    return (
        <div className={ selectedTool === 'phone' ? 'toolbar-menu toolbar-menu--visible phone-field-menu' : 'toolbar-menu phone-field-menu'}>
            Phone Filed Menu
        </div>
    )
}

export default PhoneFiledMenu;