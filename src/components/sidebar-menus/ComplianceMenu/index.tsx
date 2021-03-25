import { useFormState, useFormDispatch } from '../../../context';
import './ComplianceMenu.scss';

const ComplianceMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    const dispatch = useFormDispatch();
    return (
        <div 
            className={selectedTool === 'compliance' ? 'toolbar-menu toolbar-menu--visible compliance-menu' : 'toolbar-menu compliance-menu'}
            onClick={() => dispatch({ type: 'UPDATE_SELECTED_TOOL', payload: ''})}
        >
            Compliance Menu
        </div>
    )
}

export default ComplianceMenu;