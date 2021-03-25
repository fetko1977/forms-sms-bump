import { useFormState } from '../../../context';
import './TextMenu.scss';

const TextMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    return (
        <div className={selectedTool === 'text' ? 'toolbar-menu toolbar-menu--visible text-menu' : 'toolbar-menu text-menu'}>
            Text menu here
        </div>
    )
}

export default TextMenu;