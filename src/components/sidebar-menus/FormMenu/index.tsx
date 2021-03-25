import { useFormState } from '../../../context';
import './FormMenu.scss';

const FormMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    return (
        <div className={ selectedTool === 'form' ? 'toolbar-menu toolbar-menu--visible form-menu' : 'toolbar-menu form-menu'}>
            Form menu here
        </div>
    )
}

export default FormMenu;