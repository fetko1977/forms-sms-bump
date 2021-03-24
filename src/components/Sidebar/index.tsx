import './Sidebar.scss';

import { 
    DesktopIcon, 
    TabletIcon, 
    MobileIcon,
    ThemeIcon,
    FormIcon,
    TextIcon,
    PhoneFieldIcon,
    EmailFieldIcon,
    NameFieldIcon,
    ButtonFieldIcon,
    CheckboxIcon,
    CloseButtonIcon,
    ComplianceIcon,
    ArrowNextIcon
 } from '../../icons';
import { useFormState, useFormDispatch } from '../../context';

const Sidebar = () => {
    const { responsiveMode } = useFormState();
    const dispatch = useFormDispatch();
    
    const changeResponsiveMode = (mode: string) => {
        if (responsiveMode === mode) {
            return;
        }

        dispatch({ type: 'UPDATE_RESPONSIVE_MODE', payload: mode })
    }

    const handleToolItemClick = (tool: string) => {

    }

    return (
        <div className="sidebar">
            <div className="sidebar__responsive-state-cta-wrapper">
                <button 
                    className={ responsiveMode === 'desktop' ? 'sidebar__responsive-state-cta selected' : 'sidebar__responsive-state-cta'}
                    onClick={() =>changeResponsiveMode('desktop')}
                ><DesktopIcon /></button>
                <button 
                    className={ responsiveMode === 'tablet' ? 'sidebar__responsive-state-cta selected' : 'sidebar__responsive-state-cta'}
                    onClick={() =>changeResponsiveMode('tablet')}
                ><TabletIcon /></button>
                <button 
                    className={ responsiveMode === 'mobile' ? 'sidebar__responsive-state-cta selected' : 'sidebar__responsive-state-cta'}
                    onClick={() =>changeResponsiveMode('mobile')}
                ><MobileIcon /></button>
            </div>
            <div className="sidebar__toolbar">
                <button
                    className="sidebar__toolbar-item"
                    onClick={() => handleToolItemClick('theme')}
                ><ThemeIcon /> Theme</button>
                <button
                    className="sidebar__toolbar-item"
                    onClick={() => handleToolItemClick('form')}
                ><FormIcon /> Form</button>
                <button
                    className="sidebar__toolbar-item"
                    onClick={() => handleToolItemClick('text')}
                ><TextIcon /> Text</button>
                <button
                    className="sidebar__toolbar-item"
                    onClick={() => handleToolItemClick('phone')}
                ><PhoneFieldIcon /> Phone Field</button>
                <button
                    className="sidebar__toolbar-item"
                    onClick={() => handleToolItemClick('email')}
                ><EmailFieldIcon /> Email Field</button>
                <button
                    className="sidebar__toolbar-item"
                    onClick={() => handleToolItemClick('name')}
                ><NameFieldIcon /> Name Field</button>
                <button
                    className="sidebar__toolbar-item"
                    onClick={() => handleToolItemClick('button')}
                ><ButtonFieldIcon /> Button Field</button>
                <button
                    className="sidebar__toolbar-item"
                    onClick={() => handleToolItemClick('checkbox')}
                ><CheckboxIcon /> Checkbox</button>
                <button
                    className="sidebar__toolbar-item"
                    onClick={() => handleToolItemClick('close')}
                ><CloseButtonIcon /> Close Button</button>
                <button
                    className="sidebar__toolbar-item"
                    onClick={() => handleToolItemClick('compliance')}
                ><ComplianceIcon /> Compliance</button>
            </div>
            <div className="sidebar__form-steps-cta-wrapper">
                <button
                    className="sidebar__form-steps-cta"
                    onClick={() => alert('Next Form Step')}
                >Next Form 1/4 <ArrowNextIcon /></button>
            </div>
        </div>
    )
}

export default Sidebar;
