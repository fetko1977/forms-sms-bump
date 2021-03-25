import { useFormState } from '../../../context';
import './CloseButtonMenu.scss';

const CloseButtonMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    return (
        <div className={selectedTool === 'close' ? 'toolbar-menu toolbar-menu--visible close-button-menu' : 'toolbar-menu close-button-menu'}>
            Close Button Menu
        </div>
    )
}

export default CloseButtonMenu;