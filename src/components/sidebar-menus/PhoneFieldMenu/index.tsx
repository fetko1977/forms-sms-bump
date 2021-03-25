import { useFormState, useFormDispatch } from '../../../context';
import './PhoneFiledMenu.scss';

const PhoneFiledMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    const dispatch = useFormDispatch();
    return (
        <div 
            className={ selectedTool === 'phone' ? 'toolbar-menu toolbar-menu--visible phone-field-menu' : 'toolbar-menu phone-field-menu'}
            onClick={() => dispatch({ type: 'UPDATE_SELECTED_TOOL', payload: ''})}
        >
            Phone Filed Menu
        </div>
    )
}

export default PhoneFiledMenu;