import { useFormState } from '../../../context';
import './ComplianceMenu.scss';

const ComplianceMenu = () => {
    const { selectedForm } = useFormState();
    const { selectedTool } = selectedForm;
    return (
        <div className={selectedTool === 'compliance' ? 'toolbar-menu toolbar-menu--visible compliance-menu' : 'toolbar-menu compliance-menu'}>
            Compliance Menu
        </div>
    )
}

export default ComplianceMenu;